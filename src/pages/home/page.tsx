import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { posts, categories } from '../../mocks/posts';
import { useSEO, generateWebsiteSchema } from '../../utils/seo';

export default function HomePage() {
  const [email, setEmail] = useState('');

  // SEO Configuration
  useSEO({
    title: 'EE9.com - Australian Gaming Insights & Strategies Blog',
    description: 'Expert insights on pokies, sports betting, slots, and live games in Australia. Learn strategies, understand RTP, volatility, and responsible gambling practices.',
    keywords: 'pokies Australia, sports betting, slots strategies, live casino, RTP, responsible gambling',
    ogImage: 'https://static.readdy.ai/image/31a1107996a99a56af02e61b22b1b81c/7b3f8fa3c225f7c0616134a058e3b6c0.png',
    schema: generateWebsiteSchema(),
  });

  const featuredPosts = posts.filter(post => post.featured).slice(0, 3);
  const latestPosts = posts.slice(0, 6);
  const popularPosts = [...posts].sort((a, b) => b.views - a.views).slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Newsletter subscription feature coming soon!');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20futuristic%20abstract%20digital%20gaming%20technology%20background%20with%20golden%20yellow%20accents%20and%20dark%20black%20tones%20creating%20sophisticated%20atmosphere%20perfect%20for%20casino%20and%20sports%20betting%20website%20hero%20section%20with%20geometric%20patterns%20and%20sleek%20design%20elements&width=1920&height=1080&seq=hero-main-001&orientation=landscape')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 text-center w-full">
          <h1 className="font-poppins font-extrabold text-5xl md:text-7xl lg:text-8xl italic mb-6 text-white leading-tight">
            Master the Game
            <span className="block text-brand-gold-light mt-2">Win with Strategy</span>
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert insights on pokies, sports betting, slots, and live casino games in Australia. Learn proven strategies and play responsibly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/guides">
              <Button size="lg" variant="primary">
                Explore Guides
              </Button>
            </Link>
            <Link to="/glossary">
              <Button size="lg" variant="outline">
                Gaming Glossary
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-brand-neutral">
            <div className="flex items-center gap-2">
              <i className="ri-article-line text-brand-gold text-xl"></i>
              <span>60+ Expert Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-shield-check-line text-brand-gold text-xl"></i>
              <span>18+ Responsible Gaming</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 md:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl italic text-white mb-2">
                Featured <span className="text-brand-gold">Articles</span>
              </h2>
              <p className="font-inter text-brand-neutral">Must-read guides for every player</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Link key={post.id} to={`/post/${post.slug}`}>
                <Card hover gradient>
                  <div className="h-48 bg-gradient-to-br from-brand-gold/20 to-brand-gold-light/10 flex items-center justify-center relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-80"
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
                    <div className="flex items-center justify-between text-xs text-brand-neutral">
                      <span className="flex items-center gap-1">
                        <i className="ri-time-line"></i>
                        {post.readingTime} min read
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-eye-line"></i>
                        {post.views.toLocaleString()} views
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl italic text-white mb-4">
              Explore by <span className="text-brand-gold">Category</span>
            </h2>
            <p className="font-inter text-brand-neutral max-w-2xl mx-auto">
              Dive deep into specific gaming topics with our comprehensive category guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/category/${category.slug}`}>
                <Card hover className="h-full">
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center">
                      <i className={`${category.icon} text-3xl text-brand-black`}></i>
                    </div>
                    <h3 className="font-poppins font-bold text-xl text-white mb-3">
                      {category.name}
                    </h3>
                    <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 md:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl italic text-white mb-2">
                Latest <span className="text-brand-gold">Insights</span>
              </h2>
              <p className="font-inter text-brand-neutral">Fresh content updated regularly</p>
            </div>
            <Link to="/category/guides">
              <Button variant="outline">View All</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
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
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-brand-gold/20 text-brand-gold text-xs font-inter font-semibold rounded whitespace-nowrap">
                        {post.category}
                      </span>
                      <span className="text-brand-neutral text-xs">{post.publishDate}</span>
                    </div>
                    <h3 className="font-poppins font-bold text-lg text-white mb-3 line-clamp-2 hover:text-brand-gold transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="font-inter text-sm text-brand-neutral mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-brand-neutral pt-4 border-t border-brand-gold/10">
                      <span>{post.author}</span>
                      <span>{post.readingTime} min</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Posts Sidebar Style */}
      <section className="py-16 md:py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl italic text-white mb-8">
                This Week's <span className="text-brand-gold">Hot Topics</span>
              </h2>
              <div className="space-y-6">
                {popularPosts.map((post, index) => (
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
                        <span className="text-brand-gold text-xs font-inter font-semibold mb-2 block">
                          {post.category}
                        </span>
                        <h3 className="font-poppins font-bold text-lg text-white mb-2 hover:text-brand-gold transition-colors duration-300">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-4 text-xs text-brand-neutral">
                          <span className="flex items-center gap-1">
                            <i className="ri-eye-line"></i>
                            {post.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <i className="ri-time-line"></i>
                            {post.readingTime} min
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Sidebar */}
            <div>
              <Card gradient className="sticky top-24">
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center">
                    <i className="ri-mail-line text-3xl text-brand-black"></i>
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-white mb-4 text-center">
                    Stay Updated
                  </h3>
                  <p className="font-inter text-sm text-brand-neutral mb-6 text-center">
                    Get weekly insights, strategies, and exclusive tips delivered to your inbox.
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-white placeholder-brand-neutral focus:outline-none focus:border-brand-gold transition-colors duration-300 text-sm font-inter"
                    />
                    <Button type="submit" fullWidth>
                      Subscribe Now
                    </Button>
                  </form>
                  <p className="text-xs text-brand-neutral text-center mt-4">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </Card>

              <Card className="mt-6">
                <div className="p-6 bg-gradient-to-br from-brand-gold/10 to-transparent">
                  <div className="flex items-center gap-3 mb-4">
                    <i className="ri-shield-check-line text-3xl text-brand-gold"></i>
                    <h4 className="font-poppins font-bold text-lg text-white">
                      18+ Only
                    </h4>
                  </div>
                  <p className="font-inter text-sm text-brand-neutral mb-4">
                    Gambling should be entertaining. Play responsibly and within your limits.
                  </p>
                  <Link to="/responsible-gambling">
                    <Button variant="outline" size="sm" fullWidth>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-dark via-brand-black to-brand-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl italic text-white mb-6">
            Ready to Level Up Your <span className="text-brand-gold">Gaming Knowledge?</span>
          </h2>
          <p className="font-inter text-lg text-brand-neutral mb-8 max-w-2xl mx-auto">
            Access our complete library of guides, strategies, and tools designed for Australian players.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/guides">
              <Button size="lg">Browse All Guides</Button>
            </Link>
            <Link to="/tools">
              <Button size="lg" variant="outline">Try Our Tools</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
