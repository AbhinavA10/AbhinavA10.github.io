# AbhinavA10.github.io

My Personal Website, and some documentation for future use.

I chose to use `Bootstrap 4.3.1` as it helps implement most of the css required to scale my site to mobile. Using the column and grid style formatting makes the website quite reactive.

During the creation of this website, I also learnt about tools like `gulp` and `Nunjucks`.

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
- [ ] use JUSTDOIT as thumbnail for messagewand portfolio instead
- [ ] create sitemap for better indexing (can test SEO score with Lighthouse chrome extension)

### Planned Sitemap

The following are still left to do:

- [ ] Software
  - [ ] Battlecode
  - [ ] grade 11 libgdx game protoype
  - [ ] Node.js Twitter Bot
  - [ ] reshape reality window frame game
  - [ ] MachineLearningProjects
  - [ ] Wat-Health
  - [ ] Driver Drowsiness Detection
  - [ ] Earthquake App
  - [ ] Loc8r Angular App
  - [ ] Vue.js To-do list app
  - [ ] chat web app - socket.io
  - [ ] Matrix Solving Robot

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

## Notes regarding including html files
Possible methods to include html files in one another:
- ssi include directive
- use gulp to create a source and deploy kind-of directory. we can include files this way
    - build before every commit, or create something on github to autobuild before deploy
    - "html partial gulp"
        - https://css-tricks.com/the-simplest-ways-to-handle-html-includes/#article-header-id-1
        - https://stackoverflow.com/questions/21995500/compile-html-partials-with-gulp-js
    - html templating engines
        - Nunjucks: 
            - Good Tutorial: https://zellwk.com/blog/nunjucks-with-gulp/
            - Old example of site: https://github.com/ericmotil/gulp-nunjucks-sass
            - Another example/tutorial https://www.smashingmagazine.com/2018/03/static-site-with-nunjucks/
        - Handlebars
        - Gatsby: can get data from *markdown* files from GraphQL?: https://www.gatsbyjs.org/
-  or use Jquery $().load('header.html') etc. to load html
    - cross origin request problem. Look at the reddit link concerning creating local http server

## Commit info
- commit `1ae50006edbce38897b784e4546407058c11f278` is last commit before the new build system

## Copyright and License

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
