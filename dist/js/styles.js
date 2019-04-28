/*
	Source:
	van Creij, Maurice (2018). "styles.js: A library of useful functions to add custom stylesheet rules dynamically.", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var Styles = function () {

	// storage for a custom stylesheet
	this.element = null;

	// adds a new style rule to the custom stylesheet
	this.add = function (css) {
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
	};

	// resets the custom stylesheet
	this.reset = function () {
		var element = this.element;
		// remove the old stylesheet
		element.parentNode.removeChild(element);
		// add a new one
		this.init();
	};

	// loads a custom stylesheet
	this.load = function (url) {
		var element = document.createElement('link');
		element.setAttribute('rel', 'stylesheet');
		element.setAttribute('type', 'text/css');
		element.setAttribute('href', url);
		document.getElementsByTagName('head')[0].appendChild(element);
		return element;
	};

	// unloads a custom stylesheet
	this.unload = function (element) {
		element.parentNode.removeChild(element);
	};

	// creates a blank stylesheet for editing
	this.init = function () {
		// create a blank style element
		this.element = document.createElement('style');
		// add an exception for webkit
		var isWebkit = new RegExp('webkit', 'gi');
		if (isWebkit.test(navigator.UserAgent)) { this.element.appendChild(document.createTextNode('')); }
		// add the custom style element to the body
		document.body.appendChild(this.element);
		// return the object
		return this;
	};

	// start up
	this.init();
};

// return as a require.js module
if (typeof define != 'undefined') define([], function () { return Styles });
if (typeof module != 'undefined') module.exports = Styles;
