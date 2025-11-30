'use client';

import Image from 'next/image';
import { useLanguage } from './LanguageProvider';
import type { Site } from '@/lib/sites';

interface FeaturedSitesProps {
  sites: Site[];
}

export default function FeaturedSites({ sites }: FeaturedSitesProps) {
  const { t, locale } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-ukraine-gold font-display font-bold text-sm uppercase tracking-widest mb-4">
            {t.home.featured.subtitle}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ukraine-navy mb-4">
            {t.home.featured.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            {t.home.featured.description}
          </p>
        </div>

        {/* Featured Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sites.map((site) => {
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
                      {t.home.featured.learnMore} →
                    </span>
                    {site.historicalData.unescoStatus === 'tentative' && (
                      <span className="text-xs text-ukraine-gold font-semibold">{t.common.unesco}</span>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-ukraine-navy text-white font-bold rounded-lg hover:bg-ukraine-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            {t.home.featured.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
}
