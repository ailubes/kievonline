import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';
import { getSiteBySlug, getAllSites, getRelatedSites } from '@/lib/sites';

// Supported locales
const locales = ['en', 'uk', 'de'] as const;
type Locale = typeof locales[number];

// Category mapping
const categories = ['castle', 'monastery', 'museum', 'park', 'palace', 'city', 'unesco', 'intangible'] as const;

export async function generateStaticParams() {
  const sites = await getAllSites();
  const params: { locale: string; category: string; slug: string }[] = [];

  for (const site of sites) {
    for (const locale of locales) {
      params.push({
        locale,
        category: site.category,
        slug: site.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: { slug: string; locale: Locale } }) {
  const site = await getSiteBySlug(params.slug);

  if (!site) {
    return {
      title: 'Site Not Found',
    };
  }

  const titleField = `name_${params.locale}` as keyof typeof site;
  const descField = `metaDescription_${params.locale}` as keyof typeof site;

  return {
    title: `${site[titleField] || site.name_en} | Kyiv Online Heritage Sites`,
    description: site[descField] || site.metaDescription_en,
    keywords: site.keywords.join(', '),
  };
}

export default async function SitePage({ params }: { params: { slug: string; locale: Locale; category: string } }) {
  const site = await getSiteBySlug(params.slug);

  if (!site) {
    notFound();
  }

  // Verify category matches
  if (site.category !== params.category) {
    notFound();
  }

  const relatedSites = await getRelatedSites(params.slug, 3);

  // Get localized content
  const locale = params.locale;
  const name = site[`name_${locale}` as keyof typeof site] || site.name_en;
  const tagline = site[`tagline_${locale}` as keyof typeof site] || site.tagline_en;
  const description = site[`description_${locale}` as keyof typeof site] as any || site.description_en;
  const heroAlt = site.images.heroImage[`alt_${locale}` as keyof typeof site.images.heroImage] || site.images.heroImage.alt_en;
  const highlights = site.features[`highlights_${locale}` as keyof typeof site.features] || site.features.highlights_en;
  const facilities = site.features[`facilities_${locale}` as keyof typeof site.features] || site.features.facilities_en;

  return (
    <main className="min-h-screen bg-ukraine-cream">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={site.images.heroImage.url}
          alt={heroAlt as string}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/90 via-ukraine-navy/50 to-ukraine-navy/30"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 w-full">
            <div className="max-w-4xl">
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-4 py-2 bg-ukraine-gold text-ukraine-navy text-sm font-bold rounded-full">
                  {site.category}
                </span>
                {site.historicalData.unescoStatus && (
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-ukraine-navy text-sm font-bold rounded-full">
                    {site.historicalData.unescoStatus === 'tentative' ? 'UNESCO Tentative' : 'UNESCO World Heritage'}
                  </span>
                )}
                {site.rating > 0 && (
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-ukraine-navy text-sm font-bold rounded-full">
                    ⭐ {site.rating} ({site.reviewsCount} reviews)
                  </span>
                )}
              </div>

              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                {name as string}
              </h1>
              <p className="text-xl md:text-2xl text-ukraine-cream/90 mb-6">
                {tagline as string}
              </p>
              <div className="flex items-center gap-4 text-white/80">
                <span>📍 {site.location.city}, {site.region}</span>
                <span>•</span>
                <span>🏛️ {site.historicalData.yearBuilt}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="card p-8">
                <h2 className="font-display font-bold text-3xl text-ukraine-navy mb-6">
                  About This Site
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  {description.short}
                </p>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {description.full}
                </p>
              </div>

              {/* History */}
              <div className="card p-8">
                <h2 className="font-display font-bold text-3xl text-ukraine-navy mb-6">
                  Historical Significance
                </h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line mb-6">
                  {description.history}
                </p>
                <div className="bg-heritage-cream p-6 rounded-lg border-l-4 border-ukraine-gold">
                  <p className="text-slate-700 italic">
                    {description.significance}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="card p-8">
                <h2 className="font-display font-bold text-3xl text-ukraine-navy mb-6">
                  Highlights
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(highlights as string[]).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-ukraine-gold text-xl mt-1">✓</span>
                      <span className="text-slate-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Photo Gallery */}
              {site.images.gallery.length > 0 && (
                <div className="card p-8">
                  <h2 className="font-display font-bold text-3xl text-ukraine-navy mb-6">
                    Photo Gallery
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {site.images.gallery.slice(0, 4).map((image, index) => {
                      const imgAlt = image[`alt_${locale}` as keyof typeof image] || image.alt_en;
                      return (
                        <div key={index} className="relative aspect-video rounded-lg overflow-hidden group">
                          <Image
                            src={image.url}
                            alt={imgAlt as string}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Visiting Information */}
              <div className="card p-6 sticky top-6">
                <h3 className="font-display font-bold text-2xl text-ukraine-navy mb-6">
                  Plan Your Visit
                </h3>

                {/* Opening Times */}
                <div className="mb-6">
                  <h4 className="font-bold text-ukraine-blue mb-2">Opening Hours</h4>
                  <p className="text-sm text-slate-600 mb-2">
                    {(site.visitingInformation.openingTimes as any)[`status_${locale}`] || site.visitingInformation.openingTimes.status_en}
                  </p>
                  {site.visitingInformation.openingTimes.seasonal.map((season, index) => {
                    const seasonName = (season as any)[`season_${locale}`] || season.season_en;
                    const days = (season as any)[`days_${locale}`] || season.days_en;
                    return (
                      <div key={index} className="text-sm text-slate-700 mb-2">
                        <p className="font-semibold">{seasonName}</p>
                        <p>{days}: {season.hours}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Admission Prices */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <h4 className="font-bold text-ukraine-blue mb-2">Admission</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Adult</span>
                      <span className="font-semibold">{site.visitingInformation.admissionPrices.adult} {site.visitingInformation.admissionPrices.currency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Student</span>
                      <span className="font-semibold">{site.visitingInformation.admissionPrices.student} {site.visitingInformation.admissionPrices.currency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Child</span>
                      <span className="font-semibold">{site.visitingInformation.admissionPrices.child} {site.visitingInformation.admissionPrices.currency}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    {(site.visitingInformation.admissionPrices as any)[`notes_${locale}`] || site.visitingInformation.admissionPrices.notes_en}
                  </p>
                </div>

                {/* Contact */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <h4 className="font-bold text-ukraine-blue mb-2">Contact</h4>
                  <div className="space-y-2 text-sm">
                    {site.contact.phone && (
                      <p>
                        <a href={`tel:${site.contact.phone}`} className="text-ukraine-blue hover:text-heritage-terracotta">
                          📞 {site.contact.phone}
                        </a>
                      </p>
                    )}
                    {site.contact.website && (
                      <p>
                        <a href={site.contact.website} target="_blank" rel="noopener noreferrer" className="text-ukraine-blue hover:text-heritage-terracotta break-all">
                          🌐 Website
                        </a>
                      </p>
                    )}
                  </div>
                </div>

                {/* Directions */}
                <div className="mb-6">
                  <h4 className="font-bold text-ukraine-blue mb-2">Getting There</h4>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div>
                      <p className="font-semibold mb-1">🚗 By Car</p>
                      <p className="text-slate-600">{(site.location as any)[`directions_${locale}`]?.car || site.location.directions_en.car}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">🚌 Public Transport</p>
                      <p className="text-slate-600">{(site.location as any)[`directions_${locale}`]?.publicTransport || site.location.directions_en.publicTransport}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">🅿️ Parking</p>
                      <p className="text-slate-600">{(site.location as any)[`directions_${locale}`]?.parking || site.location.directions_en.parking}</p>
                    </div>
                  </div>
                </div>

                {/* Facilities */}
                {(facilities as string[]).length > 0 && (
                  <div>
                    <h4 className="font-bold text-ukraine-blue mb-2">Facilities</h4>
                    <div className="flex flex-wrap gap-2">
                      {(facilities as string[]).map((facility, index) => (
                        <span key={index} className="px-3 py-1 bg-heritage-cream text-slate-700 text-xs rounded-full">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* AdSense - Sidebar */}
              <div className="card p-4">
                <AdSense
                  adFormat="auto"
                  fullWidthResponsive={true}
                  className="min-h-[250px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense - Before Related Sites */}
      <section className="py-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSense
            adFormat="auto"
            fullWidthResponsive={true}
            className="min-h-[250px]"
          />
        </div>
      </section>

      {/* Related Sites */}
      {relatedSites.length > 0 && (
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ukraine-navy mb-8">
              Similar Heritage Sites
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedSites.map((relatedSite) => {
                const relatedName = relatedSite[`name_${locale}` as keyof typeof relatedSite] || relatedSite.name_en;
                const relatedTagline = relatedSite[`tagline_${locale}` as keyof typeof relatedSite] || relatedSite.tagline_en;
                const relatedImgAlt = relatedSite.images.heroImage[`alt_${locale}` as keyof typeof relatedSite.images.heroImage] || relatedSite.images.heroImage.alt_en;

                return (
                  <a
                    key={relatedSite.slug}
                    href={`/${locale}/${relatedSite.category}/${relatedSite.slug}`}
                    className="card overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={relatedSite.images.heroImage.url}
                        alt={relatedImgAlt as string}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/70 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-ukraine-navy mb-2 group-hover:text-ukraine-blue transition-colors">
                        {relatedName as string}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                        {relatedTagline as string}
                      </p>
                      <span className="text-ukraine-blue font-bold text-sm group-hover:text-heritage-terracotta transition-colors">
                        Learn More →
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
