# The Future of the Homeless

A polished static donation and grant inquiry website for the international mission **The Future of the Homeless**.

## Files

- `index.html` — mission, impact, donation form, and grant inquiry sections
- `thank-you.html` — donor thank-you page
- `styles.css` — responsive visual design
- `script.js` — amount validation, currency display, and footer year

## Donation checkout

The form uses PayPal's hosted donations flow and is configured for `amandaafedi@gmail.com`. It accepts a donor-entered amount and offers several currency choices. Donors finish payment on PayPal; the site never collects PayPal passwords or card details.

Confirm the account can receive payments and that the desired currencies are enabled/available in PayPal. PayPal and banks may apply their own currency conversion or fees. This static form is a hosted PayPal donation flow, not a PayPal JavaScript SDK/API integration; do not put API secrets in browser code.

The PayPal return URL is set to the expected GitHub Pages URL for this repository. It will only work after GitHub Pages is enabled and the site is published at that address. The thank-you page is not proof of payment; rely on PayPal's transaction receipt/activity for confirmation.

## Important charitable-status note

The site does not claim that the initiative is a registered nonprofit or that donations are tax-deductible. Confirm legal registration, fundraising permissions, and grant eligibility in each relevant jurisdiction before making such claims or soliciting donations there.

## Publish

The repository currently needs to be public or have an eligible GitHub Pages plan, and GitHub Pages needs to be enabled in repository settings (Settings → Pages). Select the `main` branch and `/ (root)` as the publishing source. Once published, the expected site URL is `https://kingsleyafedi1-blip.github.io/donations-grants-site/`.
