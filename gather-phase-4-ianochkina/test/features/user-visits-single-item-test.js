const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('User creates an item and goes to main', () => {
    describe('and clicks created item', () => {
      it('description is rendered', () => {
        const title = 'Baby bear'
        const description = 'Baby bear single item'
        const imageUrl = 'https://cdn.shopify.com/s/files/1/0522/3629/products/baby-grizzly-bear-black-and-white_large.jpg?v=1493656449'
        const itemToCreate = buildItemObject({
          title,
          description,
          imageUrl,
        });
        browser.url('/items/create');
        browser.setValue('#title-input', itemToCreate.title);
        browser.setValue('#description-input', itemToCreate.description);
        browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
        browser.click('#submit-button');
        browser.click('.item-card a');
        assert.include(browser.getText('body'), itemToCreate.description);
      });
    });
});
