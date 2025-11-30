'use client';

export default function Hero() {
  return (
    <section className="relative bg-gradient-hero overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-ukraine-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-heritage-terracotta/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 animate-slide-up">
          {/* Subtitle */}
          <div className="inline-block">
            <p className="text-ukraine-gold font-display font-bold text-sm uppercase tracking-widest">
              ✦ Explore Ukrainian Heritage ✦
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-tight">
            Discover the
            <br />
            <span className="text-ukraine-gold">Soul of Ukraine</span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-xl sm:text-2xl text-slate-200 max-w-5xl mx-auto font-light">
            A comprehensive digital directory of 200+ historical sites, castles, monasteries, and cultural landmarks across Ukraine. Explore centuries of heritage in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 bg-ukraine-gold text-ukraine-navy font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Explore Directory
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur">
              View Interactive Map
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-ukraine-gold font-display">200+</p>
              <p className="text-sm text-slate-300">Heritage Sites</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-ukraine-gold font-display">8</p>
              <p className="text-sm text-slate-300">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-ukraine-gold font-display">25</p>
              <p className="text-sm text-slate-300">Regions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
