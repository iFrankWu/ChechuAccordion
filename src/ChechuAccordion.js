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

        // Plugin Options
        this.$effect               = this.options.effect        || 'slideDown'; // slideUp, slideDown
        this.$slideTime            = this.options.slideTime     || 1.0;        // Time in milliseconds
        this.$closeAnySlide        = this.options.closeAnySlide || true;
        this.$loaderImg            = (this.options.loaderImg) ? true : false;

        // Dom elements
        this.$accordion            = this.$container.children();
        this.$accordionHeading     = this.$accordion.find('h2');
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
              closeToggles();
              // Show loader in case is activated
              if(t.$loaderImg)  t.$accordion.addClass('loader');
              // Show current clicked content
              showCurrentContent.apply(this);
            });
        };
        var closeToggles = function(){
          $.each(t.$accordionHeading, function(){
              t.$accordionContent.hide().removeAttr('style').parent().find('span').text('+');
          });
        };
        var showCurrentContent = function(){
          $(this).next(this.$accordionContent).show()
              .css("" + Prefixes() + "" , ""+t.$effect+" "+t.$slideTime+"s ease")
                .parent()
                  .find('span')
                    .text('-');
        };
        // Get Css Prefixes in order to animate the movement with any web browser
        var Prefixes = function () {
          var styles = window.getComputedStyle(document.documentElement, ''),
            pre = (Array.prototype.slice
              .call(styles)
              .join('')
              .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
            )[1],
            dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
              return "-" + pre + "-animation";
        };
        // init
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
