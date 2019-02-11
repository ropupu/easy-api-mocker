import { DeleteEndpointUsecase } from 'usecases/endpoint/DeleteEndpointUsecase';
import { EndpointsRepository } from 'interfaces/repositories/EndpointsRepository';

jest.mock('interfaces/repositories/EndpointsRepository');

describe('DeleteEndpointUsecase', () => {
  let instance: DeleteEndpointUsecase;
  beforeEach(() => {
    const endpointsRepository = new EndpointsRepository();
    instance = new DeleteEndpointUsecase(endpointsRepository);
  })
  it('check DeleteEndpointUsecase.normal() return true', async() => {
    const result = await instance.normal('123456789012')
    expect(result).toBe(true);
  })
})