
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

| package              | version  |
|----------------------|----------|
| `quadstore`          | `13.1.0` |
| `quadstore-comunica` | `4.3.1`  |
| `browser-level`      | `1.0.1`  |
| `rdf-data-factory`   | `1.1.2`  |

The `static/index.html` page and associated `dist/main.js` script provide a 
small demonstration of how to use all of the above.

The bundle file is also served at 
https://cdn.jsdelivr.net/gh/jacoscaz/quadstore-browser/dist/bundle.js
and can be used in webpages as follows:

```html
<script type="module">
    import {
        Quadstore,
        Engine,
        BrowserLevel,
        DataFactory,
    } from 'https://cdn.jsdelivr.net/gh/jacoscaz/quadstore-browser/dist/bundle.js';
    const backend = new BrowserLevel('quadstore');
    const dataFactory = new DataFactory();
    const store = new Quadstore({ backend, dataFactory });
    const engine = new Engine(store);
    await store.open();
    await store.clear();
    await store.put(dataFactory.quad(dataFactory.namedNode('ex://s'), dataFactory.namedNode('ex://p'), dataFactory.namedNode('ex://o')));
    const stream = await engine.queryBindings(`SELECT * WHERE { ?s ?p ?o }`);
    stream.on('data', console.log);
</script>
```

## How to build

```shell
npm install
npm run build
```

## Issues

Issues should be reported in quadstore's [issue tracker][2].

[0]: https://www.npmjs.com/package/quadstore
[1]: https://www.npmjs.com/package/browser-level
[2]: https://github.com/jacoscaz/quadstore/issues
[3]: https://www.npmjs.com/package/rdf-data-factory
[4]: https://www.npmjs.com/package/quadstore-comunica
