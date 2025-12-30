import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { posts } from '../../mocks/posts';

export default function TagPage() {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');

  const tagName = slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || '';
  const tagPosts = posts.filter(post => 
    post.tags.some(tag => tag.toLowerCase().replace(/\s+/g, '-') === slug?.toLowerCase())
  );

  const sortedPosts = [...tagPosts].sort((a, b) => {
    if (sortBy === 'popular') return b.views - a.views;
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
  });

  // SEO Configuration
  useEffect(() => {
    if (tagName) {
      document.title = `${tagName} - Gaming Articles & Guides | EE9.com`;
      
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

      updateMetaTag('description', `Explore ${tagPosts.length} articles about ${tagName}. Expert insights, strategies, and guides for Australian gaming enthusiasts.`);
      updateMetaTag('keywords', `${tagName}, gaming guides, casino strategies, Australian gaming`);
      updateMetaTag('og:title', `${tagName} - Gaming Articles & Guides`, true);
      updateMetaTag('og:description', `Explore ${tagPosts.length} articles about ${tagName}`, true);
      updateMetaTag('og:type', 'website', true);

      const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${tagName} Articles`,
        description: `Collection of articles tagged with ${tagName}`,
        url: `${import.meta.env.VITE_SITE_URL || 'https://ee9.com'}/tag/${slug}`,
      };

      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(collectionSchema);
    }
  }, [tagName, tagPosts.length, slug]);

  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-brand-neutral mb-6 font-inter">
            <Link to="/" className="hover:text-brand-gold transition-colors duration-300 cursor-pointer">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-brand-gold">Tags</span>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-white">{tagName}</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center">
              <i className="ri-price-tag-3-line text-3xl text-brand-black"></i>
            </div>
            <div>
              <h1 className="font-poppins font-bold text-4xl md:text-6xl italic text-white">
                {tagName}
              </h1>
              <p className="font-inter text-brand-neutral mt-2">
                {tagPosts.length} articles tagged
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
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
              <p className="font-inter text-brand-neutral mb-6">This tag doesn't have any articles yet</p>
              <Link to="/">
                <Button>Browse All Articles</Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
