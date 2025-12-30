import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import { useSEO } from '../../utils/seo';

export default function EditorialPolicyPage() {
  // SEO Configuration
  useSEO({
    title: 'Editorial Policy - Content Standards & Guidelines | EE9.com',
    description: 'Learn about EE9.com editorial standards, fact-checking processes, independence policy, and commitment to accuracy and responsible content creation.',
    keywords: 'editorial policy, content standards, fact-checking, editorial independence, accuracy',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Editorial Policy',
      description: 'EE9.com editorial policy outlining our commitment to accuracy, independence, and responsible content creation',
      url: `${import.meta.env.VITE_SITE_URL || 'https://ee9.com'}/editorial-policy`,
    },
  });

  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl italic text-white mb-4">
              Editorial <span className="text-brand-gold">Policy</span>
            </h1>
            <p className="font-inter text-lg text-brand-neutral max-w-2xl mx-auto">
              Our commitment to accuracy, independence, and responsible content creation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="font-poppins font-bold text-3xl text-white mb-6">Our Editorial Standards</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-8">
              At EE9.com, we are committed to providing accurate, unbiased, and helpful information to Australian gaming enthusiasts. Our editorial policy outlines the principles and standards that guide our content creation and publication process.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Independence and Objectivity</h2>
            <Card className="my-8">
              <div className="p-8">
                <ul className="font-inter text-white/80 space-y-3 list-disc list-inside">
                  <li>We maintain complete editorial independence from gaming operators and affiliates</li>
                  <li>Our content is not influenced by commercial relationships or advertising</li>
                  <li>We provide honest, objective analysis based on facts and research</li>
                  <li>We clearly disclose any potential conflicts of interest</li>
                  <li>Our recommendations are based solely on merit and user benefit</li>
                </ul>
              </div>
            </Card>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Accuracy and Fact-Checking</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              We take accuracy seriously and implement rigorous fact-checking processes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Card>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-lg text-brand-gold mb-3">Research</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    All content is thoroughly researched using reliable sources including official regulations, academic studies, and industry data.
                  </p>
                </div>
              </Card>
              <Card>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-lg text-brand-gold mb-3">Verification</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    Facts, statistics, and claims are verified through multiple sources before publication.
                  </p>
                </div>
              </Card>
              <Card>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-lg text-brand-gold mb-3">Updates</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    We regularly review and update content to ensure information remains current and accurate.
                  </p>
                </div>
              </Card>
              <Card>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-lg text-brand-gold mb-3">Corrections</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    Errors are corrected promptly and transparently when identified.
                  </p>
                </div>
              </Card>
            </div>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Content Creation Process</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Our content goes through a structured creation and review process:
            </p>
            <Card className="my-8">
              <div className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-poppins font-semibold text-lg text-white mb-2">1. Topic Selection</h4>
                    <p className="font-inter text-sm text-brand-neutral">
                      Topics are chosen based on user needs, industry relevance, and educational value.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-lg text-white mb-2">2. Research and Writing</h4>
                    <p className="font-inter text-sm text-brand-neutral">
                      Experienced writers research thoroughly and create comprehensive, well-structured content.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-lg text-white mb-2">3. Editorial Review</h4>
                    <p className="font-inter text-sm text-brand-neutral">
                      Content is reviewed for accuracy, clarity, and adherence to our editorial standards.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-lg text-white mb-2">4. Fact-Checking</h4>
                    <p className="font-inter text-sm text-brand-neutral">
                      All factual claims are verified against reliable sources.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-lg text-white mb-2">5. Publication</h4>
                    <p className="font-inter text-sm text-brand-neutral">
                      Content is published with proper metadata, citations, and responsible gambling reminders.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Responsible Gambling Commitment</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Promoting responsible gambling is central to our mission:
            </p>
            <div className="bg-gradient-to-r from-brand-gold/10 to-brand-gold-light/10 border border-brand-gold/30 p-8 rounded-xl my-8">
              <ul className="font-inter text-white/80 space-y-3 list-disc list-inside">
                <li>Every article includes responsible gambling reminders</li>
                <li>We never encourage excessive gambling or unrealistic expectations</li>
                <li>We provide clear information about risks and house edges</li>
                <li>We prominently feature problem gambling resources and support services</li>
                <li>We emphasize that gambling should be entertainment, not income</li>
                <li>We include 18+ age restrictions on all gaming content</li>
              </ul>
            </div>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Transparency</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              We believe in complete transparency with our readers:
            </p>
            <Card className="my-8">
              <div className="p-8">
                <ul className="font-inter text-white/80 space-y-3 list-disc list-inside">
                  <li>We clearly identify content types (guides, reviews, news, opinion)</li>
                  <li>We disclose any affiliate relationships or sponsored content</li>
                  <li>We cite sources and provide references where applicable</li>
                  <li>We acknowledge limitations in our knowledge or data</li>
                  <li>We welcome feedback and corrections from readers</li>
                </ul>
              </div>
            </Card>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">User Privacy and Data</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              We respect user privacy and handle data responsibly:
            </p>
            <Card className="my-8">
              <div className="p-8">
                <ul className="font-inter text-white/80 space-y-3 list-disc list-inside">
                  <li>We collect only necessary data for site functionality</li>
                  <li>We never sell or share personal information with third parties</li>
                  <li>We comply with Australian privacy laws and regulations</li>
                  <li>We provide clear privacy policies and cookie notices</li>
                  <li>Users can request data deletion at any time</li>
                </ul>
              </div>
            </Card>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Content Standards</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              All content published on EE9.com must meet these standards:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Card>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-lg text-brand-gold mb-3">Accuracy</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    Information must be factually correct and properly sourced.
                  </p>
                </div>
              </Card>
              <Card>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-lg text-brand-gold mb-3">Clarity</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    Content must be clear, well-organized, and easy to understand.
                  </p>
                </div>
              </Card>
              <Card>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-lg text-brand-gold mb-3">Relevance</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    Content must be relevant to Australian players and their needs.
                  </p>
                </div>
              </Card>
              <Card>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-lg text-brand-gold mb-3">Responsibility</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    Content must promote responsible gambling practices.
                  </p>
                </div>
              </Card>
            </div>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Corrections and Updates</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              When errors are identified or information becomes outdated:
            </p>
            <Card className="my-8">
              <div className="p-8">
                <ul className="font-inter text-white/80 space-y-3 list-disc list-inside">
                  <li>Corrections are made promptly and clearly noted</li>
                  <li>Significant updates are documented with revision dates</li>
                  <li>We acknowledge errors transparently rather than silently editing</li>
                  <li>Readers can report errors through our contact form</li>
                  <li>We maintain version history for major content updates</li>
                </ul>
              </div>
            </Card>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Feedback and Complaints</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              We welcome feedback and take complaints seriously:
            </p>
            <Card className="my-8">
              <div className="p-8">
                <p className="font-inter text-white/80 leading-relaxed mb-4">
                  If you have concerns about our content, editorial practices, or believe we've made an error, please contact us. We will:
                </p>
                <ul className="font-inter text-white/80 space-y-2 list-disc list-inside">
                  <li>Acknowledge your feedback within 48 hours</li>
                  <li>Investigate the issue thoroughly</li>
                  <li>Take appropriate corrective action if needed</li>
                  <li>Respond with our findings and actions taken</li>
                </ul>
              </div>
            </Card>

            <div className="bg-gradient-to-r from-brand-gold/10 to-brand-gold-light/10 border border-brand-gold/30 p-8 rounded-xl my-12 text-center">
              <h3 className="font-poppins font-bold text-2xl text-white mb-4">Our Promise</h3>
              <p className="font-inter text-lg text-white/80 leading-relaxed">
                We are committed to maintaining the highest editorial standards and continuously improving our content to serve the Australian gaming community better. Your trust is our most valuable asset.
              </p>
            </div>

            <div className="text-center mt-12">
              <p className="font-inter text-sm text-brand-neutral mb-4">
                Last updated: January 2025
              </p>
              <Link to="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-brand-gold-light to-brand-gold text-brand-black rounded-lg hover:shadow-lg hover:shadow-brand-gold/50 transition-all duration-300 font-poppins font-bold whitespace-nowrap cursor-pointer">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
