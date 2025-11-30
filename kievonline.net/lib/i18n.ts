export type Locale = 'en' | 'uk' | 'de';

export const locales: Locale[] = ['en', 'uk', 'de'];
export const defaultLocale: Locale = 'en';

export interface Translations {
  // Header
  header: {
    title: string;
    subtitle: string;
    nav: {
      directory: string;
      categories: string;
      map: string;
      about: string;
    };
  };
  // Footer
  footer: {
    description: string;
    explore: string;
    resources: string;
    connect: string;
    allSites: string;
    castles: string;
    monasteries: string;
    museums: string;
    aboutUs: string;
    contact: string;
    privacy: string;
    terms: string;
    facebook: string;
    instagram: string;
    twitter: string;
    newsletter: string;
    copyright: string;
    dedication: string;
  };
  // Home page
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      stats: {
        sites: string;
        unesco: string;
        regions: string;
      };
    };
    categories: {
      title: string;
      subtitle: string;
      description: string;
      viewAll: string;
    };
    featured: {
      title: string;
      subtitle: string;
      description: string;
      learnMore: string;
      viewAll: string;
    };
    map: {
      title: string;
      subtitle: string;
      description: string;
      comingSoon: string;
      launch: string;
    };
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      subscribe: string;
    };
  };
  // Common
  common: {
    sitesCount: string;
    category: string;
    rating: string;
    unesco: string;
    location: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    header: {
      title: 'Kyiv Online',
      subtitle: 'Ukrainian Heritage',
      nav: {
        directory: 'Directory',
        categories: 'Categories',
        map: 'Map',
        about: 'About',
      },
    },
    footer: {
      description: 'Discovering and preserving the rich cultural heritage of Ukraine through a comprehensive digital directory of historical sites, museums, and landmarks.',
      explore: 'Explore',
      resources: 'Resources',
      connect: 'Connect',
      allSites: 'All Sites',
      castles: 'Castles',
      monasteries: 'Monasteries',
      museums: 'Museums',
      aboutUs: 'About Us',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      newsletter: 'Newsletter',
      copyright: '© 2025 Kyiv Online. All rights reserved.',
      dedication: 'Dedicated to preserving Ukrainian cultural heritage.',
    },
    home: {
      hero: {
        title: 'Discover Ukrainian Heritage',
        subtitle: 'Explore 200+ historic sites, museums, castles, and cultural landmarks across Ukraine',
        cta: 'Explore Directory',
        stats: {
          sites: '200+ Heritage Sites',
          unesco: '8 UNESCO Sites',
          regions: '25 Regions',
        },
      },
      categories: {
        title: 'Explore Heritage',
        subtitle: 'Browse by Category',
        description: 'Discover eight different categories of Ukrainian cultural treasures, each with dozens of remarkable sites to explore.',
        viewAll: 'View All Sites',
      },
      featured: {
        title: 'Must-See Heritage',
        subtitle: 'Featured Sites',
        description: "Explore some of Ukraine's most iconic and UNESCO-listed heritage sites.",
        learnMore: 'Learn More',
        viewAll: 'View All Featured Sites',
      },
      map: {
        title: 'Interactive Map',
        subtitle: 'Explore by Location',
        description: 'Discover heritage sites across all 25 regions of Ukraine with our interactive map.',
        comingSoon: 'Interactive map coming soon',
        launch: 'Launch Map',
      },
      newsletter: {
        title: 'Stay Updated',
        description: 'Subscribe to our newsletter for updates about new sites, events, and preservation efforts.',
        placeholder: 'Enter your email',
        subscribe: 'Subscribe',
      },
    },
    common: {
      sitesCount: 'sites',
      category: 'Category',
      rating: 'Rating',
      unesco: 'UNESCO',
      location: 'Location',
    },
  },
  uk: {
    header: {
      title: 'Київ Онлайн',
      subtitle: 'Спадщина України',
      nav: {
        directory: 'Каталог',
        categories: 'Категорії',
        map: 'Карта',
        about: 'Про нас',
      },
    },
    footer: {
      description: 'Відкриваємо та зберігаємо багату культурну спадщину України через всеосяжний цифровий каталог історичних місць, музеїв та пам\'яток.',
      explore: 'Досліджуйте',
      resources: 'Ресурси',
      connect: 'Зв\'язок',
      allSites: 'Усі місця',
      castles: 'Замки',
      monasteries: 'Монастирі',
      museums: 'Музеї',
      aboutUs: 'Про нас',
      contact: 'Контакти',
      privacy: 'Політика конфіденційності',
      terms: 'Умови',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      newsletter: 'Розсилка',
      copyright: '© 2025 Київ Онлайн. Усі права захищені.',
      dedication: 'Присвячено збереженню культурної спадщини України.',
    },
    home: {
      hero: {
        title: 'Відкрийте спадщину України',
        subtitle: 'Досліджуйте 200+ історичних місць, музеїв, замків та культурних пам\'яток по всій Україні',
        cta: 'Переглянути каталог',
        stats: {
          sites: '200+ пам\'яток спадщини',
          unesco: '8 об\'єктів ЮНЕСКО',
          regions: '25 областей',
        },
      },
      categories: {
        title: 'Досліджуйте спадщину',
        subtitle: 'Перегляд за категоріями',
        description: 'Відкрийте вісім різних категорій українських культурних скarbів, кожна з яких містить десятки чудових місць для дослідження.',
        viewAll: 'Переглянути всі місця',
      },
      featured: {
        title: 'Обов\'язково до відвідування',
        subtitle: 'Популярні місця',
        description: 'Досліджуйте найвідоміші та включені до списку ЮНЕСКО пам\'ятки України.',
        learnMore: 'Дізнатися більше',
        viewAll: 'Переглянути всі популярні місця',
      },
      map: {
        title: 'Інтерактивна карта',
        subtitle: 'Дослідження за місцем',
        description: 'Відкривайте пам\'ятки спадщини у всіх 25 областях України за допомогою нашої інтерактивної карти.',
        comingSoon: 'Інтерактивна карта незабаром',
        launch: 'Запустити карту',
      },
      newsletter: {
        title: 'Будьте в курсі',
        description: 'Підпишіться на нашу розсилку для отримання оновлень про нові місця, події та зусилля зі збереження.',
        placeholder: 'Введіть свою електронну пошту',
        subscribe: 'Підписатися',
      },
    },
    common: {
      sitesCount: 'місць',
      category: 'Категорія',
      rating: 'Рейтинг',
      unesco: 'ЮНЕСКО',
      location: 'Місцезнаходження',
    },
  },
  de: {
    header: {
      title: 'Kiew Online',
      subtitle: 'Ukrainisches Erbe',
      nav: {
        directory: 'Verzeichnis',
        categories: 'Kategorien',
        map: 'Karte',
        about: 'Über uns',
      },
    },
    footer: {
      description: 'Entdecken und bewahren Sie das reiche kulturelle Erbe der Ukraine durch ein umfassendes digitales Verzeichnis historischer Stätten, Museen und Sehenswürdigkeiten.',
      explore: 'Erkunden',
      resources: 'Ressourcen',
      connect: 'Verbinden',
      allSites: 'Alle Orte',
      castles: 'Burgen',
      monasteries: 'Klöster',
      museums: 'Museen',
      aboutUs: 'Über uns',
      contact: 'Kontakt',
      privacy: 'Datenschutz',
      terms: 'Bedingungen',
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      newsletter: 'Newsletter',
      copyright: '© 2025 Kiew Online. Alle Rechte vorbehalten.',
      dedication: 'Dem Erhalt des ukrainischen Kulturerbes gewidmet.',
    },
    home: {
      hero: {
        title: 'Entdecken Sie das ukrainische Erbe',
        subtitle: 'Erkunden Sie über 200 historische Stätten, Museen, Burgen und kulturelle Wahrzeichen in der gesamten Ukraine',
        cta: 'Verzeichnis erkunden',
        stats: {
          sites: '200+ Kulturerbestätten',
          unesco: '8 UNESCO-Stätten',
          regions: '25 Regionen',
        },
      },
      categories: {
        title: 'Erbe erkunden',
        subtitle: 'Nach Kategorie durchsuchen',
        description: 'Entdecken Sie acht verschiedene Kategorien ukrainischer Kulturschätze, jede mit Dutzenden bemerkenswerter Stätten zum Erkunden.',
        viewAll: 'Alle Orte anzeigen',
      },
      featured: {
        title: 'Sehenswürdigkeiten',
        subtitle: 'Ausgewählte Orte',
        description: 'Erkunden Sie einige der berühmtesten und UNESCO-gelisteten Kulturerbestätten der Ukraine.',
        learnMore: 'Mehr erfahren',
        viewAll: 'Alle ausgewählten Orte anzeigen',
      },
      map: {
        title: 'Interaktive Karte',
        subtitle: 'Nach Standort erkunden',
        description: 'Entdecken Sie Kulturerbestätten in allen 25 Regionen der Ukraine mit unserer interaktiven Karte.',
        comingSoon: 'Interaktive Karte kommt bald',
        launch: 'Karte starten',
      },
      newsletter: {
        title: 'Bleiben Sie auf dem Laufenden',
        description: 'Abonnieren Sie unseren Newsletter für Updates über neue Orte, Veranstaltungen und Erhaltungsbemühungen.',
        placeholder: 'E-Mail-Adresse eingeben',
        subscribe: 'Abonnieren',
      },
    },
    common: {
      sitesCount: 'Orte',
      category: 'Kategorie',
      rating: 'Bewertung',
      unesco: 'UNESCO',
      location: 'Standort',
    },
  },
};

export function getTranslations(locale: Locale = defaultLocale): Translations {
  return translations[locale] || translations[defaultLocale];
}
