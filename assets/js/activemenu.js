/**
 * JavaScript for the Σxistence menu
 * Copyright (c) 2020 Ray Heffer
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

  // Adds the 'active' navigation class based on the URL, to highlight the current page based on the URL
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');      
