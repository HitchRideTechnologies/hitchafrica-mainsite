import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://hitch.africa";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/business`, lastModified: new Date() },
    { url: `${baseUrl}/company`, lastModified: new Date() },
    { url: `${baseUrl}/contact-us`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
    { url: `${baseUrl}/food`, lastModified: new Date() },
    { url: `${baseUrl}/pay`, lastModified: new Date() },
    { url: `${baseUrl}/press/brand-assets`, lastModified: new Date() },
    { url: `${baseUrl}/press/news`, lastModified: new Date() },
    { url: `${baseUrl}/press/people-and-offices`, lastModified: new Date() },
    { url: `${baseUrl}/press/product-image`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/professional-services`, lastModified: new Date() },
    { url: `${baseUrl}/ride`, lastModified: new Date() },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date() },

  ];
}