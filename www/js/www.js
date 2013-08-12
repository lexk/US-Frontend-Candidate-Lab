// Avoid `console` errors in browsers that lack a console.
;(function() {
    var console = (window.console = window.console || { log:function(){} });
}());
;;(function($){

  "use strict";

  var $noBtn = $(".jsNoBtn");
  var $yesBtn = $(".jsYesBtn");

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

})(jQuery);
