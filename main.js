
const {
  leveljs,
  Quadstore,
  dataFactory,
} = quadstore;

const main = async () => {
  console.log('Ok, if we\'re here the browser has loaded everything correctly');
  const store = new Quadstore({
    dataFactory,
    backend: leveljs('quadstore'),
  });
  console.log('We have instantiated the store');
  await store.open();
  console.log('We have opened the store');
  await store.put(dataFactory.quad(
    dataFactory.namedNode('http://example.com/theanswer'),
    dataFactory.namedNode('http://example.com/is'),
    dataFactory.literal('42', dataFactory.namedNode('https://www.w3.org/2001/XMLSchema#interger')),
  ));
  console.log('We have added a quad');
  const results = await store.get({});
  console.log('We have queried the store and got the following quads', results.items);
  await store.close();
  console.log('We have closed the store');
};

main().catch((err) => {
  console.error(err);
});
