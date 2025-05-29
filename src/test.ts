
import { DataFactory, RdfStore, Engine } from './bundle.js';

let then = Date.now();

const log = (message: string) => { 
  const now = Date.now();
  console.log(new Date().toISOString(), message, `+${now - then}ms`);
  then = now;
};

const main = async () => { 
  
  log('Welcome!');

  const dataFactory = new DataFactory();
  log('Data factory instantiated');

  // const store = new Quadstore({
  //   dataFactory,
  //   backend: new BrowserLevel('quadstore'),
  // });
  const store = RdfStore.createDefault();
  log('Store instantiated');

  const engine = new Engine(store as any);
  log('Query engine instantiated');

  // await store.open();
  // log('Store opened');

  // await store.clear();
  // log('Store cleared');

  const qty = 200_000;
  const source_quads = new Array(qty).fill(true).map((_, i) => dataFactory.quad(
    dataFactory.namedNode(`ex://s${i}`),
    dataFactory.namedNode(`ex://p${i}`),
    dataFactory.namedNode(`ex://o${i}`),
    dataFactory.namedNode(`ex://g${i % 1000}`),
  ));
  source_quads.forEach(q => store.addQuad(q));
  log('Added 200k quads to the store');

  const queryStr = 'SELECT DISTINCT ?g WHERE { GRAPH ?g { ?s ?p ?o . } }';
  const query = await engine.query(queryStr);
  if (query.resultType !== 'bindings') {
    throw new Error('Unexpected result type');
  }
  const bindingsStream = await query.execute();
  const quads = await (bindingsStream as any).toArray();
  log(`Evaluated query "${queryStr}", ${quads.length} matching quads found`);

  // await store.close();
  log('Store closed');
};

main().catch(console.error);
