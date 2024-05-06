# styles.js: CSS Library

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

A library of useful functions to add custom stylesheet rules dynamically.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/styles.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/styles.js'
], function(Styles) {
	...
});
```

Or use imported as a component in existing projects.

```js
@import {Styles} from "js/styles.js');
```

## How to control the script

### add

```javascript
styles.add(css);
```

Adds custom CSS rules into a page.

**css : {string}** - One or more CSS rules.

### reset

```javascript
styles.reset();
```

Removes all custom rules from the page.

### load

```javascript
styles.load(url);
```

Loads a stylesheet into the page. This is not affected by the "reset" function.

**url : {string}** - URL of a stylesheet.

## How to test the script

These test uses Selenium from http://docs.seleniumhq.org/

+ `npm install webdriverjs` - Installs the webdriver prerequisite.
+ `npm install mocha -g` - Installs the prerequisite test framework.
+ `java -jar /Applications/Selenium/selenium-server-standalone-2.42.2.jar` - Starts Selenium.
+ `mocha` - Runs the automated tests.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
