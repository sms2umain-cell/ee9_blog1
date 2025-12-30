import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    categories: [
      { name: 'Pokies', path: '/category/pokies' },
      { name: 'Sports Betting', path: '/category/sports' },
      { name: 'Slots', path: '/category/slots' },
      { name: 'Live Casino', path: '/category/live' },
    ],
    resources: [
      { name: 'Guides Hub', path: '/guides' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Tools', path: '/tools' },
      { name: 'About Us', path: '/about' },
    ],
    legal: [
      { name: 'Responsible Gambling', path: '/responsible-gambling' },
      { name: 'Editorial Policy', path: '/editorial-policy' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  const popularTags = ['RTP', 'Volatility', 'Bankroll', 'Bonus', 'Free Spins', 'Odds', 'Strategy', 'Parlay'];

  return (
    <footer className="bg-gradient-to-b from-brand-dark to-brand-black border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="https://static.readdy.ai/image/31a1107996a99a56af02e61b22b1b81c/11a0db623854b37bba5f02aa521e361e.png" 
              alt="EE9.com" 
              className="h-10 mb-4"
            />
            <p className="text-brand-neutral font-inter text-sm leading-relaxed">
              Expert insights on pokies, sports betting, slots, and live casino games in Australia. Learn strategies and play responsibly.
            </p>
          </div>

          <div>
            <h4 className="text-brand-gold font-poppins font-bold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white hover:text-brand-gold transition-colors duration-300 font-inter text-sm cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-poppins font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white hover:text-brand-gold transition-colors duration-300 font-inter text-sm cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-poppins font-bold text-lg mb-4">Legal & Support</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white hover:text-brand-gold transition-colors duration-300 font-inter text-sm cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gold/20 pt-8">
          <div className="mb-6">
            <h4 className="text-brand-gold font-poppins font-semibold text-sm mb-3">Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <Link 
                  key={tag} 
                  to={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-1 bg-brand-dark border border-brand-gold/30 rounded-full text-brand-gold text-xs font-inter hover:bg-brand-gold hover:text-brand-black transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-neutral font-inter">
            <p>© {currentYear} EE9.com. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a 
                href="https://t.ly/EE9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-brand-gold-light transition-colors duration-300 font-semibold cursor-pointer whitespace-nowrap"
              >
                18+ Gamble Responsibly
              </a>
              <span>|</span>
              <a 
                href="https://readdy.ai/?ref=logo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-neutral hover:text-brand-gold transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                Powered by Readdy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
