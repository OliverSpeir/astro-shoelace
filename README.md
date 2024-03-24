# proof of concept

See [index.astro](./src/pages/index.astro)

- https://shoelace.style/getting-started/installation#bundling

-  ~19.9kb of js and ~4.5kb css for the tooltip


- https://github.com/sapphi-red/vite-plugin-static-copy
  - Inspired by: https://github.com/gongfudev/new-astro-repo/tree/main
 
- I also tested this out with tailwind class based dark mode to switch between shoelace's default dark and light themes, and it was relatively simple, just copy paste the dark theme css into a `global.css` and put it in the `html.dark` selector
