# Simply Tiling

<p align="center">
  <img width="500" src="https://via.placeholder.com/500" alt="Simply Tiling Logo">
</p>

## Information about The Website

This website is the face of Simply Tiling, a tiling buisness in Norfolk, England. I created the site using Nuxt and Tailwind CSS.
See the [changelog](CHANGELOG.md) to see all updates to this project.

## Technologies Used

- **[Tailwind CSS](https://tailwindcss.com)**
  is a low-level CSS framework that allows you to build responsive css with html classes

- **[Nuxt](https://nuxtjs.org)**
  is a jamstack static site generator for vue, it allows you to use a headless cms, markdown and many forms of data to build websites that can be hosted on Github and deployed on [Netlify](https://www.netlify.com) or a similar static site optimised deployment service.

- **[Vue](https://vuejs.org)**
  is a JavaScript framework that is easy to use and build websites out of components and intergrate functionality into a site with ease.

## Developer notes

- Any class that begins with "st" e.g `st-button` is a style added not using the tailwind css framework. These are for custom styles specific to Simply Tiling that tailwind cannot adequately provide.

- Most custom styles can be found in the main.css file in the assets folder.

- This project uses tailwind v1. Therefore, some functionailty such as group hover and group focus must be enabled in the tailwind config at the root of this project.

## Using Nuxt

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

---

[changelog](CHANGELOG.md)

<p>Created with 
<a href="https://nuxtjs.org" target="_blank" rel="noopener"><img height="16" src="github-images/nuxt.svg" alt="nuxt"></a>
<a href="https://vuejs.org" target="_blank" rel="noopener"><img height="16" src="github-images/vue.png" alt="vue"></a>
<a href="https://tailwindcss.com" target="_blank" rel="noopener"><img height="16" src="github-images/tailwindcss.svg" alt="tailwind"></a>
 by <a href="#" target="_blank" rel="noopener">Amy Keable</a></p>
