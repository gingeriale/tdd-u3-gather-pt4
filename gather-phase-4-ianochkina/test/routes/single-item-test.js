const {assert} = require('chai');
const request = require('supertest');

const app = require('../../app');
const Item = require('../../models/item');

const {parseTextFromHTML, seedItemToDatabase} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');

describe('Server path: /items/:id', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  // Write your test blocks below:

  describe('GET', () => {
    it('renders single item view', async () => {
      const title = 'Baby bear'
      const description = 'Baby bear single item'
      const imageUrl = 'https://cdn.shopify.com/s/files/1/0522/3629/products/baby-grizzly-bear-black-and-white_large.jpg?v=1493656449'
      const singleItem = await seedItemToDatabase({
        title,
        description,
        imageUrl,
      });

      const response = await request(app).get(`/items/${singleItem._id}`);

      assert.include(parseTextFromHTML(response.text, '#item-title'), singleItem.title);
      assert.include(parseTextFromHTML(response.text, '#item-description'), singleItem.description);
    });
  });

});
