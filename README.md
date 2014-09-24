# useful.styles.js: CSS Library

A library of useful functions to add custom stylesheet rules dynamically.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-styles">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-styles.js"></script>
```

## How to control the script

### add

```javascript
useful.styles.add(css);
```

Adds custom CSS rules into a page.

**css : {string}** - One or more CSS rules.

### reset

```javascript
useful.styles.reset();
```

Removes all custom rules from the page.

### load

```javascript
useful.styles.load(url);
```

Loads a stylesheet into the page. This is not affected by the "reset" function.

**url : {string}** - URL of a stylesheet.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses grunt.js from http://gruntjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `grunt import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `grunt dev` - Builds the project for development purposes.
+ `grunt prod` - Builds the project for deployment purposes.
+ `grunt watch` - Continuously recompiles updated files during development sessions.
+ `grunt serve` - Serves the project on a temporary web server at http://localhost:8000/ .

## How to test the script

These test uses Selenium from http://docs.seleniumhq.org/

+ `npm install webdriverjs` - Installs the webdriver prerequisite.
+ `npm install mocha -g` - Installs the prerequisite test framework.
+ `java -jar /Applications/Selenium/selenium-server-standalone-2.42.2.jar` - Starts Selenium.
+ `mocha` - Runs the automated tests.

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
