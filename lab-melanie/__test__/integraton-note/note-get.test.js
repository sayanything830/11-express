'use strict';

const server = require('../../lib/server.js');
const superagent = require('superagent');
require('jest');

describe('GET', function() {
  beforeAll(() => server.start(4000, () => console.log(`Listening on 4000`)));
  afterAll(() => server.stop());

  describe('GET /api/v1/note', () => {
    let resOne, resTwo, getOne;

    beforeAll(() => {
      return superagent.post(':4000/api/v1/note')
        .send({title: 'hello', content: 'yo'})
        .then(res => {
          resOne = res;
          return superagent.post(':4000/api/v1/note')
            .send({title: 'bye', content: 'yup'})
            .then(res => {
              resTwo = res;
            });
        });
    });
    beforeAll(() => {
      return superagent.get(':4000/api/v1/note')
        .then(res => getOne = res);
    });

    it('should return an array of ids', () => {
      getOne.body.map(id => {
        expect(id).toMatch(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);
      });
    });
    it('should return a status code 200', () => {
      expect(getOne.status).toBe(200);
    });
    it('should contain the two ids of records posted', () => {
      expect(getOne.body).toContain(resOne.body._id);
      expect(getOne.body).toContain(resTwo.body._id);
    });
  });
});