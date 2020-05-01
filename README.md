# AbhinavA10.github.io

My Personal Website, and some documentation for future use.

I chose to use `Bootstrap 4.3.1` as it helps implement most of the css required to scale my site to mobile. Using the column and grid style formatting makes the website reactive to different browser widths

During the creation of this website, I also learnt about tools like `gulp`, `browsersync`, and `Nunjucks`.

## File Structure
- `~/src/components/` contains youtube function, and project card function
- `~/src/pages/` contains root pages
- `~/src/projects/` contains all project pages. These will be included into the projects.html page when site is built

## Build Instructions
Do not edit any html files. These are built using Gulp. Only edit `.njk` files

After updating njk file, run the following to build website:
- `npm run start`

## Sources

- [Carousel](https://www.w3schools.com/bootstrap/bootstrap_carousel.asp)
- [Carousel2](https://getbootstrap.com/docs/4.1/components/carousel/)
- [Changing Chevron Colour for Carousel](https://stackoverflow.com/questions/49391266/change-bootstrap-4-carousel-control-colors/49391884)
- [Filtering projects](https://www.w3schools.com/howto/howto_js_filter_elements.asp)
- Button filterable portfolio made using `Isotope`
- html includes and file splitting was done using `Nunjucks` with a `Gulp` build system
- [Ensure Font remains visible during pageload](https://web.dev/font-display/)
- [Font Awesome 4.7 icon list](https://fontawesome.com/v4.7.0/icons/)
- [Creating a 404 page](https://mycyberuniverse.com/developing/custom-404-page-for-website-hosted-on-github.html)

### Typed.js

I used typed.js for the typewriting effect on the home page.
[https://github.com/mattboldt/typed.js/](https://github.com/mattboldt/typed.js/)

Tutorial [here](https://www.youtube.com/watch?v=Jed5ZasNtJM)

### Favicon.ico

For the little icon in the tab/bookmarks:
How to guide is [here](https://tutorialehtml.com/en/what-is-favicon-ico-usage/)

#### Bootstrap
- Bootstrap requires Javascript, and offeres no graceful fallback if javascript is disabled

### Nunjuck
- html templating engines
    - Nunjucks: 
    - Good Tutorial: https://zellwk.com/blog/nunjucks-with-gulp/
    - Old example of site: https://github.com/ericmotil/gulp-nunjucks-sass
    - Another example/tutorial https://www.smashingmagazine.com/2018/03/static-site-with-nunjucks/

### Lazyloading 
- [Native lazy-loading for the web](https://web.dev/native-lazy-loading/)
- [DesignCourse: Native Lazy Loading + A Fallback Solution ..in 60 seconds](https://www.youtube.com/watch?v=6mTKlOGBYfM)
- [Google Dev's advice](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video)
- https://github.com/aFarkas/lazysizes
- To setup an image for lazy loading, add:
```html
<img class="lazyload" data-src="image.jpg" loading="lazy">
```

## Commit info
- commit `1ae50006edbce38897b784e4546407058c11f278` is last commit before the new build system

## Copyright and License

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

[Agency](https://startbootstrap.com/template-overviews/agency/) is a theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).

## Ideas

- [ ] make better favicon.ico/logo
- [ ] folio template can be used for blog and contact structure
- [ ] spread chevrons out in carousel
- [ ] carousel caption -- appear too high up on picture, and aren't very readable --> mask?
- [ ] carousel indicators --> change colours
- [ ] update media CSS tags
- [ ] rename PNG, github seems to mix and match

### Planned Sitemap

The following projects are still left to add:

- [ ] Node.js Twitter Bot
- [ ] reshape reality window frame game
- [ ] MachineLearningProjects
- [ ] Vue.js To-do list app
- [ ] RREF Matrix Solving Robot