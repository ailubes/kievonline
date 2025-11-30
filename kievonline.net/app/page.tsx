import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Regions from '@/components/Regions';
import Footer from '@/components/Footer';
import FeaturedSites from '@/components/FeaturedSites';
import MapSection from '@/components/MapSection';
import NewsletterSection from '@/components/NewsletterSection';
import AdSense from '@/components/AdSense';
import { getFeaturedSites, getSitesCountByRegion } from '@/lib/sites';

export default async function Home() {
  const featuredSites = await getFeaturedSites(6);
  const regionCounts = await getSitesCountByRegion();

  return (
    <main className="min-h-screen bg-ukraine-cream">
      <Header />
      <Hero />
      <Categories />

      <FeaturedSites sites={featuredSites} />

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

      <Regions siteCounts={regionCounts} />

      <MapSection />

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

      <NewsletterSection />

      <Footer />
    </main>
  );
}
