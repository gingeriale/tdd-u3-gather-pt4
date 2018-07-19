const {assert} = require('chai');
const {buildItemObject, parseTextFromHTML} = require('../test-utils');

describe('User goes to main page', () => {
  describe('hovers item', () => {
    it('and trash icon appears', () => {
      browser.url('/');
      browser.moveToObject('.item-card');
    });
  });
});
