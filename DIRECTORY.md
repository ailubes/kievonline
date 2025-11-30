# Ukrainian Heritage Sites Directory — Claude Code Prompt

## Project Overview

Build a trilingual (Ukrainian | English | German) directory of Ukrainian heritage sites using **Next.js 14+ (App Router)**, **Tailwind CSS**, **shadcn/ui**, and **Lucide icons**. The directory should be SEO-optimized, support Google Ads placements, and contain **200+ heritage sites** with content scraped using the **Jina AI Reader API**.

---

## Technical Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS 3.4+
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript
- **Database**: SQLite with Drizzle ORM (or PostgreSQL for production)
- **Content Fetching**: Jina AI Reader API
- **Deployment Target**: Vercel

---

### Frontend design

Use frontend design skill to create a nice modern design with great both UI and UX

### Content Scraping Strategy
Create a scraping script that:
1. Fetches content from authoritative Ukrainian heritage sources
2. Extracts site names, descriptions, locations, categories
3. Translates content into UA/EN/DE using AI or existing translations
4. Stores structured data in the database

**Source URLs to scrape:**
- `https://ukraine.ua/visit/` (official tourism portal)
- `https://visitukraine.today/` (tourism blog)
- `https://whc.unesco.org/en/statesparties/ua` (UNESCO Ukraine)
- `https://en.wikipedia.org/wiki/List_of_castles_in_Ukraine`
- `https://en.wikipedia.org/wiki/Seven_Wonders_of_Ukraine`
- `https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CM%5CO%5CMonasteries.htm`
- Regional tourism websites

---

## Heritage Site Categories (200+ sites)

### 1. UNESCO World Heritage Sites (8)
- Saint-Sophia Cathedral & Kyiv-Pechersk Lavra (Kyiv)
- Historic Centre of Lviv
- Residence of Bukovinian and Dalmatian Metropolitans (Chernivtsi)
- Ancient and Primeval Beech Forests of the Carpathians
- Ancient City of Tauric Chersonese and its Chora
- Wooden Tserkvas of the Carpathian Region (8 churches)
- Struve Geodetic Arc (Ukrainian points)
- Historic Centre of Odesa

### 2. Castles & Fortresses (40+)
- Kamianets-Podilskyi Castle
- Khotyn Fortress
- Akkerman (Bilhorod-Dnistrovskyi) Fortress
- Lutsk Castle (Lubart's Castle)
- Palanok Castle (Mukachevo)
- Olesko Castle
- Pidhirtsi Castle
- Zolochiv Castle
- Medzhybizh Castle
- Uzhhorod Castle
- Ostrog Castle
- Kremenets Castle
- Zbarazh Castle
- Svirzh Castle
- Dubno Castle
- Berezhany Castle
- Buchach Town Hall & Castle
- Nevytske Castle
- Serednye Castle
- Chortkiv Castle
- Terebovlia Castle
- Halych Castle
- Koropets Castle ruins
- Sydoriv Castle
- Mykulyntsi Castle
- Rakovets Castle
- Yazlovets Castle
- Pniv Castle
- Chervonohorod Castle
- Sydoriv Fortress
- Starokostiantyniv Castle
- Letychiv Castle
- Sataniv Fortress
- Bar Castle
- Sharhorod Castle
- Bratslav Castle ruins
- Vinnytsia Castle ruins
- Zhvanets Fortress
- Okopy Castle
- Khust Castle

### 3. Monasteries & Churches (50+)
- Kyiv-Pechersk Lavra
- Saint Sophia Cathedral (Kyiv)
- St. Michael's Golden-Domed Monastery (Kyiv)
- St. Andrew's Church (Kyiv)
- Pochaiv Lavra (Ternopil Oblast)
- Sviatohirsk Lavra (Donetsk Oblast)
- Manyava Hermitage
- Univ Lavra
- Dominican Cathedral (Lviv)
- Armenian Cathedral (Lviv)
- Bernardine Church (Lviv)
- Latin Cathedral (Lviv)
- Boim Chapel (Lviv)
- St. George's Cathedral (Lviv)
- Church of the Holy Spirit (Rohatyn)
- Church of St. Yura (Drohobych)
- Wooden churches of the Carpathians (UNESCO):
  - Church of the Descent of the Holy Spirit (Potelych)
  - Church of St. George (Drohobych)
  - Church of the Ascension (Yasinia)
  - Church of the Birth of the Blessed Virgin (Nyzhniy Verbizh)
  - Church of the Holy Trinity (Zhovkva)
  - Church of the Nativity of the Blessed Virgin Mary (Matkiv)
  - Church of St. Paraskeva (Krehiv)
  - Church of the Synaxis of the Blessed Virgin Mary (Rohatyn)
- Vydubychi Monastery (Kyiv)
- Trinity Church (Chernihiv)
- Yeletskyi Monastery (Chernihiv)
- Annunciation Cathedral (Kharkiv)
- Holy Dormition Cathedral (Kharkiv)
- Transfiguration Cathedral (Odesa)
- Holy Assumption Cathedral (Poltava)
- Krekhiv Monastery
- Hoshiv Monastery
- Basilian Monastery (Buchach)

### 4. National Parks & Nature Reserves (25+)
- Carpathian National Nature Park
- Synevyr National Nature Park
- Uzhansky National Nature Park
- Carpathian Biosphere Reserve
- Askania-Nova Biosphere Reserve
- Black Sea Biosphere Reserve
- Danube Biosphere Reserve
- Shatsky National Nature Park
- Podilski Tovtry National Park
- Holosiivskyi National Nature Park (Kyiv)
- Oleshky Sands National Nature Park
- Dniester Canyon
- Sofiyivka Park (Uman)
- Alexandria Dendropark
- Trostianets Dendropark
- Khortytsia National Reserve
- Kamianska Sich (Khortytsia Island)
- Stone Grave archaeological site
- Mezhyhiria Residence Park
- Feofaniya Park (Kyiv)
- Pirogovo Open-Air Museum
- Probiy Waterfall
- Valley of Daffodils (Khust)

### 5. Palaces & Historic Estates (25+)
- Schönborn Palace (Chynadiyovo)
- Livadia Palace (Crimea)
- Vorontsov Palace (Alupka)
- Massandra Palace
- Alupka Park
- Kachanivka Palace
- Baturyn Hetman's Residence
- Potocki Palace (Lviv)
- Korsun-Shevchenkivsky Palace
- Sharivka Palace
- Tarnowski Palace (Kachanivka)
- Galagan Palace
- Vasilchikovsky Palace
- Radziwill Palace (Olyka)
- Sanguszko Palace
- Razumovsky Palace (Baturyn)
- Kharkiv Gubernatorial House
- Governor's Palace (Chernihiv)
- Taras Shevchenko Museum (Kaniv)

### 6. Museums & Cultural Sites (30+)
- National Museum of the History of Ukraine (Kyiv)
- Pysanka Museum (Kolomyia)
- Museum of Folk Architecture (Pirogovo)
- Lviv Historical Museum
- Museum of Ivan Franko (Lviv)
- Taras Shevchenko National Museum (Kyiv)
- Museum of Hutsul and Pokuttia Folk Art (Kolomyia)
- National Art Museum of Ukraine (Kyiv)
- Kharkiv Art Museum
- Odesa Fine Arts Museum
- Odesa Archaeological Museum
- Dnipropetrovsk Historical Museum
- National Museum "Chornobyl" (Kyiv)
- State Aviation Museum (Kyiv)
- Chernihiv Historical Museum
- Poltava Museum of Local History
- Zaporizhzhia Local History Museum
- Kamianets-Podilskyi Historical Museum-Reserve
- National Reserve "Sophia of Kyiv"
- Olvia Archaeological Reserve
- Petrykivka Folk Art Center

### 7. Historic Cities & Districts (20+)
- Kyiv Historic Center (Podil, Pechersk, Starokyivska Hill)
- Lviv Old Town
- Odesa Historic Center
- Chernivtsi Historic Center
- Kamianets-Podilskyi Old Town
- Chernihiv Historic Center
- Zhovkva Old Town
- Zbarazh Historic Center
- Kremenets Historic Center
- Berezhany Old Town
- Buchach Historic Center
- Ivano-Frankivsk Old Town
- Ternopil Historic Center
- Lutsk Old Town
- Rivne Historic Sites
- Vinnytsia Historic Center
- Zhytomyr Historic Sites
- Uzhhorod Old Town
- Khmelnytskyi Historic Center
- Poltava Historic Center

### 8. Intangible Heritage & Craft Centers (10+)
- Petrykivka (folk painting)
- Kosiv (painted ceramics)
- Reshetylivka (embroidery)
- Opishnya (pottery)
- Vyshyvanka Centers (various regions)
- Hutsul craft villages
- Pysanka traditions (nationwide)
- Kobzar-Lirnyk traditions

---

## Database Schema

```typescript
// schema.ts
import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const sites = sqliteTable('sites', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  slug: text('slug').notNull().unique(),
  category: text('category').notNull(), // unesco, castle, monastery, park, palace, museum, city, intangible
  region: text('region').notNull(), // oblast
  
  // Multilingual content
  nameUk: text('name_uk').notNull(),
  nameEn: text('name_en').notNull(),
  nameDe: text('name_de').notNull(),
  
  descriptionUk: text('description_uk'),
  descriptionEn: text('description_en'),
  descriptionDe: text('description_de'),
  
  // Location
  city: text('city'),
  latitude: real('latitude'),
  longitude: real('longitude'),
  address: text('address'),
  
  // Media
  imageUrl: text('image_url'),
  images: text('images'), // JSON array
  
  // Metadata
  yearBuilt: text('year_built'),
  architecturalStyle: text('architectural_style'),
  unescoStatus: text('unesco_status'), // listed, tentative, null
  openingHours: text('opening_hours'),
  website: text('website'),
  
  // SEO
  metaDescriptionUk: text('meta_description_uk'),
  metaDescriptionEn: text('meta_description_en'),
  metaDescriptionDe: text('meta_description_de'),
  
  // Admin
  featured: integer('featured').default(0),
  status: text('status').default('published'), // draft, published
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
});

export const regions = sqliteTable('regions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  slug: text('slug').notNull().unique(),
  nameUk: text('name_uk').notNull(),
  nameEn: text('name_en').notNull(),
  nameDe: text('name_de').notNull(),
  descriptionUk: text('description_uk'),
  descriptionEn: text('description_en'),
  descriptionDe: text('description_de')
});
```

---

## Project Structure

```
ukrainian-heritage/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Homepage
│   │   ├── sites/
│   │   │   ├── page.tsx          # All sites listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual site
│   │   ├── categories/
│   │   │   └── [category]/
│   │   │       └── page.tsx      # Category listing
│   │   ├── regions/
│   │   │   └── [region]/
│   │   │       └── page.tsx      # Region listing
│   │   ├── map/
│   │   │   └── page.tsx          # Interactive map
│   │   └── about/
│   │       └── page.tsx
│   ├── api/
│   │   ├── sites/
│   │   │   └── route.ts
│   │   └── search/
│   │       └── route.ts
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                       # shadcn components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── Navigation.tsx
│   ├── sites/
│   │   ├── SiteCard.tsx
│   │   ├── SiteGrid.tsx
│   │   ├── SiteDetails.tsx
│   │   ├── SiteGallery.tsx
│   │   └── SiteMap.tsx
│   ├── search/
│   │   ├── SearchBar.tsx
│   │   └── SearchFilters.tsx
│   ├── ads/
│   │   ├── AdBanner.tsx
│   │   ├── AdSidebar.tsx
│   │   └── AdInFeed.tsx
│   └── seo/
│       ├── JsonLd.tsx
│       └── MetaTags.tsx
├── lib/
│   ├── db/
│   │   ├── index.ts
│   │   ├── schema.ts
│   │   └── queries.ts
│   ├── i18n/
│   │   ├── config.ts
│   │   ├── dictionaries/
│   │   │   ├── uk.json
│   │   │   ├── en.json
│   │   │   └── de.json
│   │   └── get-dictionary.ts
│   ├── jina/
│   │   └── reader.ts
│   └── utils/
│       ├── seo.ts
│       └── helpers.ts
├── scripts/
│   ├── scrape-sites.ts           # Jina AI scraping script
│   ├── seed-database.ts
│   └── generate-translations.ts
├── public/
│   ├── images/
│   └── icons/
├── styles/
│   └── globals.css
├── drizzle.config.ts
├── middleware.ts                 # i18n routing
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## SEO Implementation

### Meta Tags Template (per page)
```tsx
// app/[locale]/sites/[slug]/page.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const site = await getSiteBySlug(params.slug);
  const locale = params.locale;
  
  const title = locale === 'uk' ? site.nameUk : locale === 'de' ? site.nameDe : site.nameEn;
  const description = locale === 'uk' ? site.metaDescriptionUk : locale === 'de' ? site.metaDescriptionDe : site.metaDescriptionEn;
  
  return {
    title: `${title} | Ukrainian Heritage`,
    description,
    alternates: {
      canonical: `https://ukrainian-heritage.com/${locale}/sites/${site.slug}`,
      languages: {
        'uk': `https://ukrainian-heritage.com/uk/sites/${site.slug}`,
        'en': `https://ukrainian-heritage.com/en/sites/${site.slug}`,
        'de': `https://ukrainian-heritage.com/de/sites/${site.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://ukrainian-heritage.com/${locale}/sites/${site.slug}`,
      siteName: 'Ukrainian Heritage',
      images: [{ url: site.imageUrl, width: 1200, height: 630 }],
      locale: locale === 'uk' ? 'uk_UA' : locale === 'de' ? 'de_DE' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [site.imageUrl],
    },
  };
}
```

### JSON-LD Structured Data
```tsx
// components/seo/JsonLd.tsx
export function SiteJsonLd({ site, locale }: { site: Site; locale: string }) {
  const name = locale === 'uk' ? site.nameUk : locale === 'de' ? site.nameDe : site.nameEn;
  const description = locale === 'uk' ? site.descriptionUk : locale === 'de' ? site.descriptionDe : site.descriptionEn;
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name,
    description,
    image: site.imageUrl,
    url: `https://ukrainian-heritage.com/${locale}/sites/${site.slug}`,
    geo: site.latitude && site.longitude ? {
      '@type': 'GeoCoordinates',
      latitude: site.latitude,
      longitude: site.longitude,
    } : undefined,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: 'UA',
    },
    isAccessibleForFree: true,
    publicAccess: true,
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

### Sitemap Generation
```tsx
// app/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sites = await getAllSites();
  const locales = ['uk', 'en', 'de'];
  
  const siteUrls = sites.flatMap((site) =>
    locales.map((locale) => ({
      url: `https://ukrainian-heritage.com/${locale}/sites/${site.slug}`,
      lastModified: site.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: site.featured ? 0.9 : 0.7,
    }))
  );
  
  const staticPages = ['', '/sites', '/categories', '/regions', '/map', '/about'];
  const staticUrls = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `https://ukrainian-heritage.com/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: page === '' ? 1.0 : 0.8,
    }))
  );
  
  return [...staticUrls, ...siteUrls];
}
```

---

## Google Ads Integration

### Ad Placements
1. **Header Banner** (728x90 or responsive) — on all pages
2. **Sidebar Ad** (300x250) — on site detail pages
3. **In-Feed Ads** — every 6th item in listings
4. **Footer Banner** (728x90) — on all pages

### Ad Component
```tsx
// components/ads/AdBanner.tsx
'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

export function AdBanner({ slot, format = 'auto', className }: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Ad error:', e);
    }
  }, []);
  
  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"  // Replace with actual ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
```

### Layout with Ads
```tsx
// Listing page layout
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
  <main className="lg:col-span-3">
    <SiteGrid sites={sites} />
  </main>
  <aside className="lg:col-span-1">
    <div className="sticky top-4">
      <AdBanner slot="sidebar-1" format="rectangle" />
      <div className="mt-6">
        <AdBanner slot="sidebar-2" format="rectangle" />
      </div>
    </div>
  </aside>
</div>
```

---

## Internationalization (i18n)

### Middleware for Locale Detection
```tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['uk', 'en', 'de'];
const defaultLocale = 'uk';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if pathname already has locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return;
  
  // Detect locale from Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language') || '';
  let detectedLocale = defaultLocale;
  
  if (acceptLanguage.includes('de')) detectedLocale = 'de';
  else if (acceptLanguage.includes('en')) detectedLocale = 'en';
  else if (acceptLanguage.includes('uk')) detectedLocale = 'uk';
  
  return NextResponse.redirect(
    new URL(`/${detectedLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|icons).*)'],
};
```

### Dictionary Files
```json
// lib/i18n/dictionaries/uk.json
{
  "common": {
    "siteName": "Спадщина України",
    "search": "Пошук",
    "filter": "Фільтр",
    "all": "Всі",
    "viewMore": "Детальніше",
    "back": "Назад",
    "share": "Поділитися"
  },
  "categories": {
    "unesco": "Об'єкти UNESCO",
    "castle": "Замки та фортеці",
    "monastery": "Монастирі та церкви",
    "park": "Природні парки",
    "palace": "Палаци та садиби",
    "museum": "Музеї",
    "city": "Історичні міста",
    "intangible": "Нематеріальна спадщина"
  },
  "homepage": {
    "hero": {
      "title": "Відкрийте спадщину України",
      "subtitle": "200+ історичних та культурних пам'яток"
    }
  }
}
```

---

## Design Guidelines

### Visual Identity
- **Theme**: Elegant, editorial style with Ukrainian cultural motifs
- **Primary Colors**: 
  - Blue (#0057B8) — Ukrainian flag
  - Yellow/Gold (#FFD700) — Ukrainian flag accent
  - Warm white (#FFFDF5) — backgrounds
  - Deep charcoal (#1A1A1A) — text
- **Typography**:
  - Headers: "Cormorant Garamond" or "Playfair Display" (elegant, historical feel)
  - Body: "Source Sans 3" or "Nunito Sans" (clean, readable)
- **Imagery**: High-quality photographs with subtle film grain overlay
- **Patterns**: Subtle vyshyvanka-inspired geometric patterns for backgrounds/dividers

### Component Styling
```tsx
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        ukraine: {
          blue: '#0057B8',
          yellow: '#FFD700',
          gold: '#C9A227',
        },
        heritage: {
          cream: '#FFFDF5',
          parchment: '#F5F0E6',
          stone: '#E8E2D9',
          charcoal: '#1A1A1A',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
};
```

---

## Jina AI Scraping Script

```typescript
// scripts/scrape-sites.ts
import { db } from '../lib/db';
import { sites } from '../lib/db/schema';

const JINA_API_KEY = 'xxx';

interface ScrapedSite {
  name: string;
  description: string;
  location: string;
  category: string;
  sourceUrl: string;
}

async function fetchWithJina(url: string): Promise<string> {
  const response = await fetch(`https://r.jina.ai/${url}`, {
    headers: {
      'Authorization': `Bearer ${JINA_API_KEY}`,
      'Accept': 'text/markdown',
    },
  });
  
  if (!response.ok) {
    throw new Error(`Jina API error: ${response.status}`);
  }
  
  return response.text();
}

async function searchWithJina(query: string): Promise<any[]> {
  const response = await fetch(
    `https://s.jina.ai/?q=${encodeURIComponent(query)}`,
    {
      headers: {
        'Authorization': `Bearer ${JINA_API_KEY}`,
        'Accept': 'application/json',
      },
    }
  );
  
  if (!response.ok) {
    throw new Error(`Jina search error: ${response.status}`);
  }
  
  return response.json();
}

// Example scraping for castles
async function scrapeCastles() {
  const castleQueries = [
    'Ukrainian castle history tourism',
    'Kamianets-Podilskyi fortress',
    'Khotyn fortress Ukraine',
    'Lutsk castle Lubart',
    // Add more queries...
  ];
  
  for (const query of castleQueries) {
    console.log(`Searching: ${query}`);
    const results = await searchWithJina(query);
    
    for (const result of results) {
      // Process and extract site information
      // Use AI to structure the data
      // Store in database
    }
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

// Main execution
async function main() {
  console.log('Starting heritage site scraping...');
  
  await scrapeCastles();
  // await scrapeMonasteries();
  // await scrapeParks();
  // etc.
  
  console.log('Scraping complete!');
}

main().catch(console.error);
```

---

## Key Features to Implement

1. **Homepage**
   - Hero section with featured sites carousel
   - Category quick links with icons
   - Region map (interactive SVG)
   - Recent/Featured sites grid
   - Newsletter signup

2. **Site Listings**
   - Filterable by category, region, UNESCO status
   - Search with autocomplete
   - Grid/List view toggle
   - Pagination with infinite scroll option
   - Sort by name, region, popularity

3. **Site Detail Pages**
   - High-quality image gallery (lightbox)
   - Full description with history
   - Location map (Leaflet/Mapbox)
   - Visiting information
   - Related sites
   - Share buttons
   - JSON-LD structured data

4. **Interactive Map**
   - All sites plotted
   - Category/region filters
   - Clustering for dense areas
   - Site preview on hover/click

5. **Search**
   - Full-text search across all content
   - Filters for category, region
   - Search suggestions

6. **Language Switching**
   - Persistent language preference
   - Proper hreflang tags
   - All content fully translated

---

## Development Steps

1. **Initialize Project**
   ```bash
   npx create-next-app@latest ukrainian-heritage --typescript --tailwind --eslint --app
   cd ukrainian-heritage
   npx shadcn@latest init
   npm install drizzle-orm better-sqlite3 lucide-react
   ```

2. **Set Up Database & Schema**
   - Create Drizzle schema
   - Set up migrations
   - Create seed data script

3. **Implement i18n**
   - Configure middleware
   - Create dictionary files
   - Set up language switcher

4. **Build Core Components**
   - Layout (Header, Footer, Navigation)
   - Site cards and grids
   - Search and filters
   - Ad placements

5. **Create Pages**
   - Homepage
   - Site listings (all, by category, by region)
   - Site detail pages
   - Interactive map
   - About page

6. **SEO Implementation**
   - Meta tags generation
   - JSON-LD structured data
   - Sitemap
   - robots.txt

7. **Scrape & Populate Content**
   - Run Jina AI scraping scripts
   - Process and structure data
   - Generate translations
   - Seed database

8. **Testing & Optimization**
   - Performance optimization
   - SEO audit
   - Accessibility check
   - Mobile responsiveness

9. **Deploy**
   - Configure Vercel deployment
   - Set up Google Ads
   - Submit sitemap to search engines

---

## Notes

- Always use `generateStaticParams` for static generation where possible
- Implement proper error boundaries and loading states
- Use Next.js Image component for optimized images
- Consider implementing ISR (Incremental Static Regeneration) for frequently updated content
- Monitor Core Web Vitals and optimize accordingly
- Implement proper caching headers for API routes


**Good luck building this directory! 🇺🇦**
