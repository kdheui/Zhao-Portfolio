# Zhaolin Hu — Local Portfolio

Open `index.html` directly in Chrome, Safari, or Edge. No installation is required.

For a local HTTP server, open a terminal in this folder and run:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000 . Press Ctrl+C to stop.
On Windows, use `py -m http.server 8000` if `python3` is unavailable.

Pages: Home, HOVR, About. Desktop and mobile share one responsive stylesheet.
File structure:

- index.html — page shell, navigation, and opening animation text.
- styles.css — typography, colors, responsive layouts, hover and opening animations.
- app.js — Home, HOVR, and About content, image mappings, and navigation.
- assets/ — project images, gesture illustrations, and local fonts.

Edit the page copy and add projects in app.js. Change the visual design in styles.css.
Put new images or videos into assets/ and reference them by relative path.
The home page foregrounds gesture interaction and the HOVR prototype. The generated background is decorative and visibly attributed.
`app.bundle.js` is the browser entry point; the current dependency-free `app.js` can be copied directly into it after edits.
The original Figma embedded video remains available through the Figma link; this copy uses its preview image.
Unfinished project placeholders are omitted from the homepage. Contact placeholders on the existing About and HOVR pages still need real details.
This version is a snapshot of the current Figma design and does not automatically sync future changes.

Hero artwork: `assets/hero-atmosphere-v2.png`, edited with the built-in ImageGen tool. Final prompt: remove all text and UI overlays from the supplied reference; preserve the hand, pale fog, faint head shadow and pink edge glow; no readable shoulders, neck, torso or white ribbon.
