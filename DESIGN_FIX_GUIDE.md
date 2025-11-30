# 🎨 Kyiv Online - Complete Design Fix Guide

## Current Status

**Application State**: Running on PM2 (port 3001)
- ✅ Next.js 16.0.5 with React 19.2.0
- ✅ 4 core components built (Header, Hero, Categories, Footer)
- ✅ 39+ heritage site JSON files with comprehensive data
- ✅ Design system established (Tailwind + custom Ukrainian colors)
- ⚠️ Using placeholder visuals (needs real images)
- ⚠️ Data not integrated into UI (JSON files exist but not displayed)

---

## Phase 1: Download Real Images

### Required Images (9 total)

Since the server has download restrictions, you'll need to download these images manually on your local computer, then upload to the server.

#### Image Specifications

| Filename | Purpose | Dimensions | Max Size | Format |
|----------|---------|------------|----------|--------|
| `hero-bg.jpg` | Hero section background | 1920x1080 | 300 KB | JPG |
| `cat-castle.jpg` | Castles category | 800x600 | 100 KB | JPG |
| `cat-religious.jpg` | Religious sites | 800x600 | 100 KB | JPG |
| `cat-museum.jpg` | Museums | 800x600 | 100 KB | JPG |
| `cat-nature.jpg` | Natural reserves | 800x600 | 100 KB | JPG |
| `cat-palace.jpg` | Palaces | 800x600 | 100 KB | JPG |
| `cat-city.jpg` | Historic cities | 800x600 | 100 KB | JPG |
| `cat-unesco.jpg` | UNESCO sites | 800x600 | 100 KB | JPG |
| `cat-intangible.jpg` | Intangible heritage | 800x600 | 100 KB | JPG |

---

### Step-by-Step: Download Images Locally

#### 1. Visit Wikimedia Commons

Go to: https://commons.wikimedia.org/

#### 2. Search and Download Each Image

**Hero Background** - Search: "Kyiv Pechersk Lavra"
- Recommended: https://commons.wikimedia.org/wiki/File:80-391-0151_Kyiv_Pechersk_Lavra_RB_18.jpg
- Download size: 1280px width
- Save as: `hero-bg.jpg`

**Castles** - Search: "Kamianets-Podilskyi Castle"
- Recommended: https://commons.wikimedia.org/wiki/File:Kamianets-Podilskyi_Castle_2019_G1.jpg
- Download size: 1024px width
- Save as: `cat-castle.jpg`

**Religious Sites** - Search: "St Michael's Golden Domed Monastery Kyiv"
- Recommended: https://commons.wikimedia.org/wiki/File:St._Michael's_Golden-Domed_Monastery,_Kyiv.jpg
- Download size: 1024px width
- Save as: `cat-religious.jpg`

**Museums** - Search: "Lviv Opera House"
- Recommended: https://commons.wikimedia.org/wiki/File:Lviv_Opera_House.jpg
- Download size: 1024px width
- Save as: `cat-museum.jpg`

**Nature** - Search: "Synevyr Lake Ukraine"
- Recommended: https://commons.wikimedia.org/wiki/File:Lake_Synevyr_in_Carpathian_Mountains.jpg
- Download size: 1024px width
- Save as: `cat-nature.jpg`

**Palaces** - Search: "Olesko Castle"
- Recommended: https://commons.wikimedia.org/wiki/File:Olesko_Castle_in_winter.jpg
- Download size: 1024px width
- Save as: `cat-palace.jpg`

**Historic Cities** - Search: "Lviv Market Square"
- Recommended: https://commons.wikimedia.org/wiki/File:Market_Square_in_Lviv.jpg
- Download size: 1024px width
- Save as: `cat-city.jpg`

**UNESCO** - Search: "Wooden Tserkvas Carpathian"
- Recommended: https://commons.wikimedia.org/wiki/File:Wooden_church_Ukraine.jpg
- Download size: 1024px width
- Save as: `cat-unesco.jpg`

**Intangible Heritage** - Search: "Ukrainian embroidery vyshyvanka"
- Recommended: https://commons.wikimedia.org/wiki/File:Ukrainian_embroidery_detail.jpg
- Download size: 1024px width
- Save as: `cat-intangible.jpg`

---

### Step 3: Optimize Images

Use online tools to compress images:

**Option 1: TinyPNG** (Recommended)
1. Go to: https://tinypng.com/
2. Upload each image
3. Download compressed version
4. Verify file size is under target (hero: 300KB, others: 100KB)

**Option 2: ImageOptim** (Mac users)
1. Download: https://imageoptim.com/
2. Drag images onto app
3. Automatic optimization

**Option 3: Squoosh** (Web-based)
1. Go to: https://squoosh.app/
2. Upload image
3. Adjust quality slider to hit target file size
4. Download

---

### Step 4: Upload Images to Server

**Using SCP** (Command Line):
```bash
scp hero-bg.jpg sudno@167.235.10.212:/var/www/kievonline.net/kievonline.net/public/images/
scp cat-*.jpg sudno@167.235.10.212:/var/www/kievonline.net/kievonline.net/public/images/
```

**Using SFTP Client** (GUI):
1. Open FileZilla or Cyberduck
2. Connect to: `sftp://167.235.10.212`
3. Username: `sudno`
4. Navigate to: `/var/www/kievonline.net/kievonline.net/public/images/`
5. Upload all 9 JPG files

---

## Phase 2: Update Tailwind Configuration

Once images are uploaded, update the Tailwind config:

**File**: `tailwind.config.ts`

**Current** (lines 66-78):
```typescript
backgroundImage: {
  'gradient-hero': 'linear-gradient(135deg, rgba(10, 20, 40, 0.7) 0%, rgba(30, 58, 95, 0.7) 50%, rgba(168, 93, 79, 0.6) 100%), url(/images/hero-bg.svg)',
  'img-castle': 'url(/images/cat-castle.svg)',
  'img-religious': 'url(/images/cat-religious.svg)',
  // ... others are gradients
},
```

**Update to**:
```typescript
backgroundImage: {
  // Hero with real photo + gradient overlay
  'gradient-hero': 'linear-gradient(135deg, rgba(10, 20, 40, 0.7) 0%, rgba(30, 58, 95, 0.7) 50%, rgba(168, 93, 79, 0.6) 100%), url(/images/hero-bg.jpg)',

  // Fallback gradients
  'gradient-subtle': 'linear-gradient(to bottom, rgba(250, 248, 243, 0.95), rgba(245, 240, 230, 1))',
  'gradient-gold': 'linear-gradient(135deg, #d4a574 0%, #a85d4f 100%)',
  'gradient-dark': 'linear-gradient(135deg, #0a1428 0%, #1a2332 100%)',

  // Category images
  'img-castle': 'url(/images/cat-castle.jpg)',
  'img-religious': 'url(/images/cat-religious.jpg)',
  'img-museum': 'url(/images/cat-museum.jpg)',
  'img-nature': 'url(/images/cat-nature.jpg)',
  'img-palace': 'url(/images/cat-palace.jpg)',
  'img-city': 'url(/images/cat-city.jpg)',
  'img-unesco': 'url(/images/cat-unesco.jpg)',
  'img-intangible': 'url(/images/cat-intangible.jpg)',
},
```

---

## Phase 3: Update Categories Component

Replace emoji icons with actual images.

**File**: `components/Categories.tsx`

**Find this pattern** (repeated 8 times):
```tsx
<div className="text-5xl mb-4">🏰</div>
```

**Replace with Image component**:

First, add Next.js Image import at top:
```tsx
import Image from 'next/image';
```

Then replace each emoji div with:

```tsx
{/* Castles category */}
<div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
  <Image
    src="/images/cat-castle.jpg"
    alt="Castles and Fortresses of Ukraine"
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/80 to-transparent" />
</div>

{/* Religious sites */}
<div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
  <Image
    src="/images/cat-religious.jpg"
    alt="Monasteries and Churches of Ukraine"
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/80 to-transparent" />
</div>

{/* Museums */}
<div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
  <Image
    src="/images/cat-museum.jpg"
    alt="Museums and Cultural Sites"
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/80 to-transparent" />
</div>

{/* Nature */}
<div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
  <Image
    src="/images/cat-nature.jpg"
    alt="Natural Reserves and Parks"
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/80 to-transparent" />
</div>

{/* Palaces */}
<div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
  <Image
    src="/images/cat-palace.jpg"
    alt="Palaces and Historic Estates"
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/80 to-transparent" />
</div>

{/* Cities */}
<div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
  <Image
    src="/images/cat-city.jpg"
    alt="Historic Cities and Districts"
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/80 to-transparent" />
</div>

{/* UNESCO */}
<div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
  <Image
    src="/images/cat-unesco.jpg"
    alt="UNESCO World Heritage Sites"
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/80 to-transparent" />
</div>

{/* Intangible */}
<div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
  <Image
    src="/images/cat-intangible.jpg"
    alt="Intangible Cultural Heritage"
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/80 to-transparent" />
</div>
```

**Key features**:
- Next.js Image component for automatic optimization
- `fill` prop makes image cover container
- `object-cover` ensures proper aspect ratio
- Hover zoom effect (`group-hover:scale-110`)
- Gradient overlay for text readability

---

## Phase 4: Create Data Utilities

Create a file to read the 39+ JSON heritage site files.

**File**: `lib/sites.ts` (create this file)

```typescript
import fs from 'fs';
import path from 'path';

export interface HeritageSite {
  id: string;
  slug: string;
  name_en: string;
  name_uk: string;
  name_de: string;
  description_short_en: string;
  description_short_uk: string;
  category: string;
  subcategory?: string;
  region: string;
  city: string;
  latitude: number;
  longitude: number;
  images?: string[];
  year_built?: string;
  architectural_style?: string;
  unesco_status?: boolean;
  website?: string;
  opening_hours?: string;
  [key: string]: any;
}

export function getAllSites(): HeritageSite[] {
  const sitesDirectory = path.join(process.cwd(), 'public', 'sites');

  try {
    const filenames = fs.readdirSync(sitesDirectory);
    const sites = filenames
      .filter(filename => filename.endsWith('.json'))
      .map(filename => {
        const filePath = path.join(sitesDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents) as HeritageSite;
      });

    return sites;
  } catch (error) {
    console.error('Error reading heritage sites:', error);
    return [];
  }
}

export function getSiteBySlug(slug: string): HeritageSite | null {
  const sites = getAllSites();
  return sites.find(site => site.slug === slug) || null;
}

export function getSitesByCategory(category: string): HeritageSite[] {
  const sites = getAllSites();
  return sites.filter(site => site.category === category);
}

export function getSitesByRegion(region: string): HeritageSite[] {
  const sites = getAllSites();
  return sites.filter(site => site.region === region);
}

export function getFeaturedSites(count: number = 6): HeritageSite[] {
  const sites = getAllSites();

  // Prioritize UNESCO sites, then shuffle
  const unescoSites = sites.filter(s => s.unesco_status === true);
  const otherSites = sites.filter(s => s.unesco_status !== true);

  const featured = [
    ...unescoSites.slice(0, Math.min(2, unescoSites.length)),
    ...otherSites.slice(0, count - 2)
  ];

  return featured.slice(0, count);
}

export function getCategoryCounts(): Record<string, number> {
  const sites = getAllSites();
  const counts: Record<string, number> = {};

  sites.forEach(site => {
    counts[site.category] = (counts[site.category] || 0) + 1;
  });

  return counts;
}
```

---

## Phase 5: Update Homepage with Real Data

**File**: `app/page.tsx`

Add at the top:
```tsx
import { getFeaturedSites, getCategoryCounts } from '@/lib/sites';
import Image from 'next/image';
```

Update the Featured Sites section:

```tsx
export default function Home() {
  const featuredSites = getFeaturedSites(6);
  const categoryCounts = getCategoryCounts();

  return (
    <main className="min-h-screen bg-ukraine-cream">
      <Header />
      <Hero />

      {/* Categories - pass actual counts */}
      <Categories counts={categoryCounts} />

      {/* Featured Sites - use real data */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-ukraine-gold font-display font-bold text-sm uppercase tracking-widest mb-4">
              Featured Sites
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ukraine-navy mb-4">
              Must-See Heritage
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore some of Ukraine's most iconic and UNESCO-listed heritage sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSites.map((site) => (
              <a
                key={site.slug}
                href={`/sites/${site.slug}`}
                className="card overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden bg-slate-200">
                  {site.images && site.images[0] ? (
                    <Image
                      src={site.images[0]}
                      alt={site.name_en}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-ukraine-blue/20 to-ukraine-gold/20 flex items-center justify-center">
                      <span className="text-6xl">🏛️</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-ukraine-gold uppercase tracking-wide">
                      {site.category}
                    </span>
                    {site.unesco_status && (
                      <span className="text-xs bg-ukraine-gold/10 text-ukraine-gold px-2 py-1 rounded">
                        UNESCO
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl text-ukraine-navy mb-2 group-hover:text-ukraine-blue transition-colors">
                    {site.name_en}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {site.description_short_en}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">{site.city}, {site.region}</span>
                    <span className="text-ukraine-blue font-bold group-hover:text-heritage-terracotta transition-colors">
                      Learn More →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of page... */}
    </main>
  );
}
```

Update Categories component to accept counts:

**File**: `components/Categories.tsx`

```tsx
export default function Categories({ counts }: { counts?: Record<string, number> }) {
  const defaultCounts = {
    castle: 20,
    monastery: 10,
    museum: 5,
    park: 5,
    palace: 3,
    city: 3,
    unesco: 3,
    intangible: 2
  };

  const actualCounts = counts || defaultCounts;

  // Then use: {actualCounts.castle || 40}+ sites
}
```

---

## Phase 6: Build and Deploy

After making all changes:

```bash
# Navigate to project
cd /var/www/kievonline.net/kievonline.net

# Build production version
npm run build

# Restart PM2
pm2 restart kievonline-next

# Check status
pm2 status

# View logs
pm2 logs kievonline-next --lines 20
```

---

## Phase 7: Create Dynamic Site Pages

**File**: `app/sites/[slug]/page.tsx` (create this file)

```tsx
import { notFound } from 'next/navigation';
import { getSiteBySlug, getAllSites } from '@/lib/sites';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  const sites = getAllSites();
  return sites.map((site) => ({
    slug: site.slug,
  }));
}

export default function SitePage({ params }: { params: { slug: string } }) {
  const site = getSiteBySlug(params.slug);

  if (!site) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ukraine-cream">
      <Header />

      {/* Hero Image */}
      <div className="relative h-96 w-full">
        {site.images && site.images[0] ? (
          <Image
            src={site.images[0]}
            alt={site.name_en}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-ukraine-blue to-ukraine-gold" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/80 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-ukraine-gold text-ukraine-navy text-sm font-bold rounded">
                {site.category}
              </span>
              {site.unesco_status && (
                <span className="px-3 py-1 bg-white/20 backdrop-blur text-white text-sm font-bold rounded">
                  UNESCO World Heritage
                </span>
              )}
            </div>
            <h1 className="text-5xl font-display font-bold text-white mb-2">
              {site.name_en}
            </h1>
            <p className="text-xl text-white/90">
              {site.city}, {site.region}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                {site.description_short_en}
              </p>

              {site.description_detailed_en && (
                <div className="mt-8">
                  <h2 className="text-3xl font-display font-bold text-ukraine-navy mb-4">
                    About This Site
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    {site.description_detailed_en}
                  </p>
                </div>
              )}

              {site.history_en && (
                <div className="mt-8">
                  <h2 className="text-3xl font-display font-bold text-ukraine-navy mb-4">
                    History
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    {site.history_en}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Visitor Information */}
            <div className="card p-6">
              <h3 className="font-display font-bold text-xl text-ukraine-navy mb-4">
                Visitor Information
              </h3>

              {site.opening_hours && (
                <div className="mb-4">
                  <p className="text-sm font-bold text-slate-700 mb-1">Opening Hours</p>
                  <p className="text-slate-600">{site.opening_hours}</p>
                </div>
              )}

              {site.website && (
                <div className="mb-4">
                  <p className="text-sm font-bold text-slate-700 mb-1">Website</p>
                  <a
                    href={site.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ukraine-blue hover:text-heritage-terracotta transition-colors"
                  >
                    Visit Website →
                  </a>
                </div>
              )}

              {site.latitude && site.longitude && (
                <div>
                  <p className="text-sm font-bold text-slate-700 mb-1">Location</p>
                  <p className="text-slate-600 text-sm">
                    {site.latitude.toFixed(6)}, {site.longitude.toFixed(6)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
```

---

## Testing Checklist

After completing all updates:

- [ ] All 9 images uploaded to `/public/images/`
- [ ] Images are properly compressed (< target size)
- [ ] Tailwind config updated with .jpg references
- [ ] Categories component uses Image components
- [ ] Hero background displays correctly
- [ ] Featured sites show real data from JSON files
- [ ] Individual site pages work (visit `/sites/khotyn-fortress`)
- [ ] Build completes without errors
- [ ] PM2 restart successful
- [ ] Homepage loads in under 2 seconds
- [ ] Images load properly (no 404s)
- [ ] Responsive design works on mobile
- [ ] No console errors in browser

---

## Troubleshooting

### Images not loading
```bash
# Check files exist
ls -lh /var/www/kievonline.net/kievonline.net/public/images/

# Check file permissions
chmod 644 /var/www/kievonline.net/kievonline.net/public/images/*.jpg
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
npm install

# Rebuild
npm run build
```

### PM2 not restarting
```bash
# Force restart
pm2 delete kievonline-next
pm2 start ecosystem.config.js

# Check logs
pm2 logs kievonline-next --lines 50
```

---

**Total Time Estimate**: 2-3 hours (including image download and optimization)

**Priority**: HIGH - Visual improvements significantly enhance user experience

**Next Steps After Completion**:
1. Implement search functionality
2. Add language switching (UA/EN/DE)
3. Create category listing pages
4. Deploy to HTTPS

---

**Questions?** See `HTTPS_DEPLOYMENT_STEPS.md` for production deployment guide.
