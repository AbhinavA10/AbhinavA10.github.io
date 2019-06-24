$(document).ready(function () {

    // ========================================================================= //
    //  Typed Js
    // ========================================================================= //

    //typed library is only needed on main page
    if (window.location.href.includes("index.html") || window.location.pathname.equals("/")) {
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
    //if there is a hash (modal direct link), then open it
    directLinkModal(window.location.hash);
});

// ========================================================================= //
//  Function to open a bootstrap modal based on ID
// ========================================================================= //
function directLinkModal(hash) {
    $(hash).modal('show');
}

// ========================================================================= //
//  JSON for Past empolyment Typed Js, from sumobot1
// ========================================================================= //
/*
function loadJSON(path, callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function handlePastEmployment(info) {
    var pastemployment = JSON.parse(info)['pastemployment'];
    var employmentdiv = document.getElementById("pastemployment");
    if (!employmentdiv) {
        return;
    }
    for (var i = 0; i < pastemployment.length; i++) {
        $('<div class="row"> \
                    <div class="col-md-3 text-center"> \
                        <a href="' + pastemployment[i]['href'] + '" align="center" class="text-center"><img src=' + pastemployment[i]['img'] + ' alt=' + pastemployment[i]["company"] + ' style="max-width: 70vw; width: 100%; height: 100%;"></a> \
                    </div> \
                    <div class="col-md-9"> \
                        <h2>' + pastemployment[i]["company"] + ': ' + pastemployment[i]["position"] + '</h2> \
                        <strong>Duration:</strong> \
                        <p> ' + pastemployment[i]['timeframe'] + '</p> \
                        <strong>Details:</strong> \
                        ' + pastemployment[i]['details'].map((info) => {
                return "<p>" + info + "</p>" }).join("") +
            '</div> \
                </div>').appendTo(employmentdiv);
    }
}*/
