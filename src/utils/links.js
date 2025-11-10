// Centralized Link Management
// Update all affiliate and external links here for easy maintenance

export const affiliateLinks = {
  // Main affiliate partners
  firesideRV: "https://bradenton.firesidervrental.com",
  rvshare: "https://www.jdoqocy.com/click-9111277-13699874",
  cruiseAmerica: "#affiliate-cruise-america",
  outdoorsy: "#affiliate-outdoorsy",

  // Insurance providers
  roamlyInsurance: "#affiliate-roamly",

  // Add more affiliate links as needed
};

// Social media links
export const socialLinks = {
  facebook: "https://facebook.com/bestrv",
  twitter: "https://twitter.com/bestrv",
  instagram: "https://instagram.com/bestrv",
};

// Internal navigation links
export const navLinks = {
  home: "/",
  cities: "/cities",
  campgrounds: "/campgrounds",
  reviews: "/reviews",
  blog: "/blog",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  sitemap: "/sitemap",
};

// Utility function to get affiliate link
export function getAffiliateLink(key) {
  return affiliateLinks[key] || "#";
}

// Utility function to track affiliate clicks (optional - integrate with analytics)
export function trackAffiliateClick(linkName) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'affiliate_click', {
      link_name: linkName,
    });
  }
}
