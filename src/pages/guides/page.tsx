import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { useSEO } from '../../utils/seo';

export default function GuidesPage() {
  // SEO Configuration
  useSEO({
    title: 'Gaming Guides Hub - Expert Strategies & Tips | EE9.com',
    description: 'Comprehensive gaming guides covering beginner basics to advanced strategies. Learn bankroll management, game mechanics, and responsible gaming practices for Australian players.',
    keywords: 'gaming guides, betting strategies, pokies tips, casino strategies, responsible gambling, Australian gaming',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Gaming Guides Hub',
      description: 'Comprehensive guides covering everything from beginner basics to advanced strategies',
      url: `${import.meta.env.VITE_SITE_URL || 'https://ee9.com'}/guides`,
    },
  });

  const guideCategories = [
    {
      id: 1,
      title: 'Beginner Guides',
      description: 'Start your gaming journey with essential knowledge and foundational strategies.',
      icon: 'ri-book-open-line',
      guides: [
        { title: 'Getting Started with Pokies', link: '/post/understanding-rtp-in-pokies-complete-guide' },
        { title: 'Sports Betting Basics', link: '/post/understanding-sports-betting-odds-formats' },
        { title: 'Slot Game Fundamentals', link: '/post/high-volatility-vs-low-volatility-slots' },
        { title: 'Live Casino Introduction', link: '/post/live-dealer-etiquette-dos-and-donts' },
      ],
    },
    {
      id: 2,
      title: 'Strategy Guides',
      description: 'Advanced techniques and proven strategies to improve your gameplay.',
      icon: 'ri-lightbulb-line',
      guides: [
        { title: 'Bankroll Management', link: '/post/sports-betting-bankroll-management-strategies' },
        { title: 'Value Betting Strategies', link: '/post/value-betting-finding-profitable-opportunities' },
        { title: 'Blackjack Basic Strategy', link: '/post/live-blackjack-basic-strategy-chart' },
        { title: 'Parlay Betting Guide', link: '/post/parlay-betting-guide-accumulator-strategies' },
      ],
    },
    {
      id: 3,
      title: 'Responsible Gaming',
      description: 'Learn to play safely and maintain healthy gaming habits.',
      icon: 'ri-shield-check-line',
      guides: [
        { title: 'Setting Limits', link: '/post/responsible-gambling-setting-limits-staying-control' },
        { title: 'Session Management', link: '/post/pokies-session-management-when-to-stop' },
        { title: 'Australian Regulations', link: '/post/australian-pokies-regulations-what-players-should-know' },
        { title: 'Problem Gambling Signs', link: '/responsible-gambling' },
      ],
    },
    {
      id: 4,
      title: 'Game Mechanics',
      description: 'Understand how different games work and their unique features.',
      icon: 'ri-settings-3-line',
      guides: [
        { title: 'Megaways Explained', link: '/post/megaways-slots-mechanics-explained' },
        { title: 'Progressive Jackpots', link: '/post/progressive-jackpot-slots-how-they-work' },
        { title: 'Cascading Reels', link: '/post/cascading-reels-slots-tumbling-mechanics' },
        { title: 'Hold and Win Feature', link: '/post/hold-and-win-slots-respins-feature' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Header />

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=educational%20learning%20gaming%20knowledge%20books%20and%20guides%20with%20golden%20accents%20on%20dark%20sophisticated%20background%20modern%20professional%20style%20clean%20composition&width=1920&height=600&seq=guides-hero-001&orientation=landscape')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/80 to-brand-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl italic text-white mb-6">
            Gaming <span className="text-brand-gold">Guides Hub</span>
          </h1>
          <p className="font-inter text-xl text-brand-neutral max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive guides covering everything from beginner basics to advanced strategies. Learn at your own pace with expert insights tailored for Australian players.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/glossary">
              <Button size="lg">Browse Glossary</Button>
            </Link>
            <Link to="/tools">
              <Button size="lg" variant="outline">Try Our Tools</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {guideCategories.map((category) => (
              <Card key={category.id} gradient className="h-full">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className={`${category.icon} text-3xl text-brand-black`}></i>
                    </div>
                    <div>
                      <h2 className="font-poppins font-bold text-2xl text-white mb-2">
                        {category.title}
                      </h2>
                      <p className="font-inter text-sm text-brand-neutral">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {category.guides.map((guide, index) => (
                      <Link key={index} to={guide.link}>
                        <div className="flex items-center gap-3 p-4 bg-brand-black/50 rounded-lg hover:bg-brand-black transition-all duration-300 group cursor-pointer">
                          <i className="ri-arrow-right-circle-line text-brand-gold text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
                          <span className="font-inter text-white group-hover:text-brand-gold transition-colors duration-300">
                            {guide.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl italic text-white mb-4">
              Popular <span className="text-brand-gold">Topics</span>
            </h2>
            <p className="font-inter text-brand-neutral max-w-2xl mx-auto">
              Explore our most-read guides and essential gaming knowledge
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { topic: 'RTP', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop' },
              { topic: 'Volatility', image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=600&fit=crop' },
              { topic: 'Bankroll', image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&h=600&fit=crop' },
              { topic: 'Odds', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop' },
              { topic: 'Parlay', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop' },
              { topic: 'Free Spins', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&h=600&fit=crop' },
              { topic: 'Strategy', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop' },
              { topic: 'Responsible Gambling', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop' },
            ].map((item) => (
              <Link key={item.topic} to={`/tag/${item.topic.toLowerCase().replace(/\s+/g, '-')}`}>
                <Card hover className="h-full">
                  <div className="h-64 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${item.image}')`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent"></div>
                    <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                      <i className="ri-price-tag-3-line text-3xl text-brand-gold mb-3"></i>
                      <h3 className="font-poppins font-bold text-lg text-white">
                        {item.topic}
                      </h3>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-dark via-brand-black to-brand-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center">
            <i className="ri-question-line text-4xl text-brand-black"></i>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="font-inter text-lg text-brand-neutral mb-8">
            Check our comprehensive glossary or contact us for specific guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/glossary">
              <Button size="lg">View Glossary</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
