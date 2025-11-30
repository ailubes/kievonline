'use client';

import { useLanguage } from './LanguageProvider';
import { regions } from '@/lib/regions';

interface RegionWithCount {
  slug: string;
  name: string;
  count: number;
}

interface RegionsProps {
  siteCounts: Record<string, number>;
}

export default function Regions({ siteCounts }: RegionsProps) {
  const { t, locale } = useLanguage();

  // Map regions with their site counts and translations
  const regionsWithCounts: RegionWithCount[] = regions
    .map(region => {
      const name = region[`name_${locale}` as keyof typeof region] as string || region.name_en;
      const count = siteCounts[region.oblast] || 0;
      return {
        slug: region.slug,
        name,
        count,
      };
    })
    .filter(r => r.count > 0) // Only show regions with sites
    .sort((a, b) => b.count - a.count); // Sort by count descending

  // Get top 8 regions for display
  const topRegions = regionsWithCounts.slice(0, 8);

  return (
    <section id="regions" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-ukraine-gold font-display font-bold text-sm uppercase tracking-widest mb-4">
            {t.regions.subtitle}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ukraine-navy mb-4">
            {t.regions.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            {t.regions.description}
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRegions.map((region) => (
            <a
              key={region.slug}
              href={`/${locale}/region/${region.slug}`}
              className="group relative overflow-hidden rounded-xl bg-white border-2 border-slate-200 hover:border-ukraine-blue transition-all duration-300 hover:shadow-xl hover:-translate-y-2 p-6"
            >
              {/* Region Icon */}
              <div className="text-4xl mb-3">📍</div>

              {/* Region Name */}
              <h3 className="font-display font-bold text-lg text-ukraine-navy mb-2 group-hover:text-ukraine-blue transition-colors">
                {region.name}
              </h3>

              {/* Site Count */}
              <p className="text-slate-600 text-sm mb-4">
                {region.count} {t.common.sitesCount}
              </p>

              {/* Explore Link */}
              <div className="inline-flex items-center gap-2 text-ukraine-blue font-bold text-sm group-hover:text-heritage-terracotta transition-colors">
                <span>{t.regions.exploreRegion}</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ukraine-gold to-ukraine-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        {regionsWithCounts.length > 8 && (
          <div className="text-center mt-12">
            <a
              href={`/${locale}/regions`}
              className="inline-block px-10 py-4 bg-ukraine-navy text-white font-bold rounded-lg hover:bg-ukraine-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {t.regions.viewAll} →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
