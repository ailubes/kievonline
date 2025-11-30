# 🖼️ Image Replacement Guide for Kyiv Online

## Current Status

Your site currently has **professional SVG placeholder images** that look great and are optimized. However, you can enhance the design further by replacing these with real photographs.

---

## Images Currently Used

All images are stored in: `/var/www/kievonline.net/kievonline.net/public/images/`

| Image File | Current | Purpose | Suggested Replacement |
|------------|---------|---------|----------------------|
| `hero-bg.svg` | SVG Placeholder | Hero section background | 1280x720px photograph |
| `cat-castle.svg` | SVG Placeholder | Castles category card | 400x300px photograph |
| `cat-religious.svg` | SVG Placeholder | Religious sites card | 400x300px photograph |
| (other categories) | Gradients | Category cards | 400x300px photographs |

---

## Where to Find Free, Legal Images

### Best Source: Wikimedia Commons
- **URL**: https://commons.wikimedia.org/
- **License**: Creative Commons (free to use with attribution)
- **Quality**: High resolution, real historical sites
- **Attribution format**: Add in image alt text

### Other Free Sources
- **Unsplash**: https://unsplash.com/ (high-quality, no attribution needed)
- **Pexels**: https://pexels.com/ (high-quality, no attribution needed)
- **Pixabay**: https://pixabay.com/ (diverse content, no attribution needed)

---

## Recommended Images by Category

### 1. Hero Background
**Search terms on Wikimedia Commons:**
- "Kyiv Pechersk Lavra"
- "Motherland Monument"
- "Saint Sophia Cathedral Kyiv"
- "Carpathian Mountains landscape"

**Ideal specifications:**
- Dimension: 1280x720px or larger
- Format: JPG (compressed) for web
- Aspect ratio: 16:9 (landscape)
- File size: 100-300 KB

**File to replace**: `hero-bg.svg`

---

### 2. Castle & Fortresses Category
**Search terms:**
- "Kamianets-Podilskyi Castle"
- "Khotyn Fortress"
- "Palanok Castle Mukachevo"
- "Lutsk Castle"

**Ideal specifications:**
- Dimension: 400x300px or larger
- Format: JPG
- Aspect ratio: 4:3
- File size: 30-80 KB

**File to replace**: `cat-castle.svg`

---

### 3. Religious Sites Category
**Search terms:**
- "St. Michael's Monastery Kyiv"
- "St. Andrew's Church Kyiv"
- "Pochaiv Lavra"
- "Wooden Churches Carpathians"

**File to replace**: `cat-religious.svg`

---

### 4. Museums & Galleries
**Search terms:**
- "Lviv National Opera House"
- "National Art Museum Ukraine"
- "Chernivtsi University"
- "Pysanka Museum"

**File to replace**: Use gradient (no SVG)

---

### 5. Natural Reserves & Parks
**Search terms:**
- "Lake Synevyr"
- "Askania-Nova"
- "Hoverla Mountain"
- "Dniester Canyon"

**File to replace**: Use gradient (no SVG)

---

### 6. Palaces & Estates
**Search terms:**
- "Olesko Castle"
- "Pidhirtsi Castle"
- "Rozhanivsky Palace"
- "Kozlovskyi Palace"

---

### 7. Historic Cities
**Search terms:**
- "Lviv City Center"
- "Kyiv Maidan Nezalezhnosti"
- "Kamianets-Podilskyi Old Town"
- "Chernivtsi City Center"

---

### 8. UNESCO World Heritage Sites
**Search terms:**
- "St. Sophia Cathedral Kyiv"
- "St. Michael's Golden-Domed Monastery"
- "Lviv Historic Center"
- "Wooden Tserkvas Carpathia"

---

### 9. Intangible Heritage
**Search terms:**
- "Ukrainian embroidery"
- "Traditional pysanka painting"
- "Ukrainian folk crafts"
- "Traditional Ukrainian costume"

---

## How to Replace Images

### Step 1: Download the Image
1. Go to Wikimedia Commons or another free source
2. Search for the subject
3. Download the full-resolution version
4. Save to your computer

### Step 2: Optimize the Image
Use an online tool like **ImageOptim.com** or **Tinypng.com**:
- Reduce file size to 30-150 KB
- Keep dimensions: 400x300px (category cards) or 1280x720px (hero)
- Save as JPG format

### Step 3: Upload to Server

```bash
# Copy image to server
scp hero-bg.jpg user@167.235.10.212:/var/www/kievonline.net/kievonline.net/public/images/

# Or use SFTP client to upload to: /public/images/
```

### Step 4: Update the Filename

If replacing `cat-castle.svg` with `cat-castle.jpg`:

**Before (in tailwind.config.ts):**
```typescript
'img-castle': 'url(/images/cat-castle.svg)',
```

**After:**
```typescript
'img-castle': 'url(/images/cat-castle.jpg)',
```

### Step 5: Rebuild & Restart

```bash
cd /var/www/kievonline.net/kievonline.net
npm run build
pm2 restart kievonline-next
```

---

## Image Naming Convention

Keep the current naming system for consistency:

| Purpose | Filename Format | Example |
|---------|-----------------|---------|
| Hero background | `hero-bg.{jpg\|png\|svg}` | `hero-bg.jpg` |
| Category cards | `cat-{category}.{jpg\|png\|svg}` | `cat-castle.jpg` |
| Featured sites | `site-{id}.{jpg\|png\|svg}` | `site-001.jpg` |

---

## Recommended Tools for Image Processing

### Free Online Tools
- **ImageOptim**: imageoptim.com
- **TinyPNG**: tinypng.com
- **Pixlr**: pixlr.com
- **Photopea**: photopea.com

### Command Line (On Your Computer)
```bash
# Resize and compress with ImageMagick
convert input.jpg -resize 400x300 -quality 85 output.jpg

# Or with ffmpeg
ffmpeg -i input.jpg -vf scale=400:300 -q:v 8 output.jpg
```

---

## Attribution Requirements

If using Wikimedia Commons images with Creative Commons licenses:

### Add to Image Alt Text
```html
<img src="/images/cat-castle.jpg" alt="Kamianets-Podilskyi Castle - Photo by [Author Name], CC-BY license">
```

### Or Create an Attribution Page
Create `/app/attribution.tsx`:
```typescript
export default function Attribution() {
  return (
    <div>
      <h1>Image Attribution</h1>
      <ul>
        <li>Castle photo: [Author] - Wikimedia Commons (CC-BY)</li>
        <li>Church photo: [Author] - Wikimedia Commons (CC-BY)</li>
      </ul>
    </div>
  );
}
```

---

## Current Configuration

Your images are referenced in these files:

### Main Configuration
- **tailwind.config.ts** - Image URLs defined here
  - `gradient-hero` - Uses `hero-bg.svg`
  - `img-castle` - Uses `cat-castle.svg`
  - `img-religious` - Uses `cat-religious.svg`

### Components Using Images
- **components/Hero.tsx** - Uses `bg-gradient-hero`
- **components/Categories.tsx** - Uses category images (currently gradients)

---

## Quick Replacement Commands

### Replace a Single Image
```bash
# Upload hero background
scp my-hero-image.jpg user@167.235.10.212:/var/www/kievonline.net/kievonline.net/public/images/hero-bg.jpg

# Rebuild
ssh user@167.235.10.212 "cd /var/www/kievonline.net/kievonline.net && npm run build && pm2 restart kievonline-next"
```

### Replace All SVGs with JPGs at Once
```bash
# In your tailwind.config.ts, change:
# 'gradient-hero': 'linear-gradient(...), url(/images/hero-bg.svg)',
# to:
# 'gradient-hero': 'linear-gradient(...), url(/images/hero-bg.jpg)',
```

---

## Image Format Recommendations

### For Web
- **Format**: JPG (photos), PNG (transparent), WebP (modern)
- **Quality**: 80-85% JPG quality is ideal
- **Size**: 30-150 KB per image
- **Dimensions**:
  - Hero: 1280x720px
  - Category cards: 400x300px
  - Featured sites: 600x400px

### Optimization Checklist
- [ ] Image is in JPG or PNG format
- [ ] File size is < 150 KB
- [ ] Dimensions match requirements
- [ ] Image is not blurry or pixelated
- [ ] Colors match design palette (optional)
- [ ] Attribution included if required

---

## Visual Appearance Notes

The current design uses:
- **Hero section**: Gradient overlay + background image
- **Category cards**: Color-coded gradients (can be replaced with images)
- **Overall aesthetic**: Editorial luxury + Ukrainian heritage

When adding real images:
- Ensure they complement the blue, gold, and terracotta color scheme
- Keep photographs at high resolution (no stretching)
- Use consistent aspect ratios across similar elements

---

## Troubleshooting

### Image Not Showing
1. Check file exists: `ls -la /var/www/kievonline.net/kievonline.net/public/images/`
2. Check filename in tailwind.config.ts matches actual filename
3. Rebuild and restart PM2
4. Clear browser cache (Ctrl+Shift+Del)

### Image Looks Blurry
- Image resolution too small
- Try increasing dimensions (e.g., 800x600 instead of 400x300)
- Use PNG instead of JPG for sharpness

### File Size Too Large
- Use TinyPNG.com to compress
- Reduce JPG quality to 80%
- Use ImageOptim for batch processing

---

## Summary

1. **Find images** on Wikimedia Commons or Unsplash
2. **Optimize** to 100-150 KB using TinyPNG
3. **Upload** to `/public/images/` folder
4. **Update** filename in `tailwind.config.ts`
5. **Rebuild** with `npm run build`
6. **Restart** PM2 with `pm2 restart kievonline-next`

Current design is production-ready with SVG placeholders. Real photos will enhance the visual appeal!

---

**Questions?** See the deployment guide in `HTTPS_DEPLOYMENT_STEPS.md` for server access instructions.
