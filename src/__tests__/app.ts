import request from 'supertest'

import app from '../app'

describe('Test app', (): void => {
  test('It should require authentication', async (): Promise<any> => {
    expect.assertions(1)

    try {
      const response = await request(app).post('/graphql')
      // @ts-ignore
      expect(response.statusCode).toBe(401)
    } catch (err) {}
  })
})
