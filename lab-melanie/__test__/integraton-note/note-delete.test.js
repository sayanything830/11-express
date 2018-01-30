'use strict';

require('jest');

describe('testing dummy', function() {
  it('should return true', () => expect(true).toBeTruthy());
});

// 'use strict';

// const server = require('../lib/server.js');
// const superagent = require('superagent');
// require('jest');

// describe('DELETE', function() {
//     beforeAll(() => server.start(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`)));

//   afterAll(() => server.stop());


//   describe('DELETE /api/v1/note', () => {
//     it('should return a status code 404 with a bad schema', () => {
//       return superagent.delete(':4003/api/v1/doesnotexist')
//         .send()
//         .catch(err => {
//           expect(err.status).toBe(404);
//         });
//     });
//     it('should return a status code 400 with a bad request', () => {
//       return superagent.delete(':4003/api/v1/note')
//         .send({title: '', content: ''})
//         .catch(err => {
//           expect(err.status).toBe(400);
//         });
//     });
//   });
// });
