import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import { useSEO, generateFAQSchema } from '../../utils/seo';

export default function ResponsibleGamblingPage() {
  // SEO Configuration
  useSEO({
    title: 'Responsible Gambling - Play Safe & Stay in Control | EE9.com',
    description: 'Learn about responsible gambling practices, warning signs of problem gambling, self-exclusion programs, and support resources available in Australia. Play safe and stay in control.',
    keywords: 'responsible gambling, problem gambling, gambling help, self-exclusion, gambling support Australia, 18+',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          name: 'Responsible Gambling',
          description: 'Comprehensive guide to responsible gambling practices and support resources in Australia',
          url: `${import.meta.env.VITE_SITE_URL || 'https://ee9.com'}/responsible-gambling`,
        },
        generateFAQSchema([
          {
            question: 'What is responsible gambling?',
            answer: 'Responsible gambling means enjoying gaming as a form of entertainment while maintaining control over your time and money. It involves understanding the risks, setting personal limits, and recognizing when gaming stops being fun.',
          },
          {
            question: 'What are the warning signs of problem gambling?',
            answer: 'Warning signs include spending more money or time gambling than you can afford, chasing losses, borrowing money to gamble, neglecting responsibilities, lying about gambling, feeling guilty or anxious, and being unable to stop despite wanting to.',
          },
          {
            question: 'Where can I get help for problem gambling in Australia?',
            answer: 'Gambling Help Online provides free, confidential support 24/7 at 1800 858 858 or gamblinghelponline.org.au. Other resources include Lifeline (13 11 14), Gamblers Anonymous, and financial counseling services.',
          },
        ]),
      ],
    },
  });

  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center">
              <i className="ri-shield-check-line text-4xl text-brand-black"></i>
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-6xl italic text-white mb-4">
              Responsible <span className="text-brand-gold">Gambling</span>
            </h1>
            <p className="font-inter text-lg text-brand-neutral max-w-2xl mx-auto">
              Gaming should be entertaining and enjoyable. Learn how to play responsibly and maintain healthy gaming habits.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="font-poppins font-bold text-3xl text-white mb-6">18+ Only</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-8">
              All gambling activities in Australia are restricted to individuals aged 18 years and older. It is illegal for anyone under 18 to participate in gambling activities, and operators are required to verify age before allowing access to gaming services.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">What is Responsible Gambling?</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Responsible gambling means enjoying gaming as a form of entertainment while maintaining control over your time and money. It involves understanding the risks, setting personal limits, and recognizing when gaming stops being fun.
            </p>

            <Card className="my-8">
              <div className="p-8 bg-gradient-to-br from-brand-gold/10 to-transparent">
                <h3 className="font-poppins font-bold text-2xl text-brand-gold mb-4">Key Principles</h3>
                <ul className="font-inter text-white/80 space-y-3 list-disc list-inside">
                  <li>Gamble only with money you can afford to lose</li>
                  <li>Set time and money limits before you start</li>
                  <li>Never chase your losses</li>
                  <li>Take regular breaks during gaming sessions</li>
                  <li>Don't gamble when upset, stressed, or under the influence</li>
                  <li>Balance gambling with other activities and interests</li>
                  <li>Keep gambling separate from daily finances</li>
                </ul>
              </div>
            </Card>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Setting Limits</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              One of the most effective ways to maintain control is by setting clear limits before you begin gaming. These limits should be realistic and based on your personal financial situation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Card>
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                    <i className="ri-wallet-3-line text-2xl text-brand-gold"></i>
                  </div>
                  <h4 className="font-poppins font-bold text-xl text-white mb-3">Deposit Limits</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    Set a maximum amount you can deposit over a specific period (daily, weekly, or monthly). This prevents overspending and helps you stay within your budget.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                    <i className="ri-money-dollar-circle-line text-2xl text-brand-gold"></i>
                  </div>
                  <h4 className="font-poppins font-bold text-xl text-white mb-3">Loss Limits</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    Decide in advance how much you're willing to lose in a session. Once you reach this limit, stop playing regardless of the urge to continue.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                    <i className="ri-time-line text-2xl text-brand-gold"></i>
                  </div>
                  <h4 className="font-poppins font-bold text-xl text-white mb-3">Time Limits</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    Set a maximum time for each gaming session. Use alarms or timers to remind yourself when it's time to take a break or stop.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                    <i className="ri-trophy-line text-2xl text-brand-gold"></i>
                  </div>
                  <h4 className="font-poppins font-bold text-xl text-white mb-3">Win Goals</h4>
                  <p className="font-inter text-sm text-brand-neutral leading-relaxed">
                    Set a realistic win target. If you reach it, consider stopping or withdrawing your winnings to secure your profit.
                  </p>
                </div>
              </Card>
            </div>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Warning Signs of Problem Gambling</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              It's important to recognize the warning signs that gambling may be becoming a problem. If you identify with any of these signs, it's time to seek help.
            </p>

            <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
              <h4 className="font-poppins font-bold text-xl text-white mb-4 flex items-center gap-3">
                <i className="ri-alert-line text-2xl text-red-500"></i>
                Warning Signs
              </h4>
              <ul className="font-inter text-white/80 space-y-2 list-disc list-inside">
                <li>Spending more money or time gambling than you can afford</li>
                <li>Chasing losses by gambling more to win back money</li>
                <li>Borrowing money or selling possessions to gamble</li>
                <li>Neglecting work, family, or personal responsibilities</li>
                <li>Lying to others about your gambling activities</li>
                <li>Feeling guilty, anxious, or depressed about gambling</li>
                <li>Gambling to escape problems or relieve stress</li>
                <li>Unable to stop or reduce gambling despite wanting to</li>
                <li>Relationship problems caused by gambling</li>
                <li>Thinking about gambling constantly</li>
              </ul>
            </div>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Self-Exclusion Programs</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              If you feel you need a break from gambling, self-exclusion programs allow you to voluntarily ban yourself from gaming venues or online platforms for a specified period. This can range from a few months to permanent exclusion.
            </p>

            <Card className="my-8">
              <div className="p-8">
                <h4 className="font-poppins font-bold text-xl text-brand-gold mb-4">How Self-Exclusion Works</h4>
                <div className="font-inter text-white/80 space-y-3">
                  <p><strong className="text-white">1. Choose Your Period:</strong> Decide how long you want to be excluded (e.g., 3 months, 6 months, 1 year, or indefinitely)</p>
                  <p><strong className="text-white">2. Register:</strong> Contact the gaming operator or use their online self-exclusion tools</p>
                  <p><strong className="text-white">3. Enforcement:</strong> During the exclusion period, you won't be able to access gaming services</p>
                  <p><strong className="text-white">4. Cooling-Off:</strong> After the period ends, there's usually a cooling-off period before you can resume</p>
                </div>
              </div>
            </Card>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Getting Help</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              If you or someone you know is struggling with problem gambling, help is available. Professional support services offer confidential assistance, counseling, and resources to help you regain control.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Card gradient>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-xl text-white mb-4">Gambling Help Online</h4>
                  <p className="font-inter text-sm text-brand-neutral mb-4">
                    Free, confidential support available 24/7 for anyone affected by problem gambling.
                  </p>
                  <div className="space-y-2 font-inter text-sm">
                    <p className="text-brand-gold">Phone: 1800 858 858</p>
                    <p className="text-brand-gold">Website: gamblinghelponline.org.au</p>
                    <p className="text-white/60">Available 24 hours, 7 days a week</p>
                  </div>
                </div>
              </Card>

              <Card gradient>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-xl text-white mb-4">Lifeline Australia</h4>
                  <p className="font-inter text-sm text-brand-neutral mb-4">
                    Crisis support and suicide prevention services for anyone experiencing emotional distress.
                  </p>
                  <div className="space-y-2 font-inter text-sm">
                    <p className="text-brand-gold">Phone: 13 11 14</p>
                    <p className="text-brand-gold">Website: lifeline.org.au</p>
                    <p className="text-white/60">Available 24 hours, 7 days a week</p>
                  </div>
                </div>
              </Card>

              <Card gradient>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-xl text-white mb-4">Gamblers Anonymous</h4>
                  <p className="font-inter text-sm text-brand-neutral mb-4">
                    Peer support groups for people who want to stop gambling.
                  </p>
                  <div className="space-y-2 font-inter text-sm">
                    <p className="text-brand-gold">Website: gamblersanonymous.org.au</p>
                    <p className="text-white/60">Find local meetings and support groups</p>
                  </div>
                </div>
              </Card>

              <Card gradient>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-xl text-white mb-4">Financial Counselling</h4>
                  <p className="font-inter text-sm text-brand-neutral mb-4">
                    Free financial counseling services to help manage gambling-related debt.
                  </p>
                  <div className="space-y-2 font-inter text-sm">
                    <p className="text-brand-gold">Phone: 1800 007 007</p>
                    <p className="text-brand-gold">Website: ndh.org.au</p>
                    <p className="text-white/60">National Debt Helpline</p>
                  </div>
                </div>
              </Card>
            </div>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Tips for Friends and Family</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              If you're concerned about someone's gambling, here are ways you can help:
            </p>

            <Card className="my-8">
              <div className="p-8">
                <ul className="font-inter text-white/80 space-y-3 list-disc list-inside">
                  <li>Talk to them in a calm, non-judgmental way about your concerns</li>
                  <li>Encourage them to seek professional help</li>
                  <li>Offer to accompany them to counseling or support groups</li>
                  <li>Don't lend them money or pay their gambling debts</li>
                  <li>Take care of your own wellbeing and seek support if needed</li>
                  <li>Be patient - recovery takes time and may involve setbacks</li>
                </ul>
              </div>
            </Card>

            <div className="bg-gradient-to-r from-brand-gold/10 to-brand-gold-light/10 border border-brand-gold/30 p-8 rounded-xl my-12 text-center">
              <h3 className="font-poppins font-bold text-2xl text-white mb-4">Remember</h3>
              <p className="font-inter text-lg text-white/80 leading-relaxed">
                Gambling should be entertainment, not a way to make money or solve financial problems. If it stops being fun, it's time to stop. Help is always available, and recovery is possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl text-white mb-6">
            Need More Information?
          </h2>
          <p className="font-inter text-brand-neutral mb-8">
            Explore our guides on responsible gaming practices and bankroll management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/guides">
              <button className="px-8 py-4 bg-gradient-to-r from-brand-gold-light to-brand-gold text-brand-black rounded-lg hover:shadow-lg hover:shadow-brand-gold/50 transition-all duration-300 font-poppins font-bold whitespace-nowrap cursor-pointer">
                Browse Guides
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-4 text-brand-gold border-2 border-brand-gold rounded-lg hover:bg-brand-gold hover:text-brand-black transition-all duration-300 font-poppins font-bold whitespace-nowrap cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
