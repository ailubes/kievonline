'use client';

import Image from 'next/image';
import { useLanguage } from './LanguageProvider';

const categories = [
  {
    id: 'castle',
    name: 'Castles & Fortresses',
    description: 'Medieval fortifications and defensive architecture',
    count: '15',
    image: '/images/cat-castle.jpg',
    color: 'from-ukraine-blue to-ukraine-navy',
  },
  {
    id: 'monastery',
    name: 'Monasteries & Churches',
    description: 'Sacred sites and religious architecture',
    count: '12',
    image: '/images/cat-religious.jpg',
    color: 'from-heritage-terracotta to-heritage-bronze',
  },
  {
    id: 'museum',
    name: 'Museums & Galleries',
    description: 'Art collections and historical exhibitions',
    count: '7',
    image: '/images/cat-museum.jpg',
    color: 'from-ukraine-gold to-heritage-stone',
  },
  {
    id: 'park',
    name: 'Natural Reserves',
    description: 'Parks, biospheres, and nature preserves',
    count: '7',
    image: '/images/cat-nature.jpg',
    color: 'from-green-700 to-green-900',
  },
  {
    id: 'palace',
    name: 'Palaces & Estates',
    description: 'Grand residences and aristocratic estates',
    count: '1',
    image: '/images/cat-palaces.jpg',
    color: 'from-amber-600 to-orange-700',
  },
  {
    id: 'city',
    name: 'Historic Cities',
    description: 'Urban heritage and historic districts',
    count: '1',
    image: '/images/cat-landmark.jpg',
    color: 'from-slate-600 to-slate-800',
  },
  {
    id: 'unesco',
    name: 'UNESCO World Heritage',
    description: 'Sites of outstanding universal value',
    count: '4',
    image: '/images/cat-unesco.jpg',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 'intangible',
    name: 'Intangible Heritage',
    description: 'Traditional practices and cultural expressions',
    count: '1',
    image: '/images/cat-folk.jpg',
    color: 'from-purple-600 to-purple-800',
  },
];

export default function Categories() {
  const { t } = useLanguage();

  return (
    <section id="categories" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-ukraine-gold font-display font-bold text-sm uppercase tracking-widest mb-4">
            {t.home.categories.subtitle}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-ukraine-navy mb-4">
            {t.home.categories.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            {t.home.categories.description}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/en/${category.id}`}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Background */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-ukraine-navy/90 via-ukraine-navy/50 to-ukraine-navy/30"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-ukraine-gold transition-colors">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-ukraine-cream/90 mb-4">
                  {category.description}
                </p>

                {/* Count Badge */}
                <div className="inline-flex items-center gap-2 text-ukraine-gold font-bold text-sm">
                  <span>{category.count} sites</span>
                  <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ukraine-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"></div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-ukraine-navy text-white font-bold rounded-lg hover:bg-ukraine-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            {t.home.categories.viewAll} →
          </button>
        </div>
      </div>
    </section>
  );
}
