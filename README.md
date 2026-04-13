# Thift Website

This project is a fully static public website for **Thift**, a mobile marketplace focused on preloved fashion and thrifted clothing.

The site is intended to support:

- brand legitimacy and a clean public web presence
- legal and compliance pages for app store review
- account deletion transparency
- user support and contact

There is no framework or build step. The site uses plain HTML, CSS, and a very small amount of vanilla JavaScript, which makes it easy to host on Vercel as a static project.

## File structure

```text
thrift-app-site/
├── 404.html
├── community-guidelines.html
├── contact.html
├── delete-account.html
├── index.html
├── privacy.html
├── terms.html
├── style.css
├── script.js
├── vercel.json
├── .gitignore
└── README.md
```

## Pages included

- `index.html` - landing page and public overview
- `privacy.html` - Privacy Policy
- `terms.html` - Terms of Service
- `community-guidelines.html` - Community Guidelines
- `delete-account.html` - account deletion information
- `contact.html` - public support page
- `404.html` - custom not found page

## How to run locally

Because this is a static site, you can preview it in either of these ways:

1. Open `index.html` directly in a browser for a quick review.
2. Use any local static server if you want a more deployment-like preview.

Example using Python if it is available on your machine:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment on Vercel

This project is ready to deploy as a static site.

1. Push the folder to a GitHub repository.
2. Import that repository into Vercel.
3. Leave the project as a static site with no build command.
4. Deploy.

No environment variables are required for this website.

## Updating support email or policy content

If you need to change the public support contact, search the project for:

```text
support@thiftapp.com
```

If you need to revise legal wording, update these files:

- `privacy.html`
- `terms.html`
- `community-guidelines.html`
- `delete-account.html`
- `contact.html`

If you need to update the policy revision label, search for:

```text
Last updated: April 2026
```

## Notes

- `style.css` controls the shared visual system across all pages.
- `script.js` only handles light progressive enhancement:
  - mobile navigation toggle
  - active navigation state
  - footer year injection
- `vercel.json` keeps the deployment simple and static-friendly.
