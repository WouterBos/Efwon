/**
 * @fileOverview Test JavaScript file.
 */








/**
 * Root namespace for PulseWeb
 * @namespace
 */
var tst = {};






/**
 * Tools to handle and manipulate URLS
 * @namespace
 */
tst.page = (function() {
  /* Start public */
  return {
    /**
     * Initializes widgets and runs methods that have to be run during a
     * ondocumentready.
     *
     * @memberOf pw.page
     * @example
     * pw.page.init();
     */
    init: function() {
      pw.style.browserDetect();
      pw.widget.toggler.init();
    }
  };
  /* End public */
})();






/**
 * Forms stuff
 * @namespace
 */
tst.forms = (function() {
  /* Start public */
  return {
    /**
     * If a user presses "Enter" in a text input field, it will initiate a
     * click event on the predefined submit button.
     * @memberOf pw.forms
     *
     * @param {Object} config Configuration object.
     * @param {Object} config.root The root element of the form field elements.
     * @param {Object} config.submitButton The submit button.
     * @example
     * pw.forms.enterCatch({ root: element, submitButton: element});
     */
    enterCatch: function(config) {
      jQuery(config.root).find(':text').on('keypress', (function(event) {
        if (event.which == 13) { jQuery(config.submitButton).click(); }
      }));
    }
  };
  /* End public */
})();





/**
 * Widgets namespace
 * @namespace
 */
pw.widget = {};





/**
 * Toggler
 * @namespace
 */
tst.widget.toggler = (function() {
  /* Start public */
  return {
    /**
     * Initializes toggler.
     * @memberOf pw.widget.toggler
     *
     * @example
     * pw.widget.toggler.init();
     */
    init: function() {
      jQuery('.pw_toggler').each(function() {
        var root = jQuery(this);
        var content = root.find('.local_content');
        var contentInner = root.find('.local_contentInner');

        root.find('.k-grid-pw-toggle').on('click', function() {
          content.stop(true, true);
          if (content.is(':hidden')) {
            content.show();
            contentInner.slideDown(200);
          } else {
            contentInner.slideUp(200, function() { content.hide(); });
          }
        });
      });
    }
  };
  /* End public */
})();
