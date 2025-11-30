import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us | Kyiv Online Ukrainian Heritage Sites',
  description: 'Learn about Kyiv Online\'s mission to preserve and promote Ukrainian cultural heritage through our comprehensive directory of historical sites, museums, and landmarks.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ukraine-cream">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-ukraine-navy to-ukraine-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            About Kyiv Online
          </h1>
          <p className="text-xl text-ukraine-cream/90 leading-relaxed">
            Preserving and promoting Ukraine's rich cultural heritage through digital innovation
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ukraine-navy mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Kyiv Online is dedicated to discovering, documenting, and preserving the rich cultural heritage of Ukraine through a comprehensive digital directory. We believe that Ukraine's historical sites, museums, castles, monasteries, and cultural landmarks are treasures that deserve to be accessible to everyone, everywhere.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our platform serves as a bridge between Ukraine's glorious past and its vibrant future, making it easier for locals and visitors alike to explore and appreciate the nation's incredible heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card p-6">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="font-display font-bold text-xl text-ukraine-navy mb-3">
                200+ Heritage Sites
              </h3>
              <p className="text-slate-600">
                Comprehensive coverage of castles, monasteries, museums, and historical landmarks across all 25 regions of Ukraine.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-display font-bold text-xl text-ukraine-navy mb-3">
                8 UNESCO Sites
              </h3>
              <p className="text-slate-600">
                Detailed information about Ukraine's World Heritage Sites and tentative list candidates.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-4xl mb-4">🇺🇦</div>
              <h3 className="font-display font-bold text-xl text-ukraine-navy mb-3">
                Multilingual Access
              </h3>
              <p className="text-slate-600">
                Content available in Ukrainian, English, and German to reach a global audience.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ukraine-navy mb-6">
              What We Offer
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-ukraine-gold text-2xl mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-ukraine-navy mb-1">Comprehensive Directory</h4>
                  <p className="text-slate-600">Detailed information about each heritage site including history, visiting hours, admission prices, and directions.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ukraine-gold text-2xl mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-ukraine-navy mb-1">Rich Visual Content</h4>
                  <p className="text-slate-600">High-quality photographs and virtual tours to help you explore Ukraine's heritage from anywhere in the world.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ukraine-gold text-2xl mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-ukraine-navy mb-1">Interactive Maps</h4>
                  <p className="text-slate-600">Explore heritage sites geographically across all regions of Ukraine with our interactive mapping system.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ukraine-gold text-2xl mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-ukraine-navy mb-1">Historical Context</h4>
                  <p className="text-slate-600">Deep dive into the architectural significance, cultural importance, and fascinating stories behind each landmark.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-heritage-cream p-8 rounded-xl border-l-4 border-ukraine-gold">
            <h2 className="font-display font-bold text-2xl text-ukraine-navy mb-4">
              Join Us in Preserving Heritage
            </h2>
            <p className="text-slate-700 mb-4">
              We're constantly expanding our directory and improving our platform. If you have suggestions, corrections, or would like to contribute information about a heritage site, we'd love to hear from you.
            </p>
            <a href="/contact" className="inline-block px-6 py-3 bg-ukraine-navy text-white font-bold rounded-lg hover:bg-ukraine-blue transition-all duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
