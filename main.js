
const {
  BrowserLevel,
  Quadstore,
  DataFactory,
  Engine,
} = quadstore;

const main = async () => {
  const dataFactory = new DataFactory();
  console.log('Ok, if we\'re here the browser has loaded everything correctly');
  const store = new Quadstore({
    dataFactory,
    backend: new BrowserLevel('quadstore'),
  });
  const engine = new Engine(store);
  console.log('We have instantiated the store');
  await store.open();
  console.log('We have opened the store');
  await store.clear();
  console.log('We have cleared the store');
  for (let i = 0; i < 100; i += 1) {
    await store.put(dataFactory.quad(
      dataFactory.namedNode(`http://example.com/s${i}`),
      dataFactory.namedNode('http://example.com/p'),
      dataFactory.literal(`${i}`, dataFactory.namedNode('https://www.w3.org/2001/XMLSchema#interger')),
    ));
  }
  console.log('We have added 100 quads');
  const queryStr = 'SELECT * {?s ?p ?o}';
  console.log('We are running the following SPARQL query', queryStr);
  const query = await engine.query(queryStr);
  const bindingsStream = await query.execute();
  let count = 0;
  bindingsStream
    .on('data', (bindings) => {
      count += 1;
    })
    .on('end', () => {
      console.log(`The SPARQL query has ended with a count of ${count} matched quads`);
      store.close();
      console.log('We have closed the store');
    })
  ;

};

main().catch((err) => {
  console.error(err);
});
