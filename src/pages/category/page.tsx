import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { posts, categories, tags } from '../../mocks/posts';
import { useSEO, generateBreadcrumbSchema } from '../../utils/seo';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const category = categories.find(cat => cat.slug === slug);
  const categoryPosts = posts.filter(post => post.category.toLowerCase() === slug?.toLowerCase());

  const filteredPosts = selectedTag
    ? categoryPosts.filter(post => post.tags.includes(selectedTag))
    : categoryPosts;

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'popular') return b.views - a.views;
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
  });

  const categoryTags = Array.from(new Set(categoryPosts.flatMap(post => post.tags)));

  // SEO Configuration
  useEffect(() => {
    if (category) {
      const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Categories', url: '/' },
        { name: category.name, url: `/category/${category.slug}` },
      ]);

      const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${category.name} Articles`,
        description: categoryDescriptions[category.slug] || category.description,
        url: `${import.meta.env.VITE_SITE_URL || 'https://ee9.com'}/category/${category.slug}`,
      };

      const combinedSchema = {
        '@context': 'https://schema.org',
        '@graph': [collectionSchema, breadcrumbSchema],
      };

      document.title = `${category.name} - Gaming Guides & Strategies | EE9.com`;
      
      const updateMetaTag = (name: string, content: string, isProperty = false) => {
        const attribute = isProperty ? 'property' : 'name';
        let element = document.querySelector(`meta[${attribute}="${name}"]`);
        
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute(attribute, name);
          document.head.appendChild(element);
        }
        
        element.setAttribute('content', content);
      };

      updateMetaTag('description', categoryDescriptions[category.slug] || category.description);
      updateMetaTag('keywords', `${category.name}, ${categoryTags.slice(0, 5).join(', ')}, Australian gaming`);
      updateMetaTag('og:title', `${category.name} - Gaming Guides & Strategies`, true);
      updateMetaTag('og:description', categoryDescriptions[category.slug] || category.description, true);
      updateMetaTag('og:type', 'website', true);

      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(combinedSchema);
    }
  }, [category, categoryTags]);

  if (!category) {
    return (
      <div className="min-h-screen bg-brand-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-poppins font-bold text-4xl mb-4">Category Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryDescriptions: Record<string, string> = {
    pokies: 'Discover comprehensive guides on pokies including RTP analysis, volatility strategies, bonus features, and bankroll management. Learn how to choose the best pokies, understand payout mechanics, and maximize your gaming experience with expert insights tailored for Australian players.',
    sports: 'Master sports betting with our expert strategies covering AFL, NRL, and international sports. Learn bankroll management, odds analysis, value betting techniques, parlay strategies, and in-play betting tactics. Understand how to read form, analyze statistics, and make informed betting decisions.',
    slots: 'Explore the world of online slots with detailed analysis of Megaways mechanics, progressive jackpots, bonus features, and game volatility. Learn about different slot types including cluster pays, cascading reels, and hold-and-win features. Discover strategies to maximize your slot gaming experience.',
    live: 'Dive into live casino gaming with comprehensive guides on blackjack basic strategy, roulette betting systems, baccarat rules, poker hand rankings, and live game shows. Learn proper etiquette, understand streaming requirements, and master the strategies that work in real-time dealer games.',
    guides: 'Essential gaming guides covering responsible gambling practices, beginner fundamentals, advanced strategies, and industry insights. Learn about gaming regulations in Australia, understand key concepts, and develop healthy gaming habits with our comprehensive educational resources.',
  };

  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Header />

      {/* Category Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20$%7Bcategory.name.toLowerCase%28%29%7D%20gaming%20theme%20with%20golden%20accents%20on%20dark%20background%20modern%20professional%20style%20suitable%20for%20category%20header%20clean%20minimalist%20design&width=1920&height=600&seq=cat-${category.id}&orientation=landscape')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/80 to-brand-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-brand-neutral mb-4 font-inter">
            <Link to="/" className="hover:text-brand-gold transition-colors duration-300 cursor-pointer">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-brand-gold">Categories</span>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-white">{category.name}</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center">
              <i className={`${category.icon} text-4xl text-brand-black`}></i>
            </div>
            <div>
              <h1 className="font-poppins font-bold text-4xl md:text-6xl italic text-white">
                {category.name}
              </h1>
              <p className="font-inter text-brand-neutral mt-2">
                {categoryPosts.length} articles available
              </p>
            </div>
          </div>

          <p className="font-inter text-lg text-white/80 max-w-4xl leading-relaxed">
            {categoryDescriptions[category.slug] || category.description}
          </p>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="py-12 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Tags Filter */}
          <div className="mb-8">
            <h3 className="font-poppins font-semibold text-lg text-white mb-4">Filter by Topic</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full text-sm font-inter transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedTag === null
                    ? 'bg-brand-gold text-brand-black'
                    : 'bg-brand-black border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10'
                }`}
              >
                All Topics
              </button>
              {categoryTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-inter transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-brand-gold text-brand-black'
                      : 'bg-brand-black border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center justify-between mb-8">
            <p className="font-inter text-brand-neutral">
              Showing {sortedPosts.length} {sortedPosts.length === 1 ? 'article' : 'articles'}
            </p>
            <div className="flex items-center gap-2">
              <span className="font-inter text-sm text-brand-neutral">Sort by:</span>
              <button
                onClick={() => setSortBy('latest')}
                className={`px-4 py-2 rounded-lg text-sm font-inter transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  sortBy === 'latest'
                    ? 'bg-brand-gold text-brand-black'
                    : 'bg-brand-black text-brand-gold hover:bg-brand-gold/10'
                }`}
              >
                Latest
              </button>
              <button
                onClick={() => setSortBy('popular')}
                className={`px-4 py-2 rounded-lg text-sm font-inter transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  sortBy === 'popular'
                    ? 'bg-brand-gold text-brand-black'
                    : 'bg-brand-black text-brand-gold hover:bg-brand-gold/10'
                }`}
              >
                Popular
              </button>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post, index) => (
              <Link key={post.id} to={`/post/${post.slug}`}>
                <Card hover className="h-full">
                  <div className="h-64 bg-gradient-to-br from-brand-gold/20 to-brand-gold-light/10 flex items-center justify-center relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${post.imageUrl}')`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-brand-gold text-brand-black text-xs font-poppins font-bold rounded-full whitespace-nowrap">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-brand-gold/20 text-brand-gold text-xs font-inter font-semibold rounded whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-poppins font-bold text-xl text-white mb-3 line-clamp-2 hover:text-brand-gold transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="font-inter text-sm text-brand-neutral mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-brand-neutral pt-4 border-t border-brand-gold/10">
                      <span>{post.author}</span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <i className="ri-time-line"></i>
                          {post.readingTime}m
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="ri-eye-line"></i>
                          {post.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {sortedPosts.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-file-search-line text-6xl text-brand-gold/30 mb-4"></i>
              <h3 className="font-poppins font-bold text-2xl text-white mb-2">No Articles Found</h3>
              <p className="font-inter text-brand-neutral mb-6">Try selecting a different tag or view all topics</p>
              <Button onClick={() => setSelectedTag(null)}>View All Articles</Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
