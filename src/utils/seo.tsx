import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  schema?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schema,
}: SEOProps) => {
  const location = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://ee9.com';
  const fullUrl = `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    updateMetaTag('last-modified', new Date().toISOString().split('T')[0]);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical || fullUrl);

    // Open Graph tags
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', fullUrl, true);
    if (ogImage) updateMetaTag('og:image', ogImage, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);
    if (ogImage) updateMetaTag('twitter:image', ogImage);

    // Schema.org JSON-LD
    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      
      schemaScript.textContent = JSON.stringify(schema);
    }

    // Cleanup function
    return () => {
      // Remove schema script when component unmounts
      const schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, twitterCard, schema, fullUrl]);
};

// Helper function to generate article schema
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  imageUrl: string;
  category: string;
}) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://ee9.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'EE9.com',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteUrl,
    },
  };
};

// Helper function to generate website schema
export const generateWebsiteSchema = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://ee9.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EE9.com',
    url: siteUrl,
    description: 'Expert insights on pokies, sports betting, slots, and live games in Australia. Learn strategies, understand RTP, volatility, and responsible gambling practices.',
    publisher: {
      '@type': 'Organization',
      name: 'EE9.com',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
};

// Helper function to generate breadcrumb schema
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://ee9.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
};

// Helper function to generate FAQ schema
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};
