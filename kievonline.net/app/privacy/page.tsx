import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Kyiv Online',
  description: 'Privacy Policy for Kyiv Online Ukrainian Heritage Directory.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ukraine-cream">
      <Header />
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ukraine-navy mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-600 mb-6">Last updated: November 30, 2025</p>

            <h2 className="font-display font-bold text-2xl text-ukraine-navy mt-8 mb-4">Information We Collect</h2>
            <p className="text-slate-700 mb-4">
              We collect information that you provide directly to us, including when you subscribe to our newsletter or contact us through our website.
            </p>

            <h2 className="font-display font-bold text-2xl text-ukraine-navy mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-slate-700 mb-4">
              We use the information we collect to provide, maintain, and improve our services, send you technical notices and support messages, and respond to your comments and questions.
            </p>

            <h2 className="font-display font-bold text-2xl text-ukraine-navy mt-8 mb-4">Cookies</h2>
            <p className="text-slate-700 mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="font-display font-bold text-2xl text-ukraine-navy mt-8 mb-4">Contact Us</h2>
            <p className="text-slate-700">
              If you have any questions about this Privacy Policy, please contact us at info@kievonline.net
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
