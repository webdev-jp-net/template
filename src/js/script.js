import '@babel/polyfill';

const sample = ['aaa', 'bbb', 'ccc', 'abc'];

const filterSample = sample.filter(str => str.includes('a'));
const findSample = sample.find(str => str.includes('a'));

const cl = str => {
  const $dom = document.createElement('div');
  $dom.innerHTML = str;
  document.body.appendChild($dom);
};

cl(sample);
cl(`filter"a" ... ${filterSample} / find"a" ... ${findSample}`);
cl(`mode ... ${process.env.NODE_ENV}`);

Promise.resolve().then(res => console.log('Promise'));
