import { GetEndpointsUsecase } from 'usecases/endpoint/GetEndpointsUsecase';
import { GroupsRepository } from 'interfaces/repositories/GroupsRepository';
import { EndpointsRepository } from 'interfaces/repositories/EndpointsRepository';
import { Endpoints } from 'entities/endpoint/Endpoints';

jest.mock('interfaces/repositories/GroupsRepository');
jest.mock('interfaces/repositories/EndpointsRepository');

describe('GetEndpointsUsecase', () => {
  let instance: GetEndpointsUsecase;
  beforeEach(() => {
    const groupsRepository = new GroupsRepository();
    const endpointsRepository = new EndpointsRepository();
    instance = new GetEndpointsUsecase(groupsRepository, endpointsRepository);
  })
  it('check GetEndpointsUsecase.normal() return Endpoints', async() => {
    const endpoints = await instance.normal('group-key-xx');
    expect(endpoints.get().length).toBeGreaterThan(0);
  })
})