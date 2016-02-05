# frontend-framework

The POD Point frontend framework is a library of base styles and components designed for rapid prototyping.

[View demo](https://pod-point.github.io/frontend-framework)

## Installation

```bash
npm install --save-dev pp-frontend-framework
```

Then either link to the production ready files:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/path/to/node_modules/pp-frontend-framework/build/css/style.css">
</head>
<body>
    <script src="/path/to/node_modules/pp-frontend-framework/build/js/script.js"></script>
</body>
</html>
```

Or import the entry points into your project. For Sass, this is done by:

```sass
@import 'path/to/node_modules/pp-frontend-framework/src/scss/style.scss';
```

And for the JavaScripts:

```js
require('/path/to/node_modules/pp-frontend-framework/src/js/script.js');
```

## Development

When working on the package, you'll probably want to run the watchers:

```bash
npm run watch
```

Single 

Once you've finished, you will need to run the following to package up the css, ready for building:

```bash
npm run build-css
```
