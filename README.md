# Egi Apriliansyah — Portfolio Website

A responsive, dark-editorial portfolio connecting technology, project coordination, leadership, and independent visual-design work. The visual direction uses charcoal, muted sage, and terracotta accents with restrained motion and responsive layouts.

## Contents
- `index.html` — page structure and portfolio content
- `styles.css` — layout, responsive design, visual studies, transitions, and animation
- `script.js` — selected-work filters, project notes, navigation, reading progress, photo lightbox, and Visual Stories project dialogs
- `assets/egi-apriliansyah-resume.pdf` — downloadable resume
- `assets/favicon.svg` — site icon
- `assets/gallery/` — four user-provided, web-optimized personal photos
- `assets/designs/` — three web-optimized hero poster exports used in the Visual Stories gallery
- `assets/projects/misi-warga-cilik-cover.webp` — optimized version of the user-provided portrait cover artwork for Misi Warga Cilik

## Featured work
- **Misi Warga Cilik** uses the original user-provided portrait cover artwork, optimized as WebP and displayed in a responsive editorial frame without cropping its key title or characters. Live: https://misi-warga-cilik.vercel.app/
- **Misi Warga Cilik** — freelance full-stack educational web application built with Next.js, React, and Tailwind CSS, deployed on Vercel. Its original cover artwork is used in the portfolio preview. Live: https://misi-warga-cilik.vercel.app/
- **Technology Seminar & Festival** — project coordination, committee planning, timeline, and budget coordination.
- **Digital Promotion Intelligence** — final project exploring C4.5 classification and Natural Language Generation for historical digital-promotion data.
- **Full-Stack Application Work** — internship experience using PHP and SQL, including bug identification and feature testing.
- **Student Executive Board** — organizational leadership and stakeholder coordination.
- **Digital Content Production** — content-planning and creative-team coordination experience.

## Visual Stories — independent design projects
The Visual Stories section presents three live landing-page explorations, each paired with its actual user-provided hero poster export (WebP) and an enlarged image dialog. The third project is titled “Ciel — The Phantomhive Archive” to keep the visual archive in alphabetical sequence. No video placeholders are included:
- **Alexander — The Limit of Ambition** — historical/editorial design study: https://rilians.github.io/alexander/
- **Brighton — Same Sea, Bolder Tomorrows** — unofficial sports visual-identity concept: https://rilians.github.io/brighton/
- **Ciel — The Phantomhive Archive** — fan-made dark-editorial concept; the featured poster is titled “The Price of a Soul”: https://rilians.github.io/the-phantomhive-archive/

The Brighton landing page is an unofficial concept and is not affiliated with Brighton & Hove Albion. Ciel — The Phantomhive Archive is a fan-made concept and is not affiliated with the series or its rights holders. Underlying marks, characters, and intellectual property belong to their respective owners. The pages and posters are included to demonstrate visual direction, layout, typography, interaction, and front-end execution; they are not represented as commissioned client projects. The three poster images are stored in `assets/designs/` and are optimized WebP versions of the provided PNGs.

## Personal photo gallery
The gallery uses four user-provided photos in `assets/gallery/`. They are optimized for web delivery and styled with CSS cropping, a fine inner frame, restrained color treatment, and a photo lightbox. Use the photos only where publication permission exists and avoid confidential workplace or personal information.

## Motion and accessibility
The site uses restrained reveal transitions, hover details, a pointer-responsive highlight in the hero, a reading-progress indicator, and scroll-aware navigation. Animations respect the visitor's `prefers-reduced-motion` setting.

## Run locally
Open `index.html` in a modern browser. For best local testing, run a server from this directory:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Publish
This is a static website. It can be hosted on GitHub Pages, Netlify, or Vercel. Upload the contents of the project folder to the chosen host rather than uploading the ZIP itself as a website root.

## Before publishing
1. Verify education dates, experience periods, claims, and credential URLs.
2. Make sure every linked landing page is live and all links are correct.
3. Keep any private employer, client, research, or personal information out of the public repo.
4. Public hosting and any external fonts require an internet connection; system font fallbacks are provided.
