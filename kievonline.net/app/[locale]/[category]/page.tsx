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

const categoryImages: Record<string, string> = {
  castle: '/images/cat-castle.jpg',
  monastery: '/images/cat-religious.jpg',
  museum: '/images/cat-museum.jpg',
  park: '/images/cat-nature.jpg',
  palace: '/images/cat-palaces.jpg',
  city: '/images/cat-landmark.jpg',
  unesco: '/images/cat-unesco.jpg',
  intangible: '/images/cat-folk.jpg',
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

export default async function CategoryPage({ params }: { params: Promise<{ locale: Locale; category: string }> }) {
  const { locale, category } = await params;

  if (!categories.includes(category as any)) {
    notFound();
  }

  const allSites = await getAllSites();
  const categorySites = allSites.filter((site) => site.category === category);

  const categoryName = categoryNames[category]?.[locale] || categoryNames[category]?.en || category;
  const categoryImage = categoryImages[category] || '/images/cat-castle.jpg';

  return (
    <main className="min-h-screen bg-ukraine-cream">
      <Header />

      {/* Hero Section with Category Background */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <Image
          src={categoryImage}
          alt={categoryName}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ukraine-navy/90 via-ukraine-navy/80 to-ukraine-blue/85"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg">
            {categoryName}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-100 max-w-5xl mx-auto drop-shadow-md">
            Explore {categorySites.length} heritage sites in this category
          </p>
        </div>
      </section>

      {/* Sites Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorySites.map((site) => {
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
