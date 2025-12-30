import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pokies', path: '/category/pokies' },
    { name: 'Sports', path: '/category/sports' },
    { name: 'Slots', path: '/category/slots' },
    { name: 'Live', path: '/category/live' },
    { name: 'Guides', path: '/guides' },
    { name: 'Glossary', path: '/glossary' },
    { name: 'Tools', path: '/tools' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg shadow-brand-gold/10' : 'bg-brand-black/90 backdrop-blur-sm'
      }`}
    >
      <nav className="w-full px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/31a1107996a99a56af02e61b22b1b81c/7b3f8fa3c225f7c0616134a058e3b6c0.png" 
              alt="EE9.com Logo" 
              className="h-10 md:h-12"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter font-medium transition-all duration-300 hover:text-brand-gold ${
                  location.pathname === link.path 
                    ? 'text-brand-gold' 
                    : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/about">
              <button className="px-4 py-2 text-brand-gold border border-brand-gold rounded-lg hover:bg-brand-gold hover:text-brand-black transition-all duration-300 font-inter font-medium whitespace-nowrap cursor-pointer">
                About Us
              </button>
            </Link>
            <a href="https://t.ly/EE9" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-gradient-to-r from-brand-gold-light to-brand-gold text-brand-black rounded-lg hover:shadow-lg hover:shadow-brand-gold/50 transition-all duration-300 font-poppins font-bold whitespace-nowrap cursor-pointer">
                18+ Play Safe
              </button>
            </a>
          </div>

          <button
            className="lg:hidden text-white text-2xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-brand-gold/20 bg-brand-black/95 backdrop-blur-md rounded-lg px-4">
            <div className="flex flex-col gap-3 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-inter font-medium transition-all duration-300 hover:text-brand-gold py-2 ${
                    location.pathname === link.path 
                      ? 'text-brand-gold' 
                      : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-brand-gold/20 pt-3 mt-2 flex flex-col gap-3">
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-2.5 text-brand-gold border border-brand-gold rounded-lg hover:bg-brand-gold hover:text-brand-black transition-all duration-300 font-inter font-medium whitespace-nowrap cursor-pointer">
                    About Us
                  </button>
                </Link>
                <a href="https://t.ly/EE9" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-2.5 bg-gradient-to-r from-brand-gold-light to-brand-gold text-brand-black rounded-lg hover:shadow-lg hover:shadow-brand-gold/50 transition-all duration-300 font-poppins font-bold whitespace-nowrap cursor-pointer">
                    18+ Play Safe
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
