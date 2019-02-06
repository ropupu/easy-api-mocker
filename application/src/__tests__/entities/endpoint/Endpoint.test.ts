import { Endpoint } from 'entities/endpoint/Endpoint';
import { EndpointRepository } from 'adapters/repositories/EndpointRepository';

jest.mock('adapters/repositories/EndpointRepository');

describe('Endpoint', () => {
  let instance: Endpoint;
  beforeEach(() => {
    const endpointRepository = new EndpointRepository();
    instance = new Endpoint('123456789012', 'foo/bar', 'GET', 200, {}, { foo: 'bar' },'{ "aaa": "bbb" }', endpointRepository);
  })
  it('check Endpoint.create() returns true', async () => {
    const ret = await instance.create();
    expect(ret).toBe(true);
  })
  it('check Endpoint.update() returns true', async() => {
    const ret = await instance.update('POST');
    expect(ret).toBe(true);
  })
  it('check Endpoint.get() returns object', () => {
    const ret = instance.get();
    expect(ret).toMatchObject({
      groupKey: '123456789012',
      path: 'foo/bar',
      method: 'GET',
      parameters: { foo: 'bar'},
      statusCode: 200,
      headers: {},
      responseBody: '{ "aaa": "bbb" }'
    })
  })
})