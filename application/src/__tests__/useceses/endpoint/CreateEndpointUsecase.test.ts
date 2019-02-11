import { CreateEndpointUsecase } from 'usecases/endpoint/CreateEndpointUsecase';
import { GroupsRepository } from 'interfaces/repositories/GroupsRepository';
import { EndpointRepository } from 'interfaces/repositories/EndpointRepository';
import { EndpointsRepository } from 'interfaces/repositories/EndpointsRepository';

jest.mock('interfaces/repositories/GroupRepository');

describe('CreateEndpointUsecase', () => {
  let instance: CreateEndpointUsecase;
  beforeEach(() => {
    const groupsRepository = new GroupsRepository();
    const endpointRepository = new EndpointRepository();
    const endpointsRepository = new EndpointsRepository();
    instance = new CreateEndpointUsecase(groupsRepository, endpointRepository, endpointsRepository);
  })
  it('check CreateEndpointUsecase.normal() return true', async() => {
    const result = await instance.normal(
      '123456789012',
      'foo/bar',
      'GET',
      200,
      {},
      {},
      JSON.stringify({"foo": "bar"})
    );
    expect(result).toBe(true);
  })
})