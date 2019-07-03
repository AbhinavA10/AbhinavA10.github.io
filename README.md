# AbhinavA10.github.io

My Personal Website, and some documentation for future use.

I chose to use Bootstrap 4.1 as it helps implement most of the css required to scale my site to mobile. Using the column and grid style formatting makes the website quite reactive.

During the creation of this website, I also learnt about tools like webpack and gulp.

## Todo and Issues

- [ ] make better favicon.ico/logo
- [ ] -folio template can be used for blog and contact structure-
- [ ] spread chevrons out in carousel
- [ ] carousel caption -- appear too high up on picture, and aren't very readable --> mask?
- [ ] carousel indicators --> change colours
- [ ] update media CSS tags
- [x] add google analytics
- [ ] movie video source to youtube and iframe. Github Repo too large
- [x] rename PNG, github seems to mix and match
- [ ] To make a button filterable portfolio, use [this](https://www.w3schools.com/howto/howto_js_filter_elements.asp)
    - [ ] combine all projects into 1 category -- and can then sort with filterable portfolio for software or hardware.
- [ ] use JUSTDOIT as thumbnail for messagewand portfolio instead
- [ ] include html files --ex. navbar or footer html
- [ ] update gulp file
- [ ] use JSON insertion to handle past employment?
- [ ] use JSON or html insertion to handle past projects?
- [ ] create sitemape for better indexing (can test SEO score with Lighthouse chrome extension)
- need to look at js for gulpfile after that

Notes regarding including html files and methods to do so:
- ssi include directive
- use gulp to create a source and deplor kind directory. we can include files this way
    - build before every commit, or create something on github to autobuild before deploy
    - "html partial gulp"
        - https://css-tricks.com/the-simplest-ways-to-handle-html-includes/#article-header-id-1
        - https://stackoverflow.com/questions/21995500/compile-html-partials-with-gulp-js
    - html templating engine
        - Nunjucks: https://zellwk.com/blog/nunjucks-with-gulp/
            - https://github.com/ericmotil/gulp-nunjucks-sass
            - https://www.smashingmagazine.com/2018/03/static-site-with-nunjucks/
        - Handlebars
        
    
- or use Jquery $().load('header.html') etc. to load html --> cross origin request problem. Look at the reddit link concerning creating local http server

### Planned Sitemap

The following are still left to do:

- [ ] Software
  - [ ] dont give up game
  - [ ] Battlecode
  - [ ] grade 11 libgdx game protoype
  - [ ] twitter Bot
  - [ ] reshape reality window frame game
  - [ ] MachineLearningProjects

## Sources

- [Carousel](https://www.w3schools.com/bootstrap/bootstrap_carousel.asp)
- [Carousel2](https://getbootstrap.com/docs/4.1/components/carousel/)
- [Changing Chevron Colour for Carousel](https://stackoverflow.com/questions/49391266/change-bootstrap-4-carousel-control-colors/49391884)
- [Filtering projects](https://www.w3schools.com/howto/howto_js_filter_elements.asp)

### Typed.js

I used typed.js for the typewriting effect on the home page.
[https://github.com/mattboldt/typed.js/](https://github.com/mattboldt/typed.js/)

Tutorial [here](https://www.youtube.com/watch?v=Jed5ZasNtJM)

### Favicon.ico

For the little icon in the tab/bookmarks:
How to guide is [here](https://tutorialehtml.com/en/what-is-favicon-ico-usage/)

# [Start Bootstrap - Agency](https://startbootstrap.com/template-overviews/agency/)

[Agency](https://startbootstrap.com/template-overviews/agency/) is a one page agency portfolio theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).

## Copyright and License

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/AbhinavA10/AbhinavA10.github.io/master/LICENSE)