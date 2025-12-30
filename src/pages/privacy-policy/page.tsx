import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useSEO } from '../../utils/seo';

export default function PrivacyPolicyPage() {
  // SEO Configuration
  useSEO({
    title: 'Privacy Policy - How We Protect Your Information | EE9.com',
    description: 'Read EE9.com privacy policy to understand how we collect, use, and protect your personal information. Learn about cookies, data security, and your privacy rights.',
    keywords: 'privacy policy, data protection, cookies, personal information, privacy rights',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Privacy Policy',
      description: 'EE9.com privacy policy explaining how we collect, use, and protect your personal information',
      url: `${import.meta.env.VITE_SITE_URL || 'https://ee9.com'}/privacy-policy`,
    },
  });

  return (
    <div className="min-h-screen bg-brand-black text-white">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl italic text-white mb-4">
              Privacy <span className="text-brand-gold">Policy</span>
            </h1>
            <p className="font-inter text-lg text-brand-neutral max-w-2xl mx-auto">
              How we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="font-inter text-white/80 leading-relaxed mb-8">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <p className="font-inter text-white/80 leading-relaxed mb-8">
              EE9.com ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Information We Collect</h2>
            
            <h3 className="font-poppins font-semibold text-2xl text-brand-gold mb-4 mt-8">Personal Information</h3>
            <p className="font-inter text-white/80 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="font-inter text-white/80 space-y-2 list-disc list-inside mb-6">
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our contact form</li>
              <li>Participate in surveys or promotions</li>
              <li>Leave comments or feedback</li>
            </ul>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              This information may include: name, email address, and any other information you choose to provide.
            </p>

            <h3 className="font-poppins font-semibold text-2xl text-brand-gold mb-4 mt-8">Automatically Collected Information</h3>
            <p className="font-inter text-white/80 leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="font-inter text-white/80 space-y-2 list-disc list-inside mb-6">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device identifiers</li>
            </ul>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">How We Use Your Information</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="font-inter text-white/80 space-y-2 list-disc list-inside mb-6">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve and personalize your experience</li>
              <li>Understand how you use our website</li>
              <li>Develop new features and functionality</li>
              <li>Communicate with you, including for customer service and updates</li>
              <li>Send you newsletters and marketing communications (with your consent)</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Cookies and Tracking Technologies</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
            </p>
            
            <h3 className="font-poppins font-semibold text-2xl text-brand-gold mb-4 mt-8">Types of Cookies We Use</h3>
            <ul className="font-inter text-white/80 space-y-3 list-disc list-inside mb-6">
              <li><strong className="text-white">Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong className="text-white">Preference Cookies:</strong> Remember your preferences and settings</li>
              <li><strong className="text-white">Marketing Cookies:</strong> Track your browsing habits to show relevant advertisements</li>
            </ul>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Information Sharing and Disclosure</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="font-inter text-white/80 space-y-2 list-disc list-inside mb-6">
              <li><strong className="text-white">Service Providers:</strong> With third-party service providers who perform services on our behalf (e.g., email delivery, analytics)</li>
              <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
              <li><strong className="text-white">With Your Consent:</strong> When you have given us explicit permission</li>
            </ul>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Data Security</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Your Rights</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-4">
              Under Australian privacy law, you have the right to:
            </p>
            <ul className="font-inter text-white/80 space-y-2 list-disc list-inside mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              To exercise these rights, please contact us using the information provided below.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Third-Party Links</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Children's Privacy</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete it.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Changes to This Privacy Policy</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-white mb-6 mt-12">Contact Us</h2>
            <p className="font-inter text-white/80 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-brand-dark p-6 rounded-xl mb-8">
              <p className="font-inter text-white/80 mb-2">Email: privacy@ee9.com</p>
              <p className="font-inter text-white/80">Website: <Link to="/contact" className="text-brand-gold hover:text-brand-gold-light cursor-pointer">Contact Form</Link></p>
            </div>

            <div className="bg-gradient-to-r from-brand-gold/10 to-brand-gold-light/10 border border-brand-gold/30 p-8 rounded-xl my-12">
              <h3 className="font-poppins font-bold text-xl text-white mb-3">Disclaimer</h3>
              <p className="font-inter text-white/80 leading-relaxed">
                This website provides information about gaming for educational purposes only. We are not a gambling operator. All gambling activities should be conducted responsibly and in accordance with applicable laws. You must be 18 years or older to participate in gambling activities in Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
