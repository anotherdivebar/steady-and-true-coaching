# Steady & True

A four-page relationship coaching website for Josh Barbee.

**Brand line:** Strong in yourself. Better together.

## Preview and editing

Run `npm start` from this directory and open http://127.0.0.1:4173.

- `build.mjs` contains the homepage and shared page shell.
- `pages.mjs` contains Our Approach, Coaching, and Start Here.
- `dist/style.css` contains the responsive design.
- `dist/site.js` contains the mobile menu and private reflection tool.
- `dist/assets/coast.png` is original generated landscape artwork.

After editing page copy, run `npm run build`. Run `npm run check` to verify internal links, metadata, and asset references. The complete static website is in `dist/` and can be hosted on any static web host.

## Launch details

Email, booking URL, pricing, session format, coach biography, credentials, and a portrait have not been supplied. Booking is explicitly marked as coming soon. Coaching descriptions are proposed launch copy for Josh to review; no credentials, client testimonials, or outcome statistics have been invented.

The reflection tool does not submit or persist responses. It lets visitors copy their notes or download a text file. Fonts load from Google Fonts, with local fallback fonts.

The proposed brand name has not been checked for trademark or custom-domain availability.

## Hosting

Publish the contents of `dist/` to a static web host. The website has no server-side dependencies and does not require an installation step. Hosting-specific local configuration is excluded from version control.
