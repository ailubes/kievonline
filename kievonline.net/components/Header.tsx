'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-ukraine-navy to-ukraine-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-display text-xl font-bold">К</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold text-ukraine-navy">{t.header.title}</h1>
              <p className="text-xs text-slate-500 -mt-1">{t.header.subtitle}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/#featured" className="text-slate-700 hover:text-ukraine-blue transition-colors font-medium text-sm">
              {t.header.nav.directory}
            </Link>
            <Link href="/#categories" className="text-slate-700 hover:text-ukraine-blue transition-colors font-medium text-sm">
              {t.header.nav.categories}
            </Link>
            <Link href="/#map" className="text-slate-700 hover:text-ukraine-blue transition-colors font-medium text-sm">
              {t.header.nav.map}
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-ukraine-blue transition-colors font-medium text-sm">
              {t.header.nav.about}
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="flex gap-3 items-center">
            <div className="text-sm font-mono text-slate-600 border-l border-slate-300 pl-3 flex gap-1">
              <button
                onClick={() => setLocale('uk')}
                className={`${locale === 'uk' ? 'text-ukraine-blue font-bold' : 'text-slate-500 hover:text-ukraine-blue'} transition-colors`}
              >
                UA
              </button>
              <span className="text-slate-400">/</span>
              <button
                onClick={() => setLocale('en')}
                className={`${locale === 'en' ? 'text-ukraine-blue font-bold' : 'text-slate-500 hover:text-ukraine-blue'} transition-colors`}
              >
                EN
              </button>
              <span className="text-slate-400">/</span>
              <button
                onClick={() => setLocale('de')}
                className={`${locale === 'de' ? 'text-ukraine-blue font-bold' : 'text-slate-500 hover:text-ukraine-blue'} transition-colors`}
              >
                DE
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
