'use strict';

require('jest');

describe('testing dummy', function() {
  it('should return true', () => expect(true).toBeTruthy());
});

// 'use strict';

// const server = require('../../lib/server.js');
// const superagent = require('superagent');
// require('jest');

// describe('Server Integration Testing', function() {
//     beforeAll(() => server.start(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`)));

//   afterAll(() => server.stop());

//   describe('Valid requests', () => {
    
//     describe('PUT /api/v1/note', () => {
//       let resOne, putOne;

//       beforeAll(() => {
//         return superagent.post(':4001/api/v1/note')
//           .send({title: 'hello', content: 'yo'})
//           .then(res => {
//             resOne = res;
//           });
//       });
//       beforeAll(() => {
//         return superagent.put(`:4001/api/v1/note?_id=${resOne._id}`)
//           .send({title: 'hi', content: 'wassup'})
//           .then(res => putOne = res);
//       });
//       it('should return a status code 204 when complete', () => {
//         expect(putOne.status).toBe(204);
//       });
//       it('should have a new title', () => {
//         expect(putOne.title).not.toBe('hello');
//       });
//       it('should have the same id', () => {
//         expect(resOne._id).toBe(putOne._id);
//       });
//     });

    
//     describe('Invalid requests', () => {
      
//       describe('PUT /api/v1/note', () => {
//         it('should return a status code 400 without an item', () => {
//           return superagent.put(':4000/api/v1/note')
//             .send()
//             .catch(err => {
//               expect(err.status).toBe(400);
//             });
//         });
//         it('should return a 404 given an incorrect path', () => {
//           return superagent.get(':4000/api/v1/note')
//             .send({title: '', content: ''})
//             .catch(err => {
//               expect(err.status).toBe(404);
//             });
//         });
//       });
    
//     });
//   });
// });