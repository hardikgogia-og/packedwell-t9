# PackedWell — Premium Packaging Manufacturer Website

A premium, production-ready corporate website for **PackedWell**, a B2B luxury paper-based packaging manufacturer based in Gurugram, India. The site showcases manufacturing capabilities, builds trust with brands, and generates business enquiries through WhatsApp.

> **Tagline:** _"If It Matters, It's PackedWell"_

This is **not** an e-commerce site — there is no cart, checkout, or payment. All enquiries are routed to WhatsApp (`+91 70113 10430`).

---

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) for icons
- Self-hostable — no platform lock-in

---

## Pages

| Route            | Description                              |
| ---------------- | ---------------------------------------- |
| `/`              | Home — hero, categories, process, industries |
| `/about`         | Company profile, vision, mission         |
| `/products`      | Luxury product showcase                  |
| `/manufacturing` | End-to-end process timeline              |
| `/industries`    | Industries served                        |
| `/portfolio`     | Filterable premium gallery               |
| `/contact`       | Enquiry form (routes to WhatsApp)        |
| `/terms`         | Terms & Conditions                       |
| `/privacy`       | Privacy Policy                           |

---

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout, fonts, header/footer, SEO metadata
│   ├── globals.css         # Theme tokens (black / champagne gold)
│   ├── page.tsx            # Home page
│   ├── about/
│   ├── products/
│   ├── manufacturing/
│   ├── industries/
│   ├── portfolio/
│   ├── contact/
│   ├── terms/
│   └── privacy/
├── components/
│   ├── home/               # Home page sections
│   ├── site-header.tsx     # Navigation
│   ├── site-footer.tsx
│   ├── whatsapp-float.tsx  # Floating WhatsApp button
│   ├── contact-form.tsx    # Enquiry form -> WhatsApp
│   └── ...                 # Reusable UI (page-hero, cta, reveal, etc.)
├── lib/
│   └── site.ts             # Central config: contact info, products, industries
├── public/
│   └── images/             # Generated premium imagery (replaceable)
└── README.md
```

To customise contact details, products, or industries, edit **`lib/site.ts`** — a single source of truth used across the whole site.

---

## 1. Install Dependencies

Requires [Node.js](https://nodejs.org) 18.18+ and [pnpm](https://pnpm.io) (recommended). npm or yarn also work.

```bash
pnpm install
# or: npm install
# or: yarn
```

## 2. Run Locally

```bash
pnpm dev
# or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The dev server supports hot reloading.

## 3. Build for Production

```bash
pnpm build
pnpm start
# or: npm run build && npm run start
```

`build` creates an optimised production bundle; `start` serves it locally on port 3000.

## 4. Deploy on Vercel

1. Push this repository to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Every push to your default branch triggers a new production deployment.

You can also deploy from the CLI:

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

> Not locked to Vercel: because this is a standard Next.js app, you can also host it on Netlify, Render, a Node server, or any platform that supports Next.js.

## 5. Connect a Custom Domain

On Vercel:

1. Open your project → **Settings → Domains**.
2. Add your domain (e.g. `packedwell.com`).
3. Update your DNS with your registrar:
   - **Apex/root domain** → add an `A` record pointing to `76.76.21.21`.
   - **`www` subdomain** → add a `CNAME` record pointing to `cname.vercel-dns.com`.
4. Wait for DNS to propagate — Vercel provisions HTTPS automatically.

Then update `metadataBase` in `app/layout.tsx` to your live domain for correct SEO/social metadata.

---

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: PackedWell website"
git branch -M main
git remote add origin https://github.com/<your-username>/packedwell.git
git push -u origin main
```

---

## Replacing Images

All imagery lives in `public/images/`. Replace any file with your own photography using the same filename, or update the paths in `lib/site.ts` and the relevant components. Recommended: high-resolution product and factory photography for the most premium result.

---

## License

Proprietary — © PackedWell. All rights reserved.
