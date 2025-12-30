import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { useSEO } from '../../utils/seo';

export default function ToolsPage() {
  const [bankrollAmount, setBankrollAmount] = useState<string>('1000');
  const [sessionPercentage, setSessionPercentage] = useState<string>('10');
  const [bankrollResult, setBankrollResult] = useState<number | null>(null);

  const [bonusAmount, setBonusAmount] = useState<string>('100');
  const [wagerRequirement, setWagerRequirement] = useState<string>('30');
  const [turnoverResult, setTurnoverResult] = useState<number | null>(null);

  // RTP Calculator states
  const [rtpPercentage, setRtpPercentage] = useState<string>('96');
  const [totalWagered, setTotalWagered] = useState<string>('1000');
  const [spinsPlayed, setSpinsPlayed] = useState<string>('100');
  const [rtpResult, setRtpResult] = useState<{
    expectedReturn: number;
    expectedLoss: number;
    returnPerSpin: number;
  } | null>(null);

  // SEO Configuration
  useSEO({
    title: 'Gaming Tools & Calculators - Bankroll, Bonus & RTP Calculator | EE9.com',
    description: 'Free gaming calculators including bankroll planner, bonus turnover calculator, and RTP calculator. Manage your gaming budget and understand wagering requirements effectively.',
    keywords: 'bankroll calculator, bonus calculator, RTP calculator, wagering requirements, gaming tools, budget planner, return to player',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Gaming Tools & Calculators',
      description: 'Free calculators and tools to help manage bankroll and understand bonus requirements',
      url: `${import.meta.env.VITE_SITE_URL || 'https://ee9.com'}/tools`,
      applicationCategory: 'UtilitiesApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'AUD',
      },
    },
  });

  const calculateBankroll = () => {
    const amount = parseFloat(bankrollAmount);
    const percentage = parseFloat(sessionPercentage);
    if (!isNaN(amount) && !isNaN(percentage)) {
      setBankrollResult((amount * percentage) / 100);
    }
  };

  const calculateTurnover = () => {
    const bonus = parseFloat(bonusAmount);
    const requirement = parseFloat(wagerRequirement);
    if (!isNaN(bonus) && !isNaN(requirement)) {
      setTurnoverResult(bonus * requirement);
    }
  };

  const calculateRTP = () => {
    const rtp = parseFloat(rtpPercentage);
    const wagered = parseFloat(totalWagered);
    const spins = parseFloat(spinsPlayed);
    
    if (!isNaN(rtp) && !isNaN(wagered) && !isNaN(spins) && spins > 0) {
      const expectedReturn = (wagered * rtp) / 100;
      const expectedLoss = wagered - expectedReturn;
      const returnPerSpin = expectedReturn / spins;
      
      setRtpResult({
        expectedReturn,
        expectedLoss,
        returnPerSpin,
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl italic text-white mb-4">
              Gaming <span className="text-brand-gold">Tools</span>
            </h1>
            <p className="font-inter text-lg text-brand-neutral max-w-3xl mx-auto">
              Free calculators and tools to help you manage your bankroll, understand bonus requirements, calculate expected returns, and make informed gaming decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bankroll Calculator */}
            <Card gradient>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center">
                    <i className="ri-wallet-3-line text-3xl text-brand-black"></i>
                  </div>
                  <div>
                    <h2 className="font-poppins font-bold text-2xl text-white mb-1">
                      Bankroll Planner
                    </h2>
                    <p className="font-inter text-sm text-brand-neutral">
                      Calculate your optimal session budget
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="font-inter text-sm text-brand-neutral mb-2 block">
                      Total Bankroll ($)
                    </label>
                    <input
                      type="number"
                      value={bankrollAmount}
                      onChange={(e) => setBankrollAmount(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-white focus:outline-none focus:border-brand-gold transition-colors duration-300 font-inter"
                      placeholder="1000"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-sm text-brand-neutral mb-2 block">
                      Session Budget (% of bankroll)
                    </label>
                    <input
                      type="number"
                      value={sessionPercentage}
                      onChange={(e) => setSessionPercentage(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-white focus:outline-none focus:border-brand-gold transition-colors duration-300 font-inter"
                      placeholder="10"
                    />
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={sessionPercentage}
                      onChange={(e) => setSessionPercentage(e.target.value)}
                      className="w-full mt-2"
                    />
                  </div>

                  <Button onClick={calculateBankroll} fullWidth>
                    Calculate Session Budget
                  </Button>

                  {bankrollResult !== null && (
                    <div className="bg-brand-black/50 p-6 rounded-xl border border-brand-gold/30">
                      <p className="font-inter text-sm text-brand-neutral mb-2">
                        Recommended Session Budget:
                      </p>
                      <p className="font-poppins font-bold text-4xl text-brand-gold">
                        ${bankrollResult.toFixed(2)}
                      </p>
                      <p className="font-inter text-xs text-brand-neutral mt-3">
                        This allows you to play {Math.floor(100 / parseFloat(sessionPercentage))} sessions with your total bankroll.
                      </p>
                    </div>
                  )}

                  <div className="bg-brand-dark/50 p-4 rounded-lg">
                    <h4 className="font-poppins font-semibold text-sm text-brand-gold mb-2">
                      Bankroll Tips:
                    </h4>
                    <ul className="font-inter text-xs text-brand-neutral space-y-1 list-disc list-inside">
                      <li>Never risk more than 10% per session</li>
                      <li>Set win and loss limits before playing</li>
                      <li>Keep your bankroll separate from daily expenses</li>
                      <li>Track your sessions to monitor performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bonus Turnover Calculator */}
            <Card gradient>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center">
                    <i className="ri-gift-line text-3xl text-brand-black"></i>
                  </div>
                  <div>
                    <h2 className="font-poppins font-bold text-2xl text-white mb-1">
                      Bonus Turnover Calculator
                    </h2>
                    <p className="font-inter text-sm text-brand-neutral">
                      Calculate wagering requirements
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="font-inter text-sm text-brand-neutral mb-2 block">
                      Bonus Amount ($)
                    </label>
                    <input
                      type="number"
                      value={bonusAmount}
                      onChange={(e) => setBonusAmount(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-white focus:outline-none focus:border-brand-gold transition-colors duration-300 font-inter"
                      placeholder="100"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-sm text-brand-neutral mb-2 block">
                      Wagering Requirement (x times)
                    </label>
                    <input
                      type="number"
                      value={wagerRequirement}
                      onChange={(e) => setWagerRequirement(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-white focus:outline-none focus:border-brand-gold transition-colors duration-300 font-inter"
                      placeholder="30"
                    />
                  </div>

                  <Button onClick={calculateTurnover} fullWidth>
                    Calculate Total Turnover
                  </Button>

                  {turnoverResult !== null && (
                    <div className="bg-brand-black/50 p-6 rounded-xl border border-brand-gold/30">
                      <p className="font-inter text-sm text-brand-neutral mb-2">
                        Total Wagering Required:
                      </p>
                      <p className="font-poppins font-bold text-4xl text-brand-gold">
                        ${turnoverResult.toFixed(2)}
                      </p>
                      <p className="font-inter text-xs text-brand-neutral mt-3">
                        You need to wager this amount before withdrawing bonus winnings.
                      </p>
                    </div>
                  )}

                  <div className="bg-brand-dark/50 p-4 rounded-lg">
                    <h4 className="font-poppins font-semibold text-sm text-brand-gold mb-2">
                      Bonus Tips:
                    </h4>
                    <ul className="font-inter text-xs text-brand-neutral space-y-1 list-disc list-inside">
                      <li>Read all terms and conditions carefully</li>
                      <li>Check game contribution percentages</li>
                      <li>Note time limits for clearing bonuses</li>
                      <li>Consider if the bonus is worth the requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* RTP Calculator */}
            <Card gradient>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center">
                    <i className="ri-percent-line text-3xl text-brand-black"></i>
                  </div>
                  <div>
                    <h2 className="font-poppins font-bold text-2xl text-white mb-1">
                      RTP Calculator
                    </h2>
                    <p className="font-inter text-sm text-brand-neutral">
                      Calculate expected returns
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="font-inter text-sm text-brand-neutral mb-2 block">
                      RTP Percentage (%)
                    </label>
                    <input
                      type="number"
                      value={rtpPercentage}
                      onChange={(e) => setRtpPercentage(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-white focus:outline-none focus:border-brand-gold transition-colors duration-300 font-inter"
                      placeholder="96"
                      step="0.1"
                      min="0"
                      max="100"
                    />
                    <input
                      type="range"
                      min="85"
                      max="99"
                      step="0.1"
                      value={rtpPercentage}
                      onChange={(e) => setRtpPercentage(e.target.value)}
                      className="w-full mt-2"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-sm text-brand-neutral mb-2 block">
                      Total Amount Wagered ($)
                    </label>
                    <input
                      type="number"
                      value={totalWagered}
                      onChange={(e) => setTotalWagered(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-white focus:outline-none focus:border-brand-gold transition-colors duration-300 font-inter"
                      placeholder="1000"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-sm text-brand-neutral mb-2 block">
                      Number of Spins
                    </label>
                    <input
                      type="number"
                      value={spinsPlayed}
                      onChange={(e) => setSpinsPlayed(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-white focus:outline-none focus:border-brand-gold transition-colors duration-300 font-inter"
                      placeholder="100"
                    />
                  </div>

                  <Button onClick={calculateRTP} fullWidth>
                    Calculate Expected Return
                  </Button>

                  {rtpResult !== null && (
                    <div className="bg-brand-black/50 p-6 rounded-xl border border-brand-gold/30 space-y-4">
                      <div>
                        <p className="font-inter text-sm text-brand-neutral mb-1">
                          Expected Return:
                        </p>
                        <p className="font-poppins font-bold text-3xl text-brand-gold">
                          ${rtpResult.expectedReturn.toFixed(2)}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="font-inter text-xs text-brand-neutral mb-1">
                            Expected Loss:
                          </p>
                          <p className="font-poppins font-semibold text-xl text-red-400">
                            ${rtpResult.expectedLoss.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="font-inter text-xs text-brand-neutral mb-1">
                            Return Per Spin:
                          </p>
                          <p className="font-poppins font-semibold text-xl text-brand-gold">
                            ${rtpResult.returnPerSpin.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <p className="font-inter text-xs text-brand-neutral mt-3">
                        Over {spinsPlayed} spins with {rtpPercentage}% RTP, you can expect to get back ${rtpResult.expectedReturn.toFixed(2)} on average.
                      </p>
                    </div>
                  )}

                  <div className="bg-brand-dark/50 p-4 rounded-lg">
                    <h4 className="font-poppins font-semibold text-sm text-brand-gold mb-2">
                      RTP Tips:
                    </h4>
                    <ul className="font-inter text-xs text-brand-neutral space-y-1 list-disc list-inside">
                      <li>RTP is calculated over millions of spins</li>
                      <li>Short-term results can vary significantly</li>
                      <li>Higher RTP means better long-term returns</li>
                      <li>Always check the game's RTP before playing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl italic text-white mb-4">
              More Tools <span className="text-brand-gold">Coming Soon</span>
            </h2>
            <p className="font-inter text-brand-neutral max-w-2xl mx-auto">
              We're developing additional calculators and tools to help you make better gaming decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'ri-line-chart-line', title: 'Odds Converter', desc: 'Convert between odds formats' },
              { icon: 'ri-timer-line', title: 'Session Timer', desc: 'Track your playing time' },
              { icon: 'ri-calculator-line', title: 'Variance Calculator', desc: 'Calculate game volatility' },
            ].map((tool, index) => (
              <Card key={index} className="opacity-60">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-gold/20 rounded-2xl flex items-center justify-center">
                    <i className={`${tool.icon} text-3xl text-brand-gold`}></i>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-white mb-2">
                    {tool.title}
                  </h3>
                  <p className="font-inter text-sm text-brand-neutral mb-4">
                    {tool.desc}
                  </p>
                  <span className="px-4 py-2 bg-brand-gold/20 text-brand-gold text-xs font-inter font-semibold rounded-full whitespace-nowrap">
                    Coming Soon
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
