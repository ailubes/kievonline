import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';
import Image from 'next/image';
import { getFeaturedSites } from '@/lib/sites';

export default async function Home() {
  const featuredSites = await getFeaturedSites(6);

  return (
    <main className="min-h-screen bg-ukraine-cream">
      <Header />
      <Hero />
      <Categories />

      {/* Featured Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-ukraine-gold font-display font-bold text-sm uppercase tracking-widest mb-4">
              Featured Sites
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ukraine-navy mb-4">
              Must-See Heritage
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Explore some of Ukraine's most iconic and UNESCO-listed heritage sites.
            </p>
          </div>

          {/* Featured Sites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSites.map((site) => (
              <a
                key={site.slug}
                href={`/en/${site.category}/${site.slug}`}
                className="card overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={site.images.heroImage.url}
                    alt={site.images.heroImage.alt_en}
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
                    {site.name_en}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                    {site.tagline_en}
                  </p>
                  <p className="text-slate-500 text-xs mb-4">
                    📍 {site.location.city}, {site.region}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-ukraine-blue font-bold text-sm group-hover:text-heritage-terracotta transition-colors">
                      Learn More →
                    </span>
                    {site.historicalData.unescoStatus === 'tentative' && (
                      <span className="text-xs text-ukraine-gold font-semibold">UNESCO</span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-10 py-4 bg-ukraine-navy text-white font-bold rounded-lg hover:bg-ukraine-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              View All Featured Sites
            </button>
          </div>
        </div>
      </section>

      {/* AdSense - After Featured Sites */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSense
            adFormat="auto"
            fullWidthResponsive={true}
            className="min-h-[250px]"
          />
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-ukraine-gold font-display font-bold text-sm uppercase tracking-widest mb-4">
              Explore by Location
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ukraine-navy mb-4">
              Interactive Map
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Discover heritage sites across all 25 regions of Ukraine with our interactive map.
            </p>
          </div>

          <div className="w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border-2 border-slate-300 flex items-center justify-center">
            <div className="text-center">
              <p className="text-5xl mb-4">🗺️</p>
              <p className="text-slate-600 font-medium">Interactive map coming soon</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-10 py-4 bg-ukraine-navy text-white font-bold rounded-lg hover:bg-ukraine-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Launch Map →
            </button>
          </div>
        </div>
      </section>

      {/* AdSense - Before Newsletter */}
      <section className="py-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSense
            adFormat="auto"
            fullWidthResponsive={true}
            className="min-h-[250px]"
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-r from-ukraine-navy to-ukraine-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Subscribe to our newsletter for updates about new sites, events, and preservation efforts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-ukraine-gold"
            />
            <button className="px-8 py-3 bg-ukraine-gold text-ukraine-navy font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
