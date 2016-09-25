[RiotJS](http://riotjs.com/) + [PugJS](https://pugjs.org) + [Webpack](http://webpack.github.io/)
=============

Install
----------

```bash
$ npm install --save-dev tag-pug-loader
```
And add the loader to your `webpack.config.js`:

```javascript
module.exports = {
    // ...
    module: {
      loaders: [
        { test: /\.tag$/, exclude: /node_modules/, loader: 'tag-pug-loader' }
      ]
    }
}
```

Description
----------

Write RiotJS tags using PugJS (ex Jade)

Example
----------

app.tag
```javascript
app
  p Hello world
```

app.js
```
var riot = require('riot')
var app = require('app.tag')

riot.mount(app)
```

Running The Test Suite
----------

```bash
$ npm test
```

## Contributing:

Feel free to open issues to propose stuff and participate. Pull requests are also welcome.

## License:

[MIT](http://en.wikipedia.org/wiki/MIT_License)
