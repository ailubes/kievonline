import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllSites } from '@/lib/sites';

const locales = ['en', 'uk', 'de'] as const;
type Locale = typeof locales[number];

const categories = ['castle', 'monastery', 'museum', 'park', 'palace', 'city', 'unesco', 'intangible'] as const;
const categoryNames: Record<string, { en: string; uk: string; de: string }> = {
  castle: { en: 'Castles & Fortresses', uk: 'Замки та фортеці', de: 'Schlösser & Festungen' },
  monastery: { en: 'Monasteries & Churches', uk: 'Монастирі та церкви', de: 'Klöster & Kirchen' },
  museum: { en: 'Museums & Galleries', uk: 'Музеї та галереї', de: 'Museen & Galerien' },
  park: { en: 'Natural Reserves', uk: 'Природні заповідники', de: 'Naturreservate' },
  palace: { en: 'Palaces & Estates', uk: 'Палаци та маєтки', de: 'Paläste & Güter' },
  city: { en: 'Historic Cities', uk: 'Історичні міста', de: 'Historische Städte' },
  unesco: { en: 'UNESCO World Heritage', uk: 'Всесвітня спадщина ЮНЕСКО', de: 'UNESCO-Welterbe' },
  intangible: { en: 'Intangible Heritage', uk: 'Нематеріальна спадщина', de: 'Immaterielles Erbe' },
};

export async function generateStaticParams() {
  const params: { locale: string; category: string }[] = [];

  for (const locale of locales) {
    for (const category of categories) {
      params.push({ locale, category });
    }
  }

  return params;
}

export default async function CategoryPage({ params }: { params: { locale: Locale; category: string } }) {
  if (!categories.includes(params.category as any)) {
    notFound();
  }

  const allSites = await getAllSites();
  const categorySites = allSites.filter((site) => site.category === params.category);

  const categoryName = categoryNames[params.category]?.[params.locale] || categoryNames[params.category]?.en || params.category;

  return (
    <main className="min-h-screen bg-ukraine-cream">
      <Header />

      {/* Hero Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-r from-ukraine-navy to-ukraine-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-6">
            {categoryName}
          </h1>
          <p className="text-xl text-slate-200 max-w-4xl mx-auto">
            Explore {categorySites.length} heritage sites in this category
          </p>
        </div>
      </section>

      {/* Sites Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorySites.map((site) => {
              const name = site[`name_${params.locale}` as keyof typeof site] || site.name_en;
              const tagline = site[`tagline_${params.locale}` as keyof typeof site] || site.tagline_en;
              const imgAlt = site.images.heroImage[`alt_${params.locale}` as keyof typeof site.images.heroImage] || site.images.heroImage.alt_en;

              return (
                <a
                  key={site.slug}
                  href={`/${params.locale}/${site.category}/${site.slug}`}
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
                        Learn More →
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
