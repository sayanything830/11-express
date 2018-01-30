'use strict';

const server = require('../../lib/server.js');
const superagent = require('superagent');
require('jest');

describe('POST', function() {
  beforeAll(() => server.start(4000, () => console.log(`Listening on 4000`)));
  afterAll(() => server.stop());

  describe('Valid requests', () => {
    describe('POST /api/v1/note', () => {
      let resPost;

      beforeAll(() => {
        return superagent.post(':4000/api/v1/note')
          .send({title: 'hello', content: 'yo'})
          .then(res => {
            resPost = res;
          });
      });
      it('should post and create a new record', () => {
        expect(resPost.body.title).toEqual('hello');
        expect(resPost.body.content).toEqual('yo');
      });
      it('should respond with a satus code 201', () => {
        expect(resPost.status).toBe(201);
      });
      it('should have an _id property on the response object', () => {
        expect(resPost.body).toHaveProperty('_id');
      });
    });
  });
});