# Sigrøn — GitHub Pages version

This folder is a self-contained static copy of the Sigrøn website, prepared for GitHub Pages.

## Included
- Norwegian homepage: `index.html`
- English page: `en/index.html`
- Local CSS and JavaScript in `assets/`
- Local project images in `images/`
- Favicon and custom 404 page
- `.nojekyll` so GitHub Pages serves the files directly

## Contact form
GitHub Pages is static hosting and cannot process a server-side form by itself. The original Norgesdomene form dependency has therefore been removed.

The existing form design is preserved. When a visitor submits it, the site opens the visitor's email app with a pre-filled message addressed to `alexandra@sigrøn.no`. This keeps the site independent of Norgesdomene's paid website/form service.

Later, the form can be connected to a dedicated form service if you want true in-page submission without opening an email app.

## Publish on GitHub Pages
1. Create or open the GitHub repository you want to use.
2. Upload the *contents* of this folder to the repository root (not the containing folder itself).
3. Commit the files.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the branch containing these files (usually `main`) and `/ (root)`.
7. Save and use the GitHub Pages address once deployment completes.

The custom domain `sigrøn.no` can be connected afterward without changing the site design.
