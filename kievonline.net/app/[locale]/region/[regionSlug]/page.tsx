import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';
import { getSitesByRegion } from '@/lib/sites';
import { regions, getRegionBySlug } from '@/lib/regions';

const locales = ['en', 'uk', 'de'] as const;
type Locale = typeof locales[number];

export async function generateStaticParams() {
  const params: { locale: string; regionSlug: string }[] = [];

  for (const locale of locales) {
    for (const region of regions) {
      params.push({ locale, regionSlug: region.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ regionSlug: string; locale: Locale }> }) {
  const { regionSlug, locale } = await params;
  const region = getRegionBySlug(regionSlug);

  if (!region) {
    return {
      title: 'Region Not Found',
    };
  }

  const regionName = region[`name_${locale}` as keyof typeof region] || region.name_en;

  return {
    title: `${regionName} | Kyiv Online Heritage Sites`,
    description: `Explore heritage sites in ${regionName}, Ukraine. Discover historical monuments, museums, and cultural landmarks.`,
  };
}

export default async function RegionPage({ params }: { params: Promise<{ locale: Locale; regionSlug: string }> }) {
  const { locale, regionSlug } = await params;
  const region = getRegionBySlug(regionSlug);

  if (!region) {
    notFound();
  }

  const regionSites = await getSitesByRegion(region.oblast);
  const regionName = region[`name_${locale}` as keyof typeof region] || region.name_en;

  return (
    <main className="min-h-screen bg-ukraine-cream">
      <Header />

      {/* Hero Section with Region Name */}
      <section className="relative py-32 sm:py-40 overflow-hidden bg-gradient-to-r from-ukraine-navy to-ukraine-blue">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-ukraine-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-heritage-terracotta/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg">
            {regionName}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-100 max-w-5xl mx-auto drop-shadow-md">
            {locale === 'uk' && `Досліджуйте ${regionSites.length} ${regionSites.length === 1 ? 'пам\'ятку' : 'пам\'яток'} спадщини в цьому регіоні`}
            {locale === 'de' && `Erkunden Sie ${regionSites.length} Kulturerbe${regionSites.length === 1 ? 'stätte' : 'stätten'} in dieser Region`}
            {locale === 'en' && `Explore ${regionSites.length} heritage ${regionSites.length === 1 ? 'site' : 'sites'} in this region`}
          </p>
        </div>
      </section>

      {/* AdSense - After Hero */}
      <section className="py-8 bg-gradient-to-b from-ukraine-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSense
            adFormat="auto"
            fullWidthResponsive={true}
            className="min-h-[250px]"
          />
        </div>
      </section>

      {/* Sites Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regionSites.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-slate-600">
                {locale === 'uk' && 'У цьому регіоні поки немає пам\'яток'}
                {locale === 'de' && 'In dieser Region gibt es noch keine Stätten'}
                {locale === 'en' && 'No sites found in this region yet'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regionSites.map((site) => {
                const name = site[`name_${locale}` as keyof typeof site] || site.name_en;
                const tagline = site[`tagline_${locale}` as keyof typeof site] || site.tagline_en;
                const imgAlt = site.images.heroImage[`alt_${locale}` as keyof typeof site.images.heroImage] || site.images.heroImage.alt_en;

                return (
                  <a
                    key={site.slug}
                    href={`/${locale}/${site.category}/${site.slug}`}
                    className="card overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={site.images.heroImage.url}
                        alt={imgAlt as string}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/70 to-transparent"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-ukraine-gold/90 backdrop-blur-sm text-ukraine-navy text-xs font-bold rounded-full">
                          {site.category}
                        </span>
                      </div>

                      {/* Rating Badge */}
                      {site.rating > 0 && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-ukraine-navy text-xs font-bold rounded-full flex items-center gap-1">
                            ⭐ {site.rating}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-ukraine-navy mb-2 group-hover:text-ukraine-blue transition-colors">
                        {name as string}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                        {tagline as string}
                      </p>
                      <p className="text-slate-500 text-xs mb-4">
                        📍 {site.location.city}, {site.region}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-ukraine-blue font-bold text-sm group-hover:text-heritage-terracotta transition-colors">
                          {locale === 'uk' && 'Дізнатися більше →'}
                          {locale === 'de' && 'Mehr erfahren →'}
                          {locale === 'en' && 'Learn More →'}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* AdSense - Before Footer */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSense
            adFormat="auto"
            fullWidthResponsive={true}
            className="min-h-[250px]"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
