/*
	Source:
	van Creij, Maurice (2012). "useful.styles.js: A library of useful functions to add custom stylesheet rules dynamically.", version 20121126, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// public object
var useful = useful || {};

(function(){

	// Invoke strict mode
	"use strict";

	// Create a private object for this library
	useful.styles = {

		// adds a new style rule to the custom stylesheet
		add : function (css) {
			var stylesheet = this.element.sheet || this.element.styleSheet;
			// split the input into rules and properties
			var parts = css.split(/{|}/);
			// add the custom styles
			for (var a = 0, b = parts.length - 1; a < b; a += 2) {
				// add the custom styles
				if (stylesheet.insertRule) {
					stylesheet.insertRule(parts[a] + ' {' + parts[a + 1] + '}', 0);
				} else {
					stylesheet.addRule(parts[a], parts[a + 1], 0);
				}
			}
		},

		// resets the custom stylesheet
		reset : function () {
			var element = this.element;
			// remove the old stylesheet
			element.parentNode.removeChild(element);
			// add a new one
			this.init();
		},

		// loads a custom stylesheet
		load : function (url) {
			var element = document.createElement('link');
			element.setAttribute('rel', 'stylesheet');
			element.setAttribute('type', 'text/css');
			element.setAttribute('href', url);
			document.getElementsByTagName('head')[0].appendChild(element);
		},

		// creates a blank stylesheet for editing
		init : function () {
			// create a blank style element
			this.element = document.createElement('style');
			// add an exception for webkit
			var isWebkit = new RegExp('webkit', 'gi');
			if (isWebkit.test(navigator.UserAgent)) { this.element.appendChild(document.createTextNode('')); }
			// add the custom style element to the body
			document.body.appendChild(this.element);
		}

	};

	// startup
	useful.styles.init();

	// return as a require.js module
	if (typeof module !== 'undefined') {
		exports = module.exports = useful.styles;
	}

})();
