(function ($) {
  'use strict';
  var pluginName = 'ChechuAccordion';
  $[pluginName] = (function () {
    /**
     * @param (object) options - A list of options for the plugin
     */
    $[pluginName] = function (element, options) {
        var defaults = {
            effect: 'slideDown', // slideUp, slideDown,rotate
            slideTime: 1.0,      // time in seconds
            hideAllPanels: true, // true or false
            loaderImg: true      // true or false
        };
        // Plugin parameters
        this.options               = $.extend({},defaults, options);
        this.$element              = $(element);
        this.$container            = this.$element;

        // Plugin Options
        this.$effect               = this.options.effect ;
        this.$slideTime            = this.options.slideTime;
        this.$hideAllPanels        = this.options.hideAllPanels;
        this.$loaderImg            = this.options.loaderImg;
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
            t.$accordionHeading.on('click',function(event){
              // Close any opened content or close/open panels individually.
              var slidePanel = (t.$hideAllPanels) ? closeToggles() : individualToggle.apply(this);
              // Show loader in case is activated
              if(t.$loaderImg)  t.$accordion.addClass('loader');
              // Show current clicked content
              showOrHideContent.apply(this);
            });
        };
        var closeToggles = function(){
          $.each(t.$accordionHeading, function(){
              t.$accordionContent.hide().removeAttr('style').parent().find('span').text('+');
          });
        };
        var individualToggle = function(){
          $.each(t.$accordionHeading,function(){
             t.$accordionHeading.removeClass('opened');
          });
          // Current 'h2.opened'
          $(this).addClass('opened').bind('click',function(){
              showOrHideContent.apply(this);
          }).on('click',function() {
              showOrHideContent.apply(this);
          });
        };
        var showOrHideContent = function(){
          var nextAccordion = $(this).next(this.$accordionContent);
          (nextAccordion.css('display') == 'none') ? nextAccordion.show() : nextAccordion.hide();
            nextAccordion.css("" + Prefixes() + "" , ""+t.$effect+" "+t.$slideTime+"s ease")
                .parent()
                  .find('span')
                    .text(($(this).find('span').text() == '+') ? '-' : '+' );
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
