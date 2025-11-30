import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Kyiv Online',
  description: 'Terms of Service for Kyiv Online Ukrainian Heritage Directory.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ukraine-cream">
      <Header />
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ukraine-navy mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-600 mb-6">Last updated: November 30, 2025</p>

            <h2 className="font-display font-bold text-2xl text-ukraine-navy mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-slate-700 mb-4">
              By accessing and using Kyiv Online, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="font-display font-bold text-2xl text-ukraine-navy mt-8 mb-4">Use License</h2>
            <p className="text-slate-700 mb-4">
              Permission is granted to temporarily use the materials (information or software) on Kyiv Online for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="font-display font-bold text-2xl text-ukraine-navy mt-8 mb-4">Disclaimer</h2>
            <p className="text-slate-700 mb-4">
              The materials on Kyiv Online are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="font-display font-bold text-2xl text-ukraine-navy mt-8 mb-4">Limitations</h2>
            <p className="text-slate-700 mb-4">
              In no event shall Kyiv Online or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kyiv Online.
            </p>

            <h2 className="font-display font-bold text-2xl text-ukraine-navy mt-8 mb-4">Contact</h2>
            <p className="text-slate-700">
              For any questions regarding these Terms of Service, please contact us at info@kievonline.net
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
