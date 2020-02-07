# AbhinavA10.github.io

My Personal Website, and some documentation for future use.

I chose to use `Bootstrap 4.3.1` as it helps implement most of the css required to scale my site to mobile. Using the column and grid style formatting makes the website reactive to different browser widths

During the creation of this website, I also learnt about tools like `gulp` `browsersync`, and `Nunjucks`.

## Todo and Issues

- [ ] make better favicon.ico/logo
- [ ] folio template can be used for blog and contact structure
- [ ] spread chevrons out in carousel
- [ ] carousel caption -- appear too high up on picture, and aren't very readable --> mask?
- [ ] carousel indicators --> change colours
- [ ] carousel item transitions are not animated
- [ ] make carousel indicator circles
- [ ] update media CSS tags
- [ ] rename PNG, github seems to mix and match
- [ ] create sitemap for better indexing (can test SEO score with Lighthouse chrome extension)
- [ ] cycling through carousel images causes text to move up, when images are different heights.

### Planned Sitemap

The following are still left to do:

- [ ] Software
  - [ ] Node.js Twitter Bot
  - [ ] reshape reality window frame game
  - [ ] MachineLearningProjects
  - [ ] Vue.js To-do list app
  - [ ] RREF Matrix Solving Robot
  - [ ] NES
  - [ ] GTFS

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

### Typed.js

I used typed.js for the typewriting effect on the home page.
[https://github.com/mattboldt/typed.js/](https://github.com/mattboldt/typed.js/)

Tutorial [here](https://www.youtube.com/watch?v=Jed5ZasNtJM)

### Favicon.ico

For the little icon in the tab/bookmarks:
How to guide is [here](https://tutorialehtml.com/en/what-is-favicon-ico-usage/)

[Agency](https://startbootstrap.com/template-overviews/agency/) is a theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).

### Nunjuck
- html templating engines
    - Nunjucks: 
    - Good Tutorial: https://zellwk.com/blog/nunjucks-with-gulp/
    - Old example of site: https://github.com/ericmotil/gulp-nunjucks-sass
    - Another example/tutorial https://www.smashingmagazine.com/2018/03/static-site-with-nunjucks/

## Commit info
- commit `1ae50006edbce38897b784e4546407058c11f278` is last commit before the new build system

## Copyright and License

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
