# CloudArc Labs website

Astro static site, hosted on Cloudflare Workers (static assets), code in GitHub.

## Before going live

Edit `src/site.ts`:

- `name` – confirm the business name spelling.
- `email` – set to `info@cloudarclabs.com`.
- `bookingUrl` – optional Calendly / Cal.com link; adds a "Book a call" button.
- `services` – all service copy lives here.

Edit `src/pages/about.astro` and replace the bracketed "Who we are" placeholder.

`site` in `astro.config.mjs` is set to `https://cloudarclabs.com`; attach the domain in Cloudflare.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to ./dist
npm run preview    # serves ./dist through Wrangler, with the real headers
```

Requires Node 20 or newer.

## Push to GitHub

Create an empty repository on GitHub first, then:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Deploy on Cloudflare

Dashboard (recommended, redeploys on every push):

1. Workers & Pages → Create → import the GitHub repository.
2. Build command: `npm run build`
3. Deploy command: `npx wrangler deploy`
4. After the first deploy, add your domain under the Worker's Settings → Domains & Routes.

Or from your machine:

```bash
npx wrangler login
npm run deploy
```

## Structure

```
src/site.ts              business details and service copy
src/pages/               index, about, contact, 404, services/[slug]
src/layouts/Base.astro   page shell and meta tags
src/components/          header and footer
src/styles/global.css    all styling (light and dark)
public/_headers          security headers served by Cloudflare
wrangler.jsonc           Cloudflare config
```

## Security headers

`public/_headers` sets a strict Content-Security-Policy that only allows
resources from the site itself. If you later add a third-party script
(for example Cloudflare Web Analytics or an embedded booking widget), add its
domain to the policy or the browser will block it.

Turn on "Always Use HTTPS" and HSTS in the Cloudflare dashboard under SSL/TLS.
