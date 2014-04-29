/*
	Source:
	van Creij, Maurice (2012). "useful.styles.js: A library of useful functions to add custom stylesheet rules dynamically.", version 20121126, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

(function (useful) {

	// Invoke strict mode
	"use strict";

	// private functions
	var styles = styles || {};

	// adds a new style rule to the custom stylesheet
	styles.add = function (css) {
		var stylesheet = styles.element.sheet || styles.element.styleSheet;
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
	};

	// resets the custom stylesheet
	styles.reset = function () {
		var element = styles.element;
		// remove the old stylesheet
		element.parentNode.removeChild(element);
		// add a new one
		styles.init();
	};

	// loads a custom stylesheet
	styles.load = function (url) {
		var element = document.createElement('link');
		element.setAttribute('rel', 'stylesheet');
		element.setAttribute('type', 'text/css');
		element.setAttribute('href', url);
		document.getElementsByTagName('head')[0].appendChild(element);
	};

	// creates a blank stylesheet for editing
	styles.init = function () {
		// create a blank style element
		styles.element = document.createElement('style');
		// add an exception for webkit
		var isWebkit = new RegExp('webkit', 'gi');
		if (isWebkit.test(navigator.UserAgent)) { styles.element.appendChild(document.createTextNode('')); }
		// add the custom style element to the body
		document.body.appendChild(styles.element);
	};

	// public functions
	useful.styles = {};
	useful.styles.add = styles.add;
	useful.styles.reset = styles.reset;
	useful.styles.load = styles.load;

	styles.init();

}(window.useful = window.useful || {}));
