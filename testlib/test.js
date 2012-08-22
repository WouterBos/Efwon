/**
 * @fileOverview JS objects
 */








/**
 * Tools to handle and manipulate URLS
 * @namespace
 * @memberOf tst
 * @version 1.1
 * @return {Null} null.
 */
tst.page = function() {
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
};
