const request = require('supertest');

test('Verify Google is online', async () => {
  const response = await request('https://www.google.com').get('/');
  expect(response.statusCode).toBe(200); // 200 means "Success"
});
