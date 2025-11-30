import { promises as fs } from 'fs';
import path from 'path';

export interface Site {
  id: string;
  slug: string;
  name_uk: string;
  name_en: string;
  name_de: string;
  tagline_uk: string;
  tagline_en: string;
  tagline_de: string;
  category: string;
  subcategories: string[];
  region: string;
  oblast: string;
  description_uk: {
    short: string;
    full: string;
    history: string;
    significance: string;
  };
  description_en: {
    short: string;
    full: string;
    history: string;
    significance: string;
  };
  description_de: {
    short: string;
    full: string;
    history?: string;
    significance: string;
  };
  location: {
    city: string;
    region: string;
    address_uk: string;
    address_en: string;
    address_de: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    directions_uk: {
      general: string;
      publicTransport: string;
      car: string;
      parking: string;
    };
    directions_en: {
      general: string;
      publicTransport: string;
      car: string;
      parking: string;
    };
    directions_de: {
      general: string;
      publicTransport: string;
      car: string;
      parking: string;
    };
    nearbyAttractions: Array<{
      name_uk: string;
      name_en: string;
      distance: string;
      type: string;
    }>;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
    bookingUrl: string | null;
    socialMedia: {
      facebook: string | null;
      instagram: string | null;
      youtube: string | null;
    };
  };
  visitingInformation: {
    openingTimes: {
      status_uk: string;
      status_en: string;
      status_de: string;
      seasonal: Array<{
        season_uk: string;
        season_en: string;
        season_de: string;
        days_uk: string;
        days_en: string;
        days_de: string;
        hours: string;
        lastAdmission: string;
      }>;
    };
    admissionPrices: {
      currency: string;
      adult: number;
      student: number;
      child: number;
      senior: number;
      family: number | null;
      notes_uk: string;
      notes_en: string;
      notes_de: string;
    };
    tourOptions: Array<{
      type_uk: string;
      type_en: string;
      type_de: string;
      duration_uk: string;
      duration_en: string;
      duration_de: string;
      price: number;
      groupSize?: string;
    }>;
    averageVisitDuration_uk: string;
    averageVisitDuration_en: string;
    averageVisitDuration_de: string;
    busyPeriods_uk: string[];
    busyPeriods_en: string[];
    busyPeriods_de: string[];
    adviceForVisitors_uk: string;
    adviceForVisitors_en: string;
    adviceForVisitors_de: string;
  };
  features: {
    highlights_uk: string[];
    highlights_en: string[];
    highlights_de: string[];
    facilities_uk: string[];
    facilities_en: string[];
    facilities_de: string[];
    accessibility: {
      wheelchairAccessible: boolean;
      notes_uk: string;
      notes_en: string;
      notes_de: string;
    };
    uniqueSellingPoints_uk: string[];
    uniqueSellingPoints_en: string[];
    uniqueSellingPoints_de: string[];
  };
  images: {
    heroImage: {
      url: string;
      alt_uk: string;
      alt_en: string;
      alt_de: string;
      caption_uk: string;
      caption_en: string;
      caption_de: string;
    };
    gallery: Array<{
      url: string;
      alt_uk: string;
      alt_en: string;
      alt_de: string;
      caption_uk?: string;
      caption_en?: string;
      caption_de?: string;
    }>;
  };
  historicalData: {
    yearBuilt: string;
    yearBuiltNote_uk: string;
    yearBuiltNote_en: string;
    yearBuiltNote_de: string;
    architecturalStyle_uk: string;
    architecturalStyle_en: string;
    architecturalStyle_de: string;
    architects: Array<{
      name: string;
      period: string;
      contribution_uk: string;
      contribution_en: string;
      contribution_de: string;
    }>;
    unescoStatus?: string;
    unescoYear?: number;
    nationalHeritageStatus: string;
    referenceNumber?: string;
    managedBy_uk: string;
    managedBy_en: string;
    managedBy_de: string;
  };
  culturalEvents: Array<{
    name_uk: string;
    name_en: string;
    name_de: string;
    period_uk: string;
    period_en: string;
    period_de: string;
    description_uk: string;
    description_en: string;
    description_de: string;
  }>;
  tags: string[];
  suitableFor_uk: string[];
  suitableFor_en: string[];
  suitableFor_de: string[];
  weatherDependent: boolean;
  indoorActivities: boolean;
  outdoorActivities: boolean;
  priceRange: string;
  rating: number;
  reviewsCount: number;
  featured: boolean;
  status: string;
  metaDescription_uk: string;
  metaDescription_en: string;
  metaDescription_de: string;
  keywords: string[];
  lastUpdated: string;
  source: string;
  verified: boolean;
}

// Get all site files
export async function getAllSites(): Promise<Site[]> {
  const sitesDirectory = path.join(process.cwd(), 'public', 'sites');
  const filenames = await fs.readdir(sitesDirectory);

  const sites = await Promise.all(
    filenames
      .filter(filename => filename.endsWith('.json'))
      .map(async (filename) => {
        const filePath = path.join(sitesDirectory, filename);
        const fileContents = await fs.readFile(filePath, 'utf8');
        return JSON.parse(fileContents) as Site;
      })
  );

  return sites;
}

// Get featured sites
export async function getFeaturedSites(limit: number = 6): Promise<Site[]> {
  const allSites = await getAllSites();
  return allSites
    .filter(site => site.featured === true)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

// Get site by slug
export async function getSiteBySlug(slug: string): Promise<Site | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'sites', `${slug}.json`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents) as Site;
  } catch (error) {
    console.error(`Error loading site ${slug}:`, error);
    return null;
  }
}

// Get sites by category
export async function getSitesByCategory(category: string): Promise<Site[]> {
  const allSites = await getAllSites();
  return allSites.filter(site => site.category === category);
}

// Get sites by tag
export async function getSitesByTag(tag: string): Promise<Site[]> {
  const allSites = await getAllSites();
  return allSites.filter(site => site.tags.includes(tag));
}

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  const allSites = await getAllSites();
  const tagsSet = new Set<string>();

  allSites.forEach(site => {
    site.tags.forEach(tag => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

// Get all unique categories
export async function getAllCategories(): Promise<string[]> {
  const allSites = await getAllSites();
  const categoriesSet = new Set<string>();

  allSites.forEach(site => {
    categoriesSet.add(site.category);
  });

  return Array.from(categoriesSet).sort();
}

// Get sites count by category
export async function getSitesCountByCategory(): Promise<Record<string, number>> {
  const allSites = await getAllSites();
  const counts: Record<string, number> = {};

  allSites.forEach(site => {
    counts[site.category] = (counts[site.category] || 0) + 1;
  });

  return counts;
}

// Get related sites (same category, excluding current site)
export async function getRelatedSites(slug: string, limit: number = 3): Promise<Site[]> {
  const currentSite = await getSiteBySlug(slug);
  if (!currentSite) return [];

  const allSites = await getAllSites();
  return allSites
    .filter(site =>
      site.slug !== slug &&
      site.category === currentSite.category
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

// Search sites
export async function searchSites(query: string): Promise<Site[]> {
  const allSites = await getAllSites();
  const lowerQuery = query.toLowerCase();

  return allSites.filter(site =>
    site.name_en.toLowerCase().includes(lowerQuery) ||
    site.name_uk.toLowerCase().includes(lowerQuery) ||
    site.description_en.short.toLowerCase().includes(lowerQuery) ||
    site.description_uk.short.toLowerCase().includes(lowerQuery) ||
    site.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
