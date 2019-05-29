import request from 'supertest'

import app from '../app'

test('It should require authentication', async (): Promise<any> => {
  expect.assertions(1)

  const result = await request(app)
    .post('/graphql')
    .set('Content-Type', 'application/json')
  // @ts-ignore
  expect(result.statusCode).toBe(401)
})
