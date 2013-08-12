;(function($, window, document){

  "use strict";

  var $rsvpBtn = $(".jsRsvpBtn");
  var $overlay = $("#jsOverlay");
  var overlayTemplate = doT.template($("#jsRsvpConfirmation").html());

  $rsvpBtn.on({

    "click": function(e){

      e.preventDefault();

      var data = { attend: $(this).data("attend")};
      var html = overlayTemplate(data);
      var $overlayContent = $overlay.find(".jsOverlayContent");

      $overlay.data("attend", data.attend);

      $overlayContent.html(html);

      openOverlay($overlay);

    }

  });


  $("body").on({
    "click": function(e){

      e.preventDefault();

      closeOverlay($overlay);
      
    }
  }, ".jsCloseOverlay");


  $(window).on({

    keyup: function(e){
      if (e.keyCode == 27) {
        closeOverlay($overlay);
      }
    }

  });


  $overlay.on({
    "click": function(e){

      e.preventDefault();

      var isAttending = $overlay.data("attend") === "won't" ? false : true;
      console.log("is attending: "+isAttending);
      //ajax data...
      
      closeOverlay($overlay);

    }
  }, ".jsConfirmationYes");


  function closeOverlay($ele){

    $ele.hide();
    $ele.data("attend", "");

  }


  function openOverlay($ele){

    $ele.show();
    centerElement($ele.find(".jsOverlayContent"));

  }


  function centerElement($ele){

    var halfOuterHeight = $($ele.selector).outerHeight(true) / 2;
    var halfDocHeight = $(document).height() / 2;

    var halfOuterWidth = $($ele.selector).outerWidth(true) / 2;
    var halfDocWidth = $(document).width() / 2;

    var topPx = halfDocHeight - halfOuterHeight || 0;
    var leftPx = halfDocWidth - halfOuterWidth || 0;

    $ele.css({ top: topPx, left: leftPx });

  }

})(jQuery, window, document);
