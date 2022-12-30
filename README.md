# styles.js: CSS Library

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

Or import into an MVC framework.

```js
var Styles = require('js/styles.js');
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

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## How to test the script

These test uses Selenium from http://docs.seleniumhq.org/

+ `npm install webdriverjs` - Installs the webdriver prerequisite.
+ `npm install mocha -g` - Installs the prerequisite test framework.
+ `java -jar /Applications/Selenium/selenium-server-standalone-2.42.2.jar` - Starts Selenium.
+ `mocha` - Runs the automated tests.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens) and at [WoollyMittens.nl](https://www.woollymittens.nl/).
