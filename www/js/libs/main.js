;(function($){

  "use strict";

  var $noBtn = $(".jsNoBtn");
  var $yesBtn = $(".jsYesBtn");
  var $overlay = $("#jsOverlay");
  var overlayTemplate = doT.template($("#jsRsvpConfirmation").html());

  $noBtn.on({
    "click": function(e){
      e.preventDefault();
    }
  });

  $yesBtn.on({
    "click": function(e){
      e.preventDefault();
    }
  });

  function centerElement($ele){
    
  }

})(jQuery);
