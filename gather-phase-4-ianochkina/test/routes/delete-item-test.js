const {assert} = require('chai')
const request = require('supertest')

const app = require('../../app');
const Item = require('../../models/item');

const {parseTextFromHTML, seedItemToDatabase} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');

describe('Server path: /items/:itemId/delete', () => {

  beforeEach(connectDatabaseAndDropData);
  afterEach(diconnectDatabase);

  describe('POST', () => {
    it('deletes item', async () => {
      const response = await request(app)
        .post(`/items/${singleItem._id}/delete`)
        .type('form');
    });
  });
});
