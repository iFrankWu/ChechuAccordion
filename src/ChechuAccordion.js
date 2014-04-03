(function ($) {
  'use strict';
  var pluginName = 'ChechuAccordion';
  $[pluginName] = (function () {
    /**
     * @param (object) options - A list of options for the plugin
     */
    $[pluginName] = function (element, options) {
      // Plugin parameters
        this.options               = $.extend({}, options);
        this.$element              = $(element);
        this.$container            = this.$element;
        // Dom elements
        this.$accordion            = this.$container.children();
        this.$accordionHeading     = this.$accordion.find('h2');
        this.$accordionHeadingOpen = this.$accordionHeading.addClass('opened');
        this.$accordionContent     = this.$accordionHeading.next('div');

      // init plugin
      return this.Accordion();
    };
    $[pluginName].prototype = {

      Accordion: function () {
        var t = this;
        var toggleAccordion = function(){
            t.$accordionHeading.on('click',function(){
              // Close any opened content
              $.each(t.$accordionHeading, function(){
                  t.$accordionContent.hide().removeClass('slide-Down').parent().find('span').text('+');
              });
              // Show current clicked content
              $(this).next(this.$accordionContent).addClass('slide-Down').css({display:'block'}).parent().find('span').text('-');
            });
        };
        toggleAccordion();
      }
    };
    // Building the plugin
    /**
     * The plugin component
     * @param  {object} options - list of all parameters for the jQuery/Zepto module
     * @return {object} - The jQuery/Zepto DOM element
     */
    return $[pluginName];
  }(window));

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$(this).data(pluginName)) {
        if (options === 'destroy') {
          return;
        }
        $(this).data(pluginName, new $[pluginName](this, options));
      } else {
        var $plugin = $(this).data(pluginName);
      }
    });
  };

})(window.Zepto || window.jQuery);
