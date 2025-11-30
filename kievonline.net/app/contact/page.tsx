import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us | Kyiv Online',
  description: 'Get in touch with Kyiv Online. We welcome your feedback, suggestions, and contributions to our Ukrainian heritage directory.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ukraine-cream">
      <Header />

      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-ukraine-navy mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="card p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-ukraine-navy mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-ukraine-blue focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-ukraine-navy mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-ukraine-blue focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-ukraine-navy mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-ukraine-blue focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-ukraine-navy mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-ukraine-blue focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-ukraine-navy text-white font-bold rounded-lg hover:bg-ukraine-blue transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-ukraine-navy mb-2">Email</h3>
              <p className="text-slate-600 text-sm">info@kievonline.net</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-bold text-ukraine-navy mb-2">Website</h3>
              <p className="text-slate-600 text-sm">www.kievonline.net</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🇺🇦</div>
              <h3 className="font-bold text-ukraine-navy mb-2">Location</h3>
              <p className="text-slate-600 text-sm">Kyiv, Ukraine</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
