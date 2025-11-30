# JSON-LD Schema Templates

Complete schema.org templates for common page types. Copy and fill in values.

## Organization (Homepage)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "alternateName": "Назва компанії",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "description": "Company description",
  "foundingDate": "2010",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "",
    "addressRegion": "",
    "postalCode": "",
    "addressCountry": "UA"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+380-XX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Ukrainian", "English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+380-XX-XXX-XXXX",
      "contactType": "sales",
      "availableLanguage": ["Ukrainian", "English"]
    }
  ],
  "sameAs": [
    "https://www.facebook.com/company",
    "https://www.linkedin.com/company/company",
    "https://twitter.com/company"
  ]
}
</script>
```

## LocalBusiness (Location Pages)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "image": "https://example.com/image.jpg",
  "url": "https://example.com",
  "telephone": "+380-XX-XXX-XXXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "",
    "addressRegion": "",
    "postalCode": "",
    "addressCountry": "UA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 0.0,
    "longitude": 0.0
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
}
</script>
```

## Product (Equipment/Machinery)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "description": "Product description",
  "image": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ],
  "sku": "SKU-12345",
  "mpn": "MPN-12345",
  "brand": {
    "@type": "Brand",
    "name": "Brand Name"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Manufacturer Name"
  },
  "model": "Model Number",
  "category": "Construction Equipment",
  "material": "",
  "weight": {
    "@type": "QuantitativeValue",
    "value": "5000",
    "unitCode": "KGM"
  },
  "width": {
    "@type": "QuantitativeValue",
    "value": "2.5",
    "unitCode": "MTR"
  },
  "height": {
    "@type": "QuantitativeValue",
    "value": "3.0",
    "unitCode": "MTR"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/product",
    "priceCurrency": "USD",
    "price": "50000",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": {
      "@type": "Organization",
      "name": "Seller Name"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "25"
  }
}
</script>
```

## Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Service Name",
  "description": "Service description",
  "provider": {
    "@type": "Organization",
    "name": "Company Name",
    "url": "https://example.com"
  },
  "serviceType": "Engineering Consulting",
  "areaServed": [
    {
      "@type": "Country",
      "name": "Ukraine"
    },
    {
      "@type": "Country",
      "name": "European Union"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Feasibility Study"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical Design"
        }
      }
    ]
  }
}
</script>
```

## ProfessionalService (Consulting)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Company Name",
  "description": "Professional service description",
  "url": "https://example.com",
  "telephone": "+380-XX-XXX-XXXX",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "UA"
  },
  "areaServed": "Worldwide",
  "knowsAbout": [
    "Aquaculture Engineering",
    "RAS Design",
    "Water Treatment Systems"
  ]
}
</script>
```

## FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question 1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer 1"
      }
    },
    {
      "@type": "Question",
      "name": "Question 2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer 2"
      }
    }
  ]
}
</script>
```

## HowTo (Guides/Tutorials)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to [Task]",
  "description": "Step-by-step guide",
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "step": [
    {
      "@type": "HowToStep",
      "name": "Step 1",
      "text": "Description of step 1",
      "url": "https://example.com/guide#step1"
    },
    {
      "@type": "HowToStep",
      "name": "Step 2",
      "text": "Description of step 2",
      "url": "https://example.com/guide#step2"
    }
  ]
}
</script>
```

## BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Category",
      "item": "https://example.com/category"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Current Page",
      "item": "https://example.com/category/page"
    }
  ]
}
</script>
```

## WebSite (with Search)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Site Name",
  "url": "https://example.com",
  "inLanguage": ["uk", "en"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://example.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
```

## Aquaculture-Specific: Product (Fish/Equipment)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "RAS Filtration System Model X",
  "description": "Complete recirculating aquaculture system filtration unit",
  "category": "Aquaculture Equipment",
  "brand": {
    "@type": "Brand",
    "name": "Brand"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Flow Rate",
      "value": "500",
      "unitCode": "LTR",
      "unitText": "liters per minute"
    },
    {
      "@type": "PropertyValue",
      "name": "Tank Compatibility",
      "value": "10000-50000 liters"
    },
    {
      "@type": "PropertyValue",
      "name": "Species Suitable",
      "value": "Salmon, Trout, Tilapia"
    }
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "price": "25000",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

## Construction Equipment: Product with Specifications

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Hydraulic Excavator HE-250",
  "description": "Heavy-duty hydraulic excavator for construction",
  "category": "Construction Equipment > Excavators",
  "brand": {
    "@type": "Brand",
    "name": "Brand"
  },
  "model": "HE-250",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Operating Weight",
      "value": "25000",
      "unitCode": "KGM"
    },
    {
      "@type": "PropertyValue",
      "name": "Engine Power",
      "value": "150",
      "unitCode": "KWT"
    },
    {
      "@type": "PropertyValue",
      "name": "Bucket Capacity",
      "value": "1.2",
      "unitCode": "MTQ"
    },
    {
      "@type": "PropertyValue",
      "name": "Max Digging Depth",
      "value": "6.5",
      "unitCode": "MTR"
    }
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "150000",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "warranty": "24 months manufacturer warranty"
  }
}
</script>
```
