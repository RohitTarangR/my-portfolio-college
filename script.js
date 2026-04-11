 $(document).ready(function () {

      $(window).on("scroll", function () {
        var scrollPos = $(document).scrollTop();

        $("section").each(function () {
          var top = $(this).offset().top - 100;
          var bottom = top + $(this).outerHeight();
          var id = $(this).attr("id");

          if (scrollPos >= top && scrollPos <= bottom) {
            $(".nav-link").removeClass("active");
            $(".nav-link[href='#" + id + "']").addClass("active");
          }
        });
      });

      $(".nav-link").click(function (e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 800);
      });

    });