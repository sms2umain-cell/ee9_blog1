import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import { glossaryTerms } from '../../mocks/glossary';
import { useSEO } from '../../utils/seo';

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // SEO Configuration
  useSEO({
    title: 'Gaming Glossary - Complete Dictionary of Gaming Terms | EE9.com',
    description: 'Comprehensive dictionary of gaming terms, strategies, and concepts. Master the language of pokies, sports betting, slots, and live casino games in Australia.',
    keywords: 'gaming glossary, casino terms, betting terminology, RTP, volatility, gaming dictionary',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      name: 'Gaming Glossary',
      description: 'Comprehensive dictionary of gaming terms for Australian players',
      url: `${import.meta.env.VITE_SITE_URL || 'https://ee9.com'}/glossary`,
    },
  });

  const categories = Array.from(new Set(glossaryTerms.map(term => term.category)));

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl italic text-white mb-4">
              Gaming <span className="text-brand-gold">Glossary</span>
            </h1>
            <p className="font-inter text-lg text-brand-neutral max-w-3xl mx-auto">
              Your comprehensive dictionary of gaming terms, strategies, and concepts. Master the language of pokies, sports betting, slots, and live casino games.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search terms..."
                className="w-full px-6 py-4 pl-14 bg-brand-black border border-brand-gold/30 rounded-xl text-white placeholder-brand-neutral focus:outline-none focus:border-brand-gold transition-colors duration-300 font-inter"
              />
              <i className="ri-search-line absolute left-5 top-1/2 -translate-y-1/2 text-brand-gold text-xl"></i>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-inter transition-all duration-300 whitespace-nowrap cursor-pointer ${
                selectedCategory === null
                  ? 'bg-brand-gold text-brand-black'
                  : 'bg-brand-black border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-inter transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-brand-gold text-brand-black'
                    : 'bg-brand-black border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="text-center font-inter text-brand-neutral mb-8">
            {filteredTerms.length} {filteredTerms.length === 1 ? 'term' : 'terms'} found
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {Object.keys(groupedTerms).sort().map((letter) => (
            <div key={letter} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center">
                  <span className="font-poppins font-bold text-3xl text-brand-black">{letter}</span>
                </div>
                <div className="flex-1 h-px bg-brand-gold/20"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {groupedTerms[letter].map((term) => (
                  <Card key={term.id} className="hover:border-brand-gold/40 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-poppins font-bold text-2xl text-brand-gold mb-1">
                            {term.term}
                          </h3>
                          {term.fullName && (
                            <p className="font-inter text-sm text-brand-neutral italic">
                              {term.fullName}
                            </p>
                          )}
                        </div>
                        <span className="px-3 py-1 bg-brand-gold/20 text-brand-gold text-xs font-inter font-semibold rounded-full whitespace-nowrap">
                          {term.category}
                        </span>
                      </div>

                      <p className="font-inter text-white/80 leading-relaxed mb-4">
                        {term.definition}
                      </p>

                      {term.relatedTerms && term.relatedTerms.length > 0 && (
                        <div>
                          <p className="font-inter text-sm text-brand-neutral mb-2">Related Terms:</p>
                          <div className="flex flex-wrap gap-2">
                            {term.relatedTerms.map((relatedTerm) => (
                              <button
                                key={relatedTerm}
                                onClick={() => setSearchTerm(relatedTerm)}
                                className="px-3 py-1 bg-brand-dark border border-brand-gold/30 rounded-full text-brand-gold text-xs font-inter hover:bg-brand-gold hover:text-brand-black transition-all duration-300 cursor-pointer whitespace-nowrap"
                              >
                                {relatedTerm}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {filteredTerms.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-file-search-line text-6xl text-brand-gold/30 mb-4"></i>
              <h3 className="font-poppins font-bold text-2xl text-white mb-2">No Terms Found</h3>
              <p className="font-inter text-brand-neutral mb-6">Try a different search term or category</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
                className="px-6 py-3 bg-brand-gold text-brand-black rounded-lg font-poppins font-bold hover:bg-brand-gold-light transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
