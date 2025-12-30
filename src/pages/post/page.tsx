import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { posts } from '../../mocks/posts';
import { useSEO, generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '../../utils/seo';

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [readingProgress, setReadingProgress] = useState(0);

  const post = posts.find(p => p.slug === slug);

  // SEO Configuration
  useEffect(() => {
    if (post) {
      const articleSchema = generateArticleSchema({
        title: post.title,
        description: post.excerpt,
        author: post.author,
        publishDate: post.publishDate,
        imageUrl: post.imageUrl,
        category: post.category,
      });

      const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: post.category, url: `/category/${post.category.toLowerCase()}` },
        { name: post.title, url: `/post/${post.slug}` },
      ]);

      const faqSchema = generateFAQSchema([
        {
          question: 'How much should I budget for gaming?',
          answer: 'Only use money you can afford to lose - typically no more than 5% of your monthly entertainment budget. Never use money needed for bills, savings, or essential expenses.',
        },
        {
          question: "What's the best strategy for beginners?",
          answer: 'Start with games that have simple rules and low minimum bets. Focus on learning the mechanics and managing your bankroll before attempting more complex strategies or higher stakes.',
        },
        {
          question: "How do I know if I'm developing a problem?",
          answer: 'Warning signs include spending more than you can afford, chasing losses, neglecting responsibilities, or gaming to escape problems. If you recognize these signs, seek help immediately through resources like Gambling Help Online.',
        },
      ]);

      // Combine schemas
      const combinedSchema = {
        '@context': 'https://schema.org',
        '@graph': [articleSchema, breadcrumbSchema, faqSchema],
      };

      // Use SEO hook
      const seoConfig = {
        title: `${post.title} | EE9.com`,
        description: post.excerpt,
        keywords: `${post.tags.join(', ')}, ${post.category}, Australian gaming`,
        ogTitle: post.title,
        ogDescription: post.excerpt,
        ogImage: post.imageUrl,
        ogType: 'article',
        schema: combinedSchema,
      };

      // Manually update SEO since we're in useEffect
      document.title = seoConfig.title;
      
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

      updateMetaTag('description', seoConfig.description);
      updateMetaTag('keywords', seoConfig.keywords || '');
      updateMetaTag('og:title', seoConfig.ogTitle || seoConfig.title, true);
      updateMetaTag('og:description', seoConfig.ogDescription || seoConfig.description, true);
      updateMetaTag('og:type', seoConfig.ogType || 'website', true);
      if (seoConfig.ogImage) updateMetaTag('og:image', seoConfig.ogImage, true);
      updateMetaTag('twitter:title', seoConfig.ogTitle || seoConfig.title);
      updateMetaTag('twitter:description', seoConfig.ogDescription || seoConfig.description);
      if (seoConfig.ogImage) updateMetaTag('twitter:image', seoConfig.ogImage);

      // Add schema
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(combinedSchema);
    }
  }, [post]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-poppins font-bold text-4xl mb-4">Article Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = posts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  const currentIndex = posts.findIndex(p => p.id === post.id);
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Header />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-brand-dark z-50">
        <div 
          className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-brand-neutral mb-6 font-inter">
            <Link to="/" className="hover:text-brand-gold transition-colors duration-300 cursor-pointer">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link to={`/category/${post.category.toLowerCase()}`} className="hover:text-brand-gold transition-colors duration-300 cursor-pointer">
              {post.category}
            </Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-white truncate">{post.title}</span>
          </div>

          {/* Category Badge */}
          <div className="mb-4">
            <Link to={`/category/${post.category.toLowerCase()}`}>
              <span className="px-4 py-2 bg-brand-gold text-brand-black text-sm font-poppins font-bold rounded-full inline-block hover:bg-brand-gold-light transition-colors duration-300 cursor-pointer whitespace-nowrap">
                {post.category}
              </span>
            </Link>
          </div>

          {/* Title */}
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="font-inter text-xl text-brand-neutral mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-brand-gold/20 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center">
                <span className="font-poppins font-bold text-brand-black text-lg">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-inter font-semibold text-white">{post.author}</p>
                <p className="font-inter text-sm text-brand-neutral">{post.publishDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-brand-neutral font-inter">
              <span className="flex items-center gap-1">
                <i className="ri-time-line text-brand-gold"></i>
                {post.readingTime} min read
              </span>
              <span className="flex items-center gap-1">
                <i className="ri-eye-line text-brand-gold"></i>
                {post.views.toLocaleString()} views
              </span>
            </div>
          </div>

          {/* Hero Section with Featured Image */}
          <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${post.imageUrl}')`
              }}
            />
          </section>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="font-poppins font-bold text-3xl text-white mb-4 mt-12">Introduction</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Welcome to this comprehensive guide where we'll explore everything you need to know about {post.title.toLowerCase()}. Whether you're a beginner just starting out or an experienced player looking to refine your approach, this article will provide valuable insights and practical strategies you can apply immediately.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-white mb-4 mt-12">Understanding the Basics</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Before diving into advanced strategies, it's crucial to understand the fundamental concepts. In the Australian gaming landscape, knowledge is your most powerful tool. Let's break down the key elements that every player should master to make informed decisions and enhance their overall experience.
            </p>

            <div className="bg-brand-dark border-l-4 border-brand-gold p-6 rounded-r-xl my-8">
              <div className="flex items-start gap-4">
                <i className="ri-lightbulb-line text-3xl text-brand-gold flex-shrink-0"></i>
                <div>
                  <h4 className="font-poppins font-bold text-xl text-white mb-2">Pro Tip</h4>
                  <p className="font-inter text-white/80 leading-relaxed">
                    Always start with a clear budget and stick to it. Successful players treat gaming as entertainment, not as a way to make money. Set both win and loss limits before you begin, and have the discipline to walk away when you reach them.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-poppins font-bold text-3xl text-white mb-4 mt-12">Key Strategies and Techniques</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Now that we've covered the basics, let's explore proven strategies that can significantly improve your results. These techniques have been tested by experienced players and are backed by mathematical principles and real-world experience.
            </p>

            <h3 className="font-poppins font-semibold text-2xl text-brand-gold mb-3 mt-8">Strategy 1: Bankroll Management</h3>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Proper bankroll management is the foundation of sustainable gaming. Divide your total bankroll into smaller session budgets, typically 5-10% of your total funds per session. This approach ensures you can weather losing streaks while maximizing your playing time and enjoyment.
            </p>

            <h3 className="font-poppins font-semibold text-2xl text-brand-gold mb-3 mt-8">Strategy 2: Understanding Probability</h3>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Every game has underlying mathematics that determine outcomes. Understanding concepts like RTP (Return to Player), house edge, and variance helps you make smarter choices about which games to play and how to approach them. Knowledge of probability doesn't guarantee wins, but it does help you set realistic expectations.
            </p>

            <h3 className="font-poppins font-semibold text-2xl text-brand-gold mb-3 mt-8">Strategy 3: Timing and Session Control</h3>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Knowing when to play and when to stop is crucial. Set time limits for your sessions and take regular breaks. Fatigue and emotional decision-making are the enemies of smart gaming. Fresh, focused players make better decisions and enjoy the experience more.
            </p>

            <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
              <div className="flex items-start gap-4">
                <i className="ri-alert-line text-3xl text-red-500 flex-shrink-0"></i>
                <div>
                  <h4 className="font-poppins font-bold text-xl text-white mb-2">Common Mistakes to Avoid</h4>
                  <ul className="font-inter text-white/80 leading-relaxed space-y-2 list-disc list-inside">
                    <li>Chasing losses by increasing bet sizes</li>
                    <li>Playing without understanding the rules</li>
                    <li>Ignoring bankroll limits</li>
                    <li>Gaming while under the influence or emotional</li>
                    <li>Believing in "hot" or "cold" streaks</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="font-poppins font-bold text-3xl text-white mb-4 mt-12">Real-World Examples</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Let's look at practical scenarios that illustrate these concepts in action. These examples are based on common situations Australian players encounter and demonstrate how applying the right strategies can make a significant difference.
            </p>

            <div className="bg-brand-dark p-6 rounded-xl my-8">
              <h4 className="font-poppins font-bold text-xl text-brand-gold mb-3">Example Scenario</h4>
              <p className="font-inter text-white/80 leading-relaxed mb-4">
                Sarah has a $500 bankroll and wants to enjoy a weekend of gaming. Instead of betting large amounts hoping for quick wins, she divides her bankroll into 10 sessions of $50 each. She sets a win goal of $25 per session and a loss limit of $50. This approach allows her to enjoy multiple sessions, and even if she has some losing sessions, she still has funds to continue playing responsibly.
              </p>
              <p className="font-inter text-brand-gold-light font-semibold">
                Result: Sarah enjoys her weekend, has several winning sessions, and leaves with $480 - only $20 down but with hours of entertainment value.
              </p>
            </div>

            <h2 className="font-poppins font-bold text-3xl text-white mb-4 mt-12">Advanced Considerations</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              For those looking to take their understanding to the next level, consider these advanced factors that can further optimize your approach. These concepts require more study but can provide additional edges when applied correctly.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-white mb-4 mt-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6 my-8">
              <div className="bg-brand-dark p-6 rounded-xl">
                <h4 className="font-poppins font-bold text-lg text-brand-gold mb-2">Q: How much should I budget for gaming?</h4>
                <p className="font-inter text-white/80 leading-relaxed">
                  A: Only use money you can afford to lose - typically no more than 5% of your monthly entertainment budget. Never use money needed for bills, savings, or essential expenses.
                </p>
              </div>

              <div className="bg-brand-dark p-6 rounded-xl">
                <h4 className="font-poppins font-bold text-lg text-brand-gold mb-2">Q: What's the best strategy for beginners?</h4>
                <p className="font-inter text-white/80 leading-relaxed">
                  A: Start with games that have simple rules and low minimum bets. Focus on learning the mechanics and managing your bankroll before attempting more complex strategies or higher stakes.
                </p>
              </div>

              <div className="bg-brand-dark p-6 rounded-xl">
                <h4 className="font-poppins font-bold text-lg text-brand-gold mb-2">Q: How do I know if I'm developing a problem?</h4>
                <p className="font-inter text-white/80 leading-relaxed">
                  A: Warning signs include spending more than you can afford, chasing losses, neglecting responsibilities, or gaming to escape problems. If you recognize these signs, seek help immediately through resources like Gambling Help Online.
                </p>
              </div>
            </div>

            <h2 className="font-poppins font-bold text-3xl text-white mb-4 mt-12">Conclusion</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Understanding {post.title.toLowerCase()} is essential for any Australian player looking to maximize their enjoyment while minimizing risks. By applying the strategies and principles outlined in this guide, you'll be better equipped to make informed decisions and maintain healthy gaming habits.
            </p>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Remember, the goal is entertainment, not profit. Set realistic expectations, manage your bankroll wisely, and always play responsibly. If you ever feel gaming is becoming a problem, don't hesitate to seek help from professional resources.
            </p>

            <div className="bg-gradient-to-r from-brand-gold/10 to-brand-gold-light/10 border border-brand-gold/30 p-6 rounded-xl my-8">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-shield-check-line text-2xl text-brand-gold"></i>
                <h4 className="font-poppins font-bold text-lg text-white">Responsible Gambling Reminder</h4>
              </div>
              <p className="font-inter text-white/80 leading-relaxed">
                This article is for educational purposes only. Always gamble responsibly, set limits, and seek help if needed. You must be 18+ to participate in gambling activities in Australia.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-brand-gold/20">
            <h4 className="font-poppins font-semibold text-lg text-white mb-4">Related Topics</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link key={tag} to={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="px-4 py-2 bg-brand-dark border border-brand-gold/30 rounded-full text-brand-gold text-sm font-inter hover:bg-brand-gold hover:text-brand-black transition-all duration-300 cursor-pointer whitespace-nowrap">
                    {tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {previousPost && (
              <Link to={`/post/${previousPost.slug}`}>
                <Card hover className="h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-brand-gold text-sm mb-2 font-inter">
                      <i className="ri-arrow-left-line"></i>
                      <span>Previous Article</span>
                    </div>
                    <h4 className="font-poppins font-bold text-lg text-white hover:text-brand-gold transition-colors duration-300 line-clamp-2">
                      {previousPost.title}
                    </h4>
                  </div>
                </Card>
              </Link>
            )}
            {nextPost && (
              <Link to={`/post/${nextPost.slug}`}>
                <Card hover className="h-full">
                  <div className="p-6 text-right">
                    <div className="flex items-center justify-end gap-2 text-brand-gold text-sm mb-2 font-inter">
                      <span>Next Article</span>
                      <i className="ri-arrow-right-line"></i>
                    </div>
                    <h4 className="font-poppins font-bold text-lg text-white hover:text-brand-gold transition-colors duration-300 line-clamp-2">
                      {nextPost.title}
                    </h4>
                  </div>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-brand-dark">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl italic text-white mb-8">
              Related <span className="text-brand-gold">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link key={relatedPost.id} to={`/post/${relatedPost.slug}`}>
                  <Card hover className="h-full">
                    <div className="h-48 bg-gradient-to-br from-brand-gold/20 to-brand-gold-light/10 flex items-center justify-center relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${relatedPost.imageUrl}')`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-brand-gold text-brand-black text-xs font-poppins font-bold rounded-full whitespace-nowrap">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-poppins font-bold text-lg text-white mb-3 line-clamp-2 hover:text-brand-gold transition-colors duration-300">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-brand-neutral">
                        <span>{relatedPost.readingTime} min read</span>
                        <span>{relatedPost.views.toLocaleString()} views</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
