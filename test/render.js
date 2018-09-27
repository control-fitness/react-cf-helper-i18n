const expect = require('chai').expect;
const I18n = require('../dist/helpers/i18n');

describe('Undefined value', () => {
  it('Undefined locale', () => {
    expect(I18n.t('endefined')).to.equal('Undefined locale');
  });
});
