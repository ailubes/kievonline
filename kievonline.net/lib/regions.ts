export interface Region {
  slug: string;
  name_en: string;
  name_uk: string;
  name_de: string;
  oblast: string; // Matches the oblast field in JSON
}

export const regions: Region[] = [
  {
    slug: 'kyiv-city',
    name_en: 'Kyiv City',
    name_uk: 'м. Київ',
    name_de: 'Kiew Stadt',
    oblast: 'Kyiv City',
  },
  {
    slug: 'lviv-oblast',
    name_en: 'Lviv Oblast',
    name_uk: 'Львівська область',
    name_de: 'Oblast Lwiw',
    oblast: 'Lviv Oblast',
  },
  {
    slug: 'ternopil-oblast',
    name_en: 'Ternopil Oblast',
    name_uk: 'Тернопільська область',
    name_de: 'Oblast Ternopil',
    oblast: 'Ternopil Oblast',
  },
  {
    slug: 'zakarpattia-oblast',
    name_en: 'Zakarpattia Oblast',
    name_uk: 'Закарпатська область',
    name_de: 'Oblast Transkarpatien',
    oblast: 'Zakarpattia Oblast',
  },
  {
    slug: 'kyiv-oblast',
    name_en: 'Kyiv Oblast',
    name_uk: 'Київська область',
    name_de: 'Oblast Kiew',
    oblast: 'Kyiv Oblast',
  },
  {
    slug: 'ivano-frankivsk-oblast',
    name_en: 'Ivano-Frankivsk Oblast',
    name_uk: 'Івано-Франківська область',
    name_de: 'Oblast Iwano-Frankiwsk',
    oblast: 'Ivano-Frankivsk Oblast',
  },
  {
    slug: 'volyn-oblast',
    name_en: 'Volyn Oblast',
    name_uk: 'Волинська область',
    name_de: 'Oblast Wolyn',
    oblast: 'Volyn Oblast',
  },
  {
    slug: 'odesa-oblast',
    name_en: 'Odesa Oblast',
    name_uk: 'Одеська область',
    name_de: 'Oblast Odessa',
    oblast: 'Odesa Oblast',
  },
  {
    slug: 'chernivtsi-oblast',
    name_en: 'Chernivtsi Oblast',
    name_uk: 'Чернівецька область',
    name_de: 'Oblast Czernowitz',
    oblast: 'Chernivtsi Oblast',
  },
  {
    slug: 'khmelnytskyi-oblast',
    name_en: 'Khmelnytskyi Oblast',
    name_uk: 'Хмельницька область',
    name_de: 'Oblast Chmelnyzkyj',
    oblast: 'Khmelnytskyi Oblast',
  },
  {
    slug: 'rivne-oblast',
    name_en: 'Rivne Oblast',
    name_uk: 'Рівненська область',
    name_de: 'Oblast Riwne',
    oblast: 'Rivne Oblast',
  },
  {
    slug: 'kherson-oblast',
    name_en: 'Kherson Oblast',
    name_uk: 'Херсонська область',
    name_de: 'Oblast Cherson',
    oblast: 'Kherson Oblast',
  },
  {
    slug: 'donetsk-oblast',
    name_en: 'Donetsk Oblast',
    name_uk: 'Донецька область',
    name_de: 'Oblast Donezk',
    oblast: 'Donetsk Oblast',
  },
  {
    slug: 'dnipropetrovsk-oblast',
    name_en: 'Dnipropetrovsk Oblast',
    name_uk: 'Дніпропетровська область',
    name_de: 'Oblast Dnipropetrowsk',
    oblast: 'Dnipropetrovsk Oblast',
  },
  {
    slug: 'chernihiv-oblast',
    name_en: 'Chernihiv Oblast',
    name_uk: 'Чернігівська область',
    name_de: 'Oblast Tschernihiw',
    oblast: 'Chernihiv Oblast',
  },
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find(r => r.slug === slug);
}

export function getRegionByOblast(oblast: string): Region | undefined {
  return regions.find(r => r.oblast === oblast || oblast.includes(r.oblast));
}

export function getAllRegions(): Region[] {
  return regions.sort((a, b) => a.name_en.localeCompare(b.name_en));
}
