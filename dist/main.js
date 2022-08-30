import { DataFactory, Quadstore, BrowserLevel, Engine } from './bundle.js';
const log = (outputEl, message) => {
    outputEl.textContent += `\n\n${new Date().toISOString()} ${message}`;
};
const main = async (outputEl) => {
    log(outputEl, 'Welcome!');
    const dataFactory = new DataFactory();
    log(outputEl, 'Data factory instantiated');
    const store = new Quadstore({
        dataFactory,
        backend: new BrowserLevel('quadstore'),
    });
    log(outputEl, 'Store instantiated');
    const engine = new Engine(store);
    log(outputEl, 'Query engine instantiated');
    await store.open();
    log(outputEl, 'Store opened');
    await store.clear();
    log(outputEl, 'Store cleared');
    for (let i = 0; i < 100; i += 1) {
        await store.put(dataFactory.quad(dataFactory.namedNode(`http://example.com/s${i}`), dataFactory.namedNode('http://example.com/p'), dataFactory.literal(`${i}`, dataFactory.namedNode('https://www.w3.org/2001/XMLSchema#interger'))));
    }
    log(outputEl, 'Added 100 quads to the store');
    const queryStr = 'SELECT * {?s ?p ?o}';
    const query = await engine.query(queryStr);
    if (query.resultType !== 'bindings') {
        throw new Error('Unexpected result type');
    }
    const bindingsStream = await query.execute();
    const quads = await bindingsStream.toArray();
    log(outputEl, `Evaluated query "${queryStr}", ${quads.length} matching quads found`);
    await store.close();
    log(outputEl, 'Store closed');
};
document.onreadystatechange = () => {
    const outputEl = document.querySelector('#output');
    main(outputEl).catch((err) => {
        outputEl.textContent = err.stack;
    });
};
