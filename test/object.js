const should = require('chai').should();
const locales = require('../dist/helpers/locales');

describe('Locales', () => {
  it('english.js - It has a correct format', () => {
    locales.en.should.be.an('object');
  });

  it('spanish.js - It has a correct format', () => {
    locales.es.should.be.an('object');
  });
});
