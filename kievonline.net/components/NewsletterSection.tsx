'use client';

import { useLanguage } from './LanguageProvider';

export default function NewsletterSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-r from-ukraine-navy to-ukraine-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
          {t.home.newsletter.title}
        </h2>
        <p className="text-xl text-slate-200 mb-8">
          {t.home.newsletter.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder={t.home.newsletter.placeholder}
            className="flex-grow px-6 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-ukraine-gold"
          />
          <button className="px-8 py-3 bg-ukraine-gold text-ukraine-navy font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 whitespace-nowrap">
            {t.home.newsletter.subscribe}
          </button>
        </div>
      </div>
    </section>
  );
}
