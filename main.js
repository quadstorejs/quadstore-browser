
const {
  BrowserLevel,
  Quadstore,
  DataFactory,
  Engine,
} = quadstore;

const bindingsToObj = (bindings) => {
  return Object.fromEntries([...bindings].map(([k, v]) => [k.value, v]));
};

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
  await store.put(dataFactory.quad(
    dataFactory.namedNode('http://example.com/theanswer'),
    dataFactory.namedNode('http://example.com/is'),
    dataFactory.literal('42', dataFactory.namedNode('https://www.w3.org/2001/XMLSchema#interger')),
  ));
  console.log('We have added a new quad');
  const getResults = await store.get({});
  console.log('These are all the quads that we have in the store', getResults.items);
  const queryStr = 'SELECT * {?s ?p ?o}';
  console.log('We are running the following SPARQL query', queryStr);
  const query = await engine.query(queryStr);
  const bindingsStream = await query.execute();
  bindingsStream
    .on('data', (bindings) => {
      console.log('The SPARQL query has produced a new bindings object', bindingsToObj(bindings));
    })
    .on('end', () => {
      console.log('The SPARQL query has ended');
      store.close();
      console.log('We have closed the store');
    })
  ;

};

main().catch((err) => {
  console.error(err);
});
