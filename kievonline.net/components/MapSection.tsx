'use client';

import { useLanguage } from './LanguageProvider';

export default function MapSection() {
  const { t } = useLanguage();

  return (
    <section id="map" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-ukraine-gold font-display font-bold text-sm uppercase tracking-widest mb-4">
            {t.home.map.subtitle}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ukraine-navy mb-4">
            {t.home.map.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            {t.home.map.description}
          </p>
        </div>

        <div className="w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border-2 border-slate-300 flex items-center justify-center">
          <div className="text-center">
            <p className="text-5xl mb-4">🗺️</p>
            <p className="text-slate-600 font-medium">{t.home.map.comingSoon}</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-ukraine-navy text-white font-bold rounded-lg hover:bg-ukraine-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            {t.home.map.launch} →
          </button>
        </div>
      </div>
    </section>
  );
}
