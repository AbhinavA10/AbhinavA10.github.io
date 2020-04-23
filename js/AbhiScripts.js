$(document).ready(function () {

    // ========================================================================= //
    //  Typed Js
    // ========================================================================= //

    //typed library is only needed on main page
    if (window.location.href.endsWith("index.html") || window.location.pathname.endsWith("/")) {//if index.html or root site
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 75, //type speed in milliseconds
            backSpeed: 40, //backspacing speed in milliseconds
            smartBackspace: true, //smartBackspace only backspace what doesn't match the previous string
            backDelay: 1000, //backDelay time before backspacing in milliseconds
            loop: true, //loop strings
            loopCount: Infinity,//amount of loops
        });
    }

    // ========================================================================= //
    //  Portfolio filtering
    // ========================================================================= //
    if (window.location.href.includes("projects.html")) {
        // -----  init Isotope ---- 
        var $grid = $('.filterGrid').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        // Add active class to the current control button (highlight it)
        var btnContainer = document.getElementById("btnPortfolio-container");
        var btns = btnContainer.getElementsByClassName("btn-portfolio-filter");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                //--- changing css class to update UI ---
                var current = document.getElementsByClassName("btn-portfolio-filter-active");
                current[0].className = current[0].className.replace(" btn-portfolio-filter-active", "");
                this.className += " btn-portfolio-filter-active";
                //  ----- Isotope filtering -----
                var filterValue = $(this).attr('data-filter');
                //console.log('filtering: ' + filterValue);
                $grid.isotope({ filter: filterValue });
            });
        }
    }
});