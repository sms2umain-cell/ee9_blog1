import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import { useSEO } from '../../utils/seo';

export default function AboutPage() {
  // SEO Configuration
  useSEO({
    title: 'About EE9.com - Australian Gaming Information Platform',
    description: 'Learn about EE9.com, your trusted source for gaming insights, strategies, and responsible gambling information in Australia. Independent, accurate, and transparent.',
    keywords: 'about EE9, gaming information, Australian gaming, responsible gambling, gaming education',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About EE9.com',
      description: 'EE9.com is an independent gaming information platform dedicated to providing Australian players with comprehensive, accurate, and unbiased content about pokies, sports betting, slots, and live casino games.',
      url: `${import.meta.env.VITE_SITE_URL || 'https://ee9.com'}/about`,
      mainEntity: {
        '@type': 'Organization',
        name: 'EE9.com',
        description: 'Independent gaming information platform for Australian players',
        url: import.meta.env.VITE_SITE_URL || 'https://ee9.com',
      },
    },
  });

  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl italic text-white mb-4">
              About <span className="text-brand-gold">EE9.com</span>
            </h1>
            <p className="font-inter text-lg text-brand-neutral max-w-2xl mx-auto">
              Your trusted source for gaming insights, strategies, and responsible gambling information in Australia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="font-poppins font-bold text-3xl text-white mb-6">Who We Are</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              EE9.com is an independent gaming information platform dedicated to providing Australian players with comprehensive, accurate, and unbiased content about pokies, sports betting, slots, and live casino games. We're not a gambling operator - we're educators and enthusiasts who believe that informed players make better decisions and have more enjoyable gaming experiences.
            </p>

            <p className="font-inter text-white/80 leading-relaxed mb-8">
              Our team consists of experienced gaming analysts, strategy experts, and responsible gambling advocates who understand the Australian gaming landscape. We've spent years studying game mechanics, analyzing strategies, and observing player behavior to bring you insights that actually matter.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Our Mission</h2>
            <Card className="my-8">
              <div className="p-8 bg-gradient-to-br from-brand-gold/10 to-transparent">
                <p className="font-inter text-lg text-white/90 leading-relaxed">
                  To empower Australian players with knowledge, strategies, and tools that enhance their gaming experience while promoting responsible gambling practices. We believe that education is the key to enjoyable, sustainable gaming.
                </p>
              </div>
            </Card>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">What We Offer</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Card>
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                    <i className="ri-article-line text-2xl text-brand-gold"></i>
                  </div>
                  <h4 className="font-poppins font-bold text-xl text-white mb-3">Expert Articles</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    In-depth guides covering everything from beginner basics to advanced strategies, written by experienced gaming analysts.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                    <i className="ri-calculator-line text-2xl text-brand-gold"></i>
                  </div>
                  <h4 className="font-poppins font-bold text-xl text-white mb-3">Gaming Tools</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    Free calculators and planners to help you manage your bankroll and understand bonus requirements.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                    <i className="ri-book-open-line text-2xl text-brand-gold"></i>
                  </div>
                  <h4 className="font-poppins font-bold text-xl text-white mb-3">Comprehensive Glossary</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    A complete dictionary of gaming terms, helping you understand the language of pokies, sports betting, and casino games.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                    <i className="ri-shield-check-line text-2xl text-brand-gold"></i>
                  </div>
                  <h4 className="font-poppins font-bold text-xl text-white mb-3">Responsible Gaming</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    Resources and information to help you maintain healthy gaming habits and recognize problem gambling signs.
                  </p>
                </div>
              </Card>
            </div>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Our Values</h2>
            
            <div className="space-y-6 my-8">
              <Card>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-xl text-brand-gold mb-3">Independence</h4>
                  <p className="font-inter text-white/80 leading-relaxed">
                    We maintain editorial independence and provide unbiased information. Our content is not influenced by gaming operators or affiliates.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-xl text-brand-gold mb-3">Accuracy</h4>
                  <p className="font-inter text-white/80 leading-relaxed">
                    All our content is thoroughly researched and fact-checked. We cite sources and update information regularly to ensure accuracy.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-xl text-brand-gold mb-3">Responsibility</h4>
                  <p className="font-inter text-white/80 leading-relaxed">
                    We prioritize responsible gambling in all our content. Every article includes reminders about safe gaming practices and available support resources.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-xl text-brand-gold mb-3">Transparency</h4>
                  <p className="font-inter text-white/80 leading-relaxed">
                    We're open about our methods, sources, and any potential conflicts of interest. You deserve to know where our information comes from.
                  </p>
                </div>
              </Card>
            </div>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Australian Focus</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              We specifically cater to Australian players, understanding the unique aspects of the Australian gaming landscape including local regulations, popular games, and cultural preferences. Our content reflects Australian terminology, currency, and gaming contexts.
            </p>

            <p className="font-inter text-white/80 leading-relaxed mb-8">
              Whether you're interested in AFL and NRL betting strategies, understanding pokies regulations in Australia, or learning about games popular in Australian venues, our content is tailored to your needs.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Our Commitment to You</h2>
            <Card className="my-8">
              <div className="p-8">
                <ul className="font-inter text-white/80 space-y-3 list-disc list-inside">
                  <li>Provide accurate, up-to-date information you can trust</li>
                  <li>Promote responsible gambling in all our content</li>
                  <li>Maintain editorial independence and transparency</li>
                  <li>Respect your privacy and data security</li>
                  <li>Continuously improve our content based on user feedback</li>
                  <li>Support problem gambling awareness and prevention</li>
                  <li>Ensure all content is accessible and easy to understand</li>
                </ul>
              </div>
            </Card>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Contact Us</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              We value your feedback and questions. Whether you have suggestions for content, spotted an error, or just want to share your thoughts, we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 my-8">
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-brand-gold-light to-brand-gold text-brand-black rounded-lg hover:shadow-lg hover:shadow-brand-gold/50 transition-all duration-300 font-poppins font-bold whitespace-nowrap cursor-pointer">
                  Get in Touch
                </button>
              </Link>
              <Link to="/editorial-policy">
                <button className="px-8 py-4 text-brand-gold border-2 border-brand-gold rounded-lg hover:bg-brand-gold hover:text-brand-black transition-all duration-300 font-poppins font-bold whitespace-nowrap cursor-pointer">
                  Editorial Policy
                </button>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-brand-gold/10 to-brand-gold-light/10 border border-brand-gold/30 p-8 rounded-xl my-12">
              <div className="flex items-center gap-4 mb-4">
                <i className="ri-shield-check-line text-3xl text-brand-gold"></i>
                <h3 className="font-poppins font-bold text-2xl text-white">18+ Responsible Gaming</h3>
              </div>
              <p className="font-inter text-white/80 leading-relaxed">
                EE9.com is committed to promoting responsible gambling. All content is intended for adults 18 years and older. If you or someone you know has a gambling problem, please seek help through Gambling Help Online (1800 858 858) or other support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
