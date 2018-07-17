const expect = require('chai').expect
const locales = require('../dist/helpers/locales');

let analize = (obj, paths = []) => {
  //const paths = [];

  // keys from object
  const keys = Object.keys(obj);

  // validate is array
  if (typeof keys === 'object') {

    // iterate keys
    keys.forEach((key) => {

      // validate is array
      if (typeof obj[key] === 'object') {

        // re-run 
        analize(obj[key], paths);
      } else {

        // path
        // FIXME: Use path like foo.bar
        const path = key;

        // test
        it(`The property ${path} is not empty.`, () => {
          expect(obj[key]).to.not.be.empty;
        });
      }
    });
  }
}

describe('Spanish', () => {
  analize(locales.es); 
});

describe('English', () => {
  analize(locales.en);
});