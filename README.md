# BlockOne987 | Developer Portal

A Matrix-themed developer homepage with cyberpunk aesthetics, WebGL animations, and interactive design.

## Features

- **WebGL Matrix Rain** - GPU-accelerated falling code background
- **Glitch Text Effect** - Chromatic aberration on the hero title with cyan/pink split
- **Custom Cursor** - Crosshair that expands on interactive elements
- **Live Coordinates** - Real-time mouse position display (bottom right)
- **CRT Scanlines** - Retro scanline overlay effect
- **Staggered Animations** - Cards animate in sequence on load
- **Pulsing Status** - Animated system status indicator
- **Click Glitch** - Click anywhere to scramble the title text
- **Responsive Design** - Works on desktop and mobile

## Tech Stack

- HTML5
- CSS3 (animations, transitions, custom properties)
- WebGL (GPU-accelerated graphics)
- Vanilla JavaScript

## Usage

Simply open `index.html` in a browser. No build step or dependencies required.

## Customization

### Changing Menu Links
Edit the sitemap section in `index.html`:
```html
<a href="/your-path" class="site-link">
    <span class="index">0X</span>
    <h3>Your Title</h3>
    <p>Your description</p>
</a>
```

### Colors
Modify CSS variables at the top of the style block:
```css
:root {
    --matrix-green: #00ff41;
    --accent-cyan: #00fff5;
    --accent-pink: #ff00ff;
}
```

### Matrix Characters
Edit the `chars` string in the fragment shader to change the falling characters.

## License

MIT License &copy; 2026 BlockOne987.com