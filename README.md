# SMART SECURE IT Networking & General Contracting Est.
### Corporate Static Web Portal | Kingdom of Saudi Arabia

Official production-ready static website for **SMART SECURE IT Networking & General Contracting Est.** (المؤسسة الذكية الآمنة لتقنية المعلومات والمقاولات العامة), Saudi Arabia.

- **Primary Slogan:** "Integrated Solutions. Trusted Execution."
- **Secondary Slogan:** "From Code to Concrete, We Deliver."
- **Phone / WhatsApp:** [+966 56 751 3410](tel:+966567513410)
- **Official Email:** [info@smartsecureitksa.com](mailto:info@smartsecureitksa.com)
- **Official Website:** [www.smartsecureitksa.com](https://www.smartsecureitksa.com)

---

## 📋 Comprehensive List of Placeholders to Fill

Per strict editorial and compliance guidelines, no unverified facts, certifications, or fictitious credentials have been invented. All missing data points are preserved in visible square brackets `[...]` across the code and listed below:

| # | Placeholder | Location in Code | Recommended Client Data |
|---|-------------|------------------|-------------------------|
| 1 | `[Add year founded]` | Commented counter block / About section | Official year of establishment / Commercial registration issue year |
| 2 | `[Add CR number]` | Header legal notice, Footer, Schema markup | Saudi Ministry of Commerce Commercial Registration (10-digit CR) |
| 3 | `[Add Chamber city]` | Footer legal accreditation | City of Saudi Chamber of Commerce affiliation (e.g., Riyadh, Dammam) |
| 4 | `[Add office address]` | Contact section & Footer | Physical street address, district, building number, and postal code |
| 5 | `[Add project photo]` (Cards 1 to 6) | Projects showcase grid (`#projects`) | High-resolution photography of executed security, IT, or civil projects in KSA |
| 6 | `[Add client logos]` (Slots 1 to 6) | Institutional Partners band (`#projects`) | Authorized vector SVG or transparent PNG logos of approved corporate clients |
| 7 | `[Years of experience]` | Commented-out counter block (`index.html`) | Verified operational track record duration |
| 8 | `[Projects completed]` | Commented-out counter block (`index.html`) | Total count of handed-over turnkey projects |
| 9 | `[Clients served]` | Commented-out counter block (`index.html`) | Total institutional and industrial clientele count |

*(Note: To enable the optional extra counters in `#stats`, uncomment the marked section in `index.html` once verified figures are provided.)*

---

## 🎬 Video & Image Asset Specifications

### 1. Where to Place Video Files
All background videos must be located in `/assets/video/`:
- `assets/video/hero.mp4` – **Hero Section**: Looping video of active industrial operations, cranes, or construction machinery.
- `assets/video/stats.mp4` – **Performance Metrics**: Darker ambient video of server room racks, network operations center (NOC), or facility security.
- `assets/video/cta.mp4` – **Call to Action**: High-intensity welding, steel fabrication, or technical MEP site-work.

### 2. Video Technical Requirements
- **Format:** H.264 MP4 (`.mp4`) and optional WebM (`.webm`).
- **Resolution:** Maximum `1280x720` (720p) or `1920x1080` (1080p).
- **Target File Size:** Under 3.0 MB per clip for fast initial load.
- **Duration:** 8 to 15 seconds, seamless loop, **no audio track** (`-an`).
- **Responsive Behavior:** The site automatically pauses videos off-screen via `IntersectionObserver`. On screens &le; 768px, or when `prefers-reduced-motion` or `Save-Data` headers are active, `<video>` playback is disabled and lightweight fallback poster images are shown.

### 3. Free Licensed Video Footage Sources
If real site footage is not yet available, royalty-free industrial B-roll footage can be downloaded from:
- **Pexels:** [https://www.pexels.com/search/videos/construction/](https://www.pexels.com/search/videos/construction/) or `/server%20room/`
- **Pixabay:** [https://pixabay.com/videos/search/welding/](https://pixabay.com/videos/search/welding/)
- **Coverr:** [https://coverr.co/s?q=industrial](https://coverr.co/s?q=industrial)

### 4. Video Compression with FFmpeg
Run the following exact command in PowerShell or Bash to strip audio, downscale to 720p, and compress under 3 MB:

```bash
ffmpeg -i input_footage.mp4 -vcodec libx264 -crf 28 -an -vf "scale=1280:-2" -preset slow -movflags +faststart assets/video/hero.mp4
```

*(Repeat for `stats.mp4` and `cta.mp4`)*

### 5. Extracted PDF Images Flagged for Replacement
Any photography extracted directly from `SSI - Company Profile.pdf` that contains third-party branding or low resolution should be replaced with original client photography:
- `page_4_0_Im113.jpg` / `page_4_1_Im114.jpg`: Contains third-party camera manufacturer hardware (*Hikvision / Dahua*). **Action:** Replace with client's own installation photography.
- `page_5_6_Im149.jpg`: Standard biometric device photo. **Action:** Replace with client's actual deployed turnstile/access control hardware.
- Equipment rental photos (Pages 7-9): Extracted at low resolution (under 300px). **Action:** Replace with high-resolution field photos of the actual 2,700+ equipment fleet.

---

## 🌐 Deployment to Hostinger (`public_html`)

This website is built entirely with clean vanilla **HTML5, CSS3, and JavaScript** with **no build step, no npm build requirement, and no server-side dependencies**. All internal URLs use relative paths.

### Deployment Steps:
1. Log into your **Hostinger hPanel** (`https://hpanel.hostinger.com`).
2. Navigate to **Websites** &rarr; select `smartsecureitksa.com` &rarr; click **File Manager**.
3. Open the **`public_html`** root directory.
4. If a default Hostinger placeholder file exists (such as `default.php`), delete it.
5. Upload all files and folders from this project directly into `public_html`:
   ```text
   public_html/
   ├── index.html
   ├── robots.txt
   ├── sitemap.xml
   ├── favicon.ico
   ├── favicon.png
   ├── css/
   │   └── styles.css
   ├── js/
   │   ├── main.js
   │   └── i18n.js
   └── assets/
       ├── logo.png
       ├── img/
       │   ├── hero-poster.jpg
       │   ├── stats-poster.jpg
       │   ├── cta-poster.jpg
       │   ├── security-feature.jpg
       │   └── material-trading.jpg
       └── video/
           ├── hero.mp4
           ├── stats.mp4
           └── cta.mp4
   ```
6. Visit `https://www.smartsecureitksa.com` in your browser. The site is live immediately!

---

## 🛠️ Architecture & Features

1. **Brand Design System:**
   - Palette: `--navy-900: #0A1240`, `--navy-700: #14196B`, `--blue-500: #00A8E8`, `--white: #FFFFFF`, `--grey-50: #F5F6F8`, `--grey-200: #DFE3EA`, `--ink: #1D2230`, `--muted: #5B6475`.
   - Typography: *Source Serif 4* display headings, *Inter* UI body, and *IBM Plex Sans Arabic* for Arabic text.
   - 0-4px corner radii, crisp 1px borders, subtle navy video overlays.
2. **Bilingual Engine & Full RTL:**
   - Client-side dictionary (`js/i18n.js`) with instant switching between English (`ltr`) and Arabic (`rtl`).
   - Preference saved in `localStorage`.
   - Arabic-Indic numeral translation (`٠-٩`) for all animated count-up numbers in Arabic mode.
3. **Animated Count-Up Counters:**
   - Smooth `requestAnimationFrame` ease-out cubic curve across verified profile statistics (2,700+, 12, 8, 24/7).
   - Triggers once on viewport intersection; digit shifting prevented with `font-variant-numeric: tabular-nums`.
   - Respects `prefers-reduced-motion`.
4. **Interactive Divisions & Modals:**
   - Accessible modal dialogues for all 8 service divisions with detailed scope from the company profile.
   - Manpower services accordion (5 disciplines with merged procurement teams).
   - Security systems interactive tabs (Analogue/HD, IP Systems, AI Surveillance).
5. **Direct Client Contact:**
   - Fully client-side contact form with validation.
   - Form submission automatically formats a pre-filled WhatsApp message directed to `+966 56 751 3410` or opens a pre-composed `mailto:` corporate email.
   - Fixed WhatsApp floating button with verified Saudi hotline.
