
# Using quadstore in browsers

This project serves as a reference for developers looking to use [quadstore][0]
in web browsers.

The `webpack.config.js` file contains the reference configuration for Webpack
**5.x** that is used to transform `dist/bundle.js` (initially produced by the
TypeScript compiler) into an actual bundle ready for use in browsers as an ES
module.

The bundle contains [quadstore][0], the [quadstore-comunica][4] SPARQL query
engine, the [browser-level][1] backend for persistent storage via IndexedDB and
[rdf-data-factory][3], an implementation of the RDF/JS `DataFactory` interface.

| package              | version         |
|----------------------|-----------------|
| `quadstore`          | `11.0.0-beta.4` |
| `quadstore-comunica` | `3.0.0-beta.5`  |
| `browser-level`      | `1.0.1`         |
| `rdf-data-factory`   | `1.1.1`         |

The `static/index.html` page and associated `dist/main.js` script provide a 
small demonstration of how to use all of the above.

The bundle file can also be requested via https://cdn.jsdelivr.net/gh/belayeng/quadstore-webpack-bundle/quadstore.bundle.js 

## How to build

```shell
npm install
npm run build
```

## Issues

Issues should be reported in quadstore's [issue tracker][2].

[0]: https://www.npmjs.com/package/quadstore
[1]: https://www.npmjs.com/package/browser-level
[2]: https://github.com/belayeng/quadstore/issues
[3]: https://www.npmjs.com/package/rdf-data-factory
[4]: https://www.npmjs.com/package/quadstore-comunica
