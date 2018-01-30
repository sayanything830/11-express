'use strict';

const server = require('../../lib/server.js');
const superagent = require('superagent');
require('jest');

describe('PUT', function() {
  beforeAll(() => server.start(4000, () => console.log(`Listening on 4000`)));
  afterAll(() => server.stop());

  describe('PUT /api/v1/note', () => {
    let resOne, putOne;

    beforeAll(() => {
      return superagent.post(':4000/api/v1/note')
        .send({title: 'hello', content: 'yo'})
        .then(res => {
          resOne = res;
        });
    });
    beforeAll(() => {
      return superagent.put(`:4000/api/v1/note?_id=${resOne._id}`)
        .send({title: 'hi', content: 'wassup'})
        .then(res => putOne = res);
    });
    it('should return a status code 204 when complete', () => {
      expect(putOne.status).toBe(204);
    });
    it('should have a new title', () => {
      expect(putOne.title).not.toBe('hello');
    });
    it('should have the same id', () => {
      expect(resOne._id).toBe(putOne._id);
    });
  });
});