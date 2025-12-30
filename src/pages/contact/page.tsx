import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { useSEO } from '../../utils/seo';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // SEO Configuration
  useSEO({
    title: 'Contact Us - Get in Touch with EE9.com',
    description: 'Have questions, suggestions, or feedback about gaming strategies and information? Contact EE9.com team. We typically respond within 24-48 hours.',
    keywords: 'contact EE9, gaming questions, feedback, support',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact EE9.com',
      description: 'Contact page for EE9.com - Australian gaming information platform',
      url: `${import.meta.env.VITE_SITE_URL || 'https://ee9.com'}/contact`,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl italic text-white mb-4">
              Contact <span className="text-brand-gold">Us</span>
            </h1>
            <p className="font-inter text-lg text-brand-neutral max-w-2xl mx-auto">
              Have questions, suggestions, or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-black">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card gradient>
                <div className="p-8">
                  <h2 className="font-poppins font-bold text-2xl text-white mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="font-inter text-sm text-brand-neutral mb-2 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-white placeholder-brand-neutral focus:outline-none focus:border-brand-gold transition-colors duration-300 font-inter"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="font-inter text-sm text-brand-neutral mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-white placeholder-brand-neutral focus:outline-none focus:border-brand-gold transition-colors duration-300 font-inter"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="font-inter text-sm text-brand-neutral mb-2 block">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-white focus:outline-none focus:border-brand-gold transition-colors duration-300 font-inter cursor-pointer"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="content">Content Suggestion</option>
                        <option value="error">Report an Error</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-inter text-sm text-brand-neutral mb-2 block">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        maxLength={500}
                        className="w-full px-4 py-3 bg-brand-black border border-brand-gold/30 rounded-lg text-white placeholder-brand-neutral focus:outline-none focus:border-brand-gold transition-colors duration-300 font-inter resize-none"
                        placeholder="Tell us what's on your mind..."
                      />
                      <p className="text-xs text-brand-neutral mt-2">
                        {formData.message.length}/500 characters
                      </p>
                    </div>

                    <Button type="submit" fullWidth size="lg">
                      Send Message
                    </Button>

                    <p className="text-xs text-brand-neutral text-center">
                      We typically respond within 24-48 hours during business days.
                    </p>
                  </form>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                    <i className="ri-question-line text-2xl text-brand-gold"></i>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-white mb-3">
                    Frequently Asked
                  </h3>
                  <p className="font-inter text-sm text-brand-neutral mb-4">
                    Check our guides and glossary for quick answers to common questions.
                  </p>
                  <a href="/guides" className="text-brand-gold hover:text-brand-gold-light transition-colors duration-300 font-inter text-sm font-semibold cursor-pointer">
                    Browse Guides →
                  </a>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                    <i className="ri-shield-check-line text-2xl text-brand-gold"></i>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-white mb-3">
                    Need Help?
                  </h3>
                  <p className="font-inter text-sm text-brand-neutral mb-4">
                    If you're experiencing gambling problems, please contact support services.
                  </p>
                  <a href="/responsible-gambling" className="text-brand-gold hover:text-brand-gold-light transition-colors duration-300 font-inter text-sm font-semibold cursor-pointer">
                    Get Support →
                  </a>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                    <i className="ri-file-text-line text-2xl text-brand-gold"></i>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-white mb-3">
                    Editorial Policy
                  </h3>
                  <p className="font-inter text-sm text-brand-neutral mb-4">
                    Learn about our content standards and editorial guidelines.
                  </p>
                  <a href="/editorial-policy" className="text-brand-gold hover:text-brand-gold-light transition-colors duration-300 font-inter text-sm font-semibold cursor-pointer">
                    Read Policy →
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-white mb-4">
              Other Ways to Connect
            </h2>
            <p className="font-inter text-brand-neutral">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hover>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center">
                  <i className="ri-mail-line text-3xl text-brand-black"></i>
                </div>
                <h3 className="font-poppins font-bold text-lg text-white mb-2">Email</h3>
                <p className="font-inter text-sm text-brand-neutral mb-3">
                  Send us an email anytime
                </p>
                <p className="font-inter text-brand-gold text-sm">
                  contact@ee9.com
                </p>
              </div>
            </Card>

            <Card hover>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center">
                  <i className="ri-feedback-line text-3xl text-brand-black"></i>
                </div>
                <h3 className="font-poppins font-bold text-lg text-white mb-2">Feedback</h3>
                <p className="font-inter text-sm text-brand-neutral mb-3">
                  Share your thoughts
                </p>
                <p className="font-inter text-brand-gold text-sm">
                  feedback@ee9.com
                </p>
              </div>
            </Card>

            <Card hover>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center">
                  <i className="ri-error-warning-line text-3xl text-brand-black"></i>
                </div>
                <h3 className="font-poppins font-bold text-lg text-white mb-2">Report Issue</h3>
                <p className="font-inter text-sm text-brand-neutral mb-3">
                  Found an error?
                </p>
                <p className="font-inter text-brand-gold text-sm">
                  support@ee9.com
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
