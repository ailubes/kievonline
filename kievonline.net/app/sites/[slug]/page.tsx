import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';
import { getSiteBySlug, getAllSites, getRelatedSites } from '@/lib/sites';

export async function generateStaticParams() {
  const sites = await getAllSites();
  return sites.map((site) => ({
    slug: site.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const site = await getSiteBySlug(params.slug);

  if (!site) {
    return {
      title: 'Site Not Found',
    };
  }

  return {
    title: `${site.name_en} | Kyiv Online Heritage Sites`,
    description: site.metaDescription_en,
    keywords: site.keywords.join(', '),
  };
}

export default async function SitePage({ params }: { params: { slug: string } }) {
  const site = await getSiteBySlug(params.slug);

  if (!site) {
    notFound();
  }

  const relatedSites = await getRelatedSites(params.slug, 3);

  return (
    <main className="min-h-screen bg-ukraine-cream">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={site.images.heroImage.url}
          alt={site.images.heroImage.alt_en}
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
                {site.name_en}
              </h1>
              <p className="text-xl md:text-2xl text-ukraine-cream/90 mb-6">
                {site.tagline_en}
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
                  {site.description_en.short}
                </p>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {site.description_en.full}
                </p>
              </div>

              {/* History */}
              <div className="card p-8">
                <h2 className="font-display font-bold text-3xl text-ukraine-navy mb-6">
                  Historical Significance
                </h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line mb-6">
                  {site.description_en.history}
                </p>
                <div className="bg-heritage-cream p-6 rounded-lg border-l-4 border-ukraine-gold">
                  <p className="text-slate-700 italic">
                    {site.description_en.significance}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="card p-8">
                <h2 className="font-display font-bold text-3xl text-ukraine-navy mb-6">
                  Highlights
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {site.features.highlights_en.map((highlight, index) => (
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
                    {site.images.gallery.slice(0, 4).map((image, index) => (
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden group">
                        <Image
                          src={image.url}
                          alt={image.alt_en}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
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
                    {site.visitingInformation.openingTimes.status_en}
                  </p>
                  {site.visitingInformation.openingTimes.seasonal.map((season, index) => (
                    <div key={index} className="text-sm text-slate-700 mb-2">
                      <p className="font-semibold">{season.season_en}</p>
                      <p>{season.days_en}: {season.hours}</p>
                    </div>
                  ))}
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
                    {site.visitingInformation.admissionPrices.notes_en}
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
                      <p className="text-slate-600">{site.location.directions_en.car}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">🚌 Public Transport</p>
                      <p className="text-slate-600">{site.location.directions_en.publicTransport}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">🅿️ Parking</p>
                      <p className="text-slate-600">{site.location.directions_en.parking}</p>
                    </div>
                  </div>
                </div>

                {/* Facilities */}
                {site.features.facilities_en.length > 0 && (
                  <div>
                    <h4 className="font-bold text-ukraine-blue mb-2">Facilities</h4>
                    <div className="flex flex-wrap gap-2">
                      {site.features.facilities_en.map((facility, index) => (
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
              {relatedSites.map((relatedSite) => (
                <a
                  key={relatedSite.slug}
                  href={`/sites/${relatedSite.slug}`}
                  className="card overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedSite.images.heroImage.url}
                      alt={relatedSite.images.heroImage.alt_en}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/70 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-ukraine-navy mb-2 group-hover:text-ukraine-blue transition-colors">
                      {relatedSite.name_en}
                    </h3>
                    <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                      {relatedSite.tagline_en}
                    </p>
                    <span className="text-ukraine-blue font-bold text-sm group-hover:text-heritage-terracotta transition-colors">
                      Learn More →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
