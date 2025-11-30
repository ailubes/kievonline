'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ukraine-navy text-white">
      {/* Decorative gold divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-ukraine-gold to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">{t.header.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display font-bold text-ukraine-gold mb-4 text-sm uppercase tracking-wider">
              {t.footer.explore}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#featured" className="text-slate-300 hover:text-ukraine-gold transition-colors text-sm">
                  {t.footer.allSites}
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="text-slate-300 hover:text-ukraine-gold transition-colors text-sm">
                  {t.footer.castles}
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="text-slate-300 hover:text-ukraine-gold transition-colors text-sm">
                  {t.footer.monasteries}
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="text-slate-300 hover:text-ukraine-gold transition-colors text-sm">
                  {t.footer.museums}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-ukraine-gold mb-4 text-sm uppercase tracking-wider">
              {t.footer.resources}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-ukraine-gold transition-colors text-sm">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-ukraine-gold transition-colors text-sm">
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-ukraine-gold transition-colors text-sm">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-ukraine-gold transition-colors text-sm">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold text-ukraine-gold mb-4 text-sm uppercase tracking-wider">
              {t.footer.connect}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-ukraine-gold transition-colors text-sm">
                  {t.footer.facebook}
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-ukraine-gold transition-colors text-sm">
                  {t.footer.instagram}
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-ukraine-gold transition-colors text-sm">
                  {t.footer.twitter}
                </a>
              </li>
              <li>
                <Link href="/#newsletter" className="text-slate-300 hover:text-ukraine-gold transition-colors text-sm">
                  {t.footer.newsletter}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400">
            <p>{t.footer.copyright}</p>
            <p className="md:text-right">{t.footer.dedication}</p>
          </div>
        </div>
      </div>

      {/* Decorative pattern footer */}
      <div className="bg-ukraine-navy/50 h-1 bg-gradient-to-r from-ukraine-gold via-heritage-terracotta to-ukraine-gold"></div>
    </footer>
  );
}
