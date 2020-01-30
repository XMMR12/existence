/**
 * JavaScript for the Σxistence navbar
 * Copyright (c) 2020 Ray Heffer
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

(function($) {
  "use strict"; // Start of use strict

  // Collapse Navbar once past heading section
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 310) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  navbarCollapse();

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict