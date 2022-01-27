function myFunction() {
    alert("Button 1 pressed");
}

(function ($) {
    "use strict";

    // Elevator - Scroll back to top utility JS
    // ========================================

    // append necessary class
    // should have already contain wrapper on a page.
    // <div class="elevator-wrapper"></div>
    $(".elevator-wrapper").append(
        '<div class="elevator"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>'
    );

    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        // duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        // grab the "back to top" link
        $back_to_top = $(".elevator");

    // hide or show the "back to top" link
    $(window).scroll(function () {
        $(this).scrollTop() > offset
            ? $back_to_top.addClass("elevator-is-visible")
            : $back_to_top.removeClass("elevator-is-visible");
    });

    // smooth scroll to top
    $back_to_top.on("click", function (event) {
        event.preventDefault();
        $("body,html").animate(
            {
                scrollTop: 0,
            },
            scroll_top_duration
        );
    });
})(jQuery);

function langButton() {
  var checkBox = document.getElementById("lang");
  var pageUrl = window.location.href;
  var extension = '';

  if (pageUrl[pageUrl.length-1]!='/') {
    extension = pageUrl.slice(pageUrl.lastIndexOf('/'), pageUrl.length)
    pageUrl = pageUrl.slice(0, pageUrl.lastIndexOf('/')+1);
  }

  if (checkBox.checked == true){
    window.open( pageUrl + "/en" + extension ,"_self");
    checkBox.checked = true;
  } else {
    window.open( pageUrl.slice(0, pageUrl.length-4) + extension ,"_self");
  }
}
