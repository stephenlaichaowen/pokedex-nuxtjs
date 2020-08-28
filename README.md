# Pokedex App

> This project is the clone of [Build a Pokedex with NextJS and Tailwind CSS - SSR vs SSG](https://github.com/jamesqquick/nextjs-pokedex-with-tailwind-css), the original project is built with Nextjs, and I built it with Nuxtjs. 

## Technology
- Frontend: Nuxtjs + SSR
- Backend: [pokeapi.co](https://pokeapi.co/api/v2/pokemon?limit=150)

---

The app initially loads 150 pokemon card, it is a little heavy work to load so many info(images+text) instantaneously, an improvement can be made to add infinite scroll + Intersection Observer + image preloader to optimize the app.  

## DEMO
[https://pokedex-nuxtjs.netlify.app](https://pokedex-nuxtjs.netlify.app)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Deploy to Netlify

```bash
# Basic build settings
Build command - npm run generate
Publish directory - dist
```

## Reference
[Build a Pokedex with NextJS and Tailwind CSS - SSR vs SSG / 
James Q Quick](https://www.youtube.com/watch?v=LMRAEUPkFXI)