/**
 * Schema Generator Utilities
 * Centralized functions for generating JSON-LD structured data
 * Eliminates duplicate schema code across pages
 */

/**
 * Generate LocalBusiness schema for city pages
 * @param {Object} cityData - City-specific data
 * @param {string} description - Meta description
 * @returns {Object} LocalBusiness schema
 */
export function generateCityBusinessSchema(cityData, description) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `RV Rentals in ${cityData.name}`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityData.name,
      "addressRegion": cityData.stateAbbr,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": cityData.latitude || "0",
      "longitude": cityData.longitude || "0"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "127"
    }
  };
}

/**
 * Generate FAQPage schema from FAQ array
 * @param {Array} faqs - Array of FAQ objects with question/answer
 * @returns {Object} FAQPage schema
 */
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

/**
 * Generate BreadcrumbList schema
 * @param {...string} crumbs - Breadcrumb names in order (e.g., 'Home', 'Cities', 'Huntsville')
 * @returns {Object} BreadcrumbList schema
 */
export function generateBreadcrumbSchema(...crumbs) {
  const baseUrl = "https://bestrv.com";
  const paths = {
    "Home": "/",
    "Cities": "/cities",
    "Reviews": "/reviews",
    "Campgrounds": "/campgrounds",
    "Blog": "/blog"
  };

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb,
      "item": index === crumbs.length - 1
        ? undefined // Last item doesn't need item property
        : `${baseUrl}${paths[crumb] || '/' + crumb.toLowerCase().replace(/\s+/g, '-')}`
    })).filter(item => item.item !== undefined || crumbs.indexOf(item.name) === crumbs.length - 1)
  };
}

/**
 * Generate Review schema for company review pages
 * @param {Object} companyData - Company information
 * @param {Object} reviewData - Review details (pros/cons, rating breakdown)
 * @returns {Object} Review schema
 */
export function generateReviewSchema(companyData, reviewData) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": companyData.website || `https://example.com/${companyData.name.toLowerCase().replace(/\s+/g, '-')}`,
      "name": companyData.name,
      "image": companyData.logo,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": companyData.city || companyData.headquarters?.split(',')[0],
        "addressRegion": companyData.state || companyData.headquarters?.split(',')[1]?.trim(),
        "addressCountry": "US"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": companyData.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": reviewData.authorName || "Rob Williams",
      "jobTitle": "RV Travel Expert"
    },
    "reviewBody": reviewData.summary || `Comprehensive review of ${companyData.name} based on firsthand testing.`,
    "positiveNotes": {
      "@type": "ItemList",
      "itemListElement": (reviewData.pros || []).map((pro, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": pro
      }))
    },
    "negativeNotes": {
      "@type": "ItemList",
      "itemListElement": (reviewData.cons || []).map((con, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": con
      }))
    }
  };
}

/**
 * Generate Article schema for blog posts and review pages
 * @param {string} title - Article title
 * @param {string} description - Article description
 * @param {string} image - Article image URL
 * @param {string} datePublished - ISO date string
 * @param {string} dateModified - ISO date string
 * @returns {Object} Article schema
 */
export function generateArticleSchema(title, description, image, datePublished, dateModified) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": "Rob Williams",
      "jobTitle": "RV Travel Expert"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BestRV",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bestrv.com/images/bestrvlogo1.png"
      }
    }
  };
}

/**
 * Generate CampgroundReview schema
 * @param {Object} campgroundData - Campground information
 * @returns {Object} Review schema for campground
 */
export function generateCampgroundReviewSchema(campgroundData) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Campground",
      "name": campgroundData.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": campgroundData.location,
        "addressRegion": campgroundData.stateAbbr,
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": campgroundData.latitude,
        "longitude": campgroundData.longitude
      },
      "amenityFeature": (campgroundData.amenities || []).map(amenity => ({
        "@type": "LocationFeatureSpecification",
        "name": amenity
      }))
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": campgroundData.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": "Sarah Jenkins",
      "jobTitle": "Travel Writer"
    }
  };
}
