import { UseEndpointUsecase } from 'usecases/endpoint/UseEndpointUsecase';
import { GroupsRepository } from 'interfaces/repositories/GroupsRepository';
import { EndpointsRepository } from 'interfaces/repositories/EndpointsRepository';
import { Endpoint } from 'entities/endpoint/Endpoint';

jest.mock('interfaces/repositories/GroupsRepository');
jest.mock('interfaces/repositories/EndpointsRepository');

describe('UseEndpointUsecase', () => {
  let instance: UseEndpointUsecase;
  beforeEach(() => {
    const groupsRepository = new GroupsRepository();
    const endpointsRepository = new EndpointsRepository();
    instance = new UseEndpointUsecase(groupsRepository, endpointsRepository);
  })
  it('check UseEndpointUsecase.normal() return Endpoint', async() => {
    const endpoint = await instance.normal('group-key-xx', {"path": "use-endpoint-use-case"});
    expect(Object.keys(endpoint.getObject())).toEqual([
      "path",
      "method",
      "headers",
      "parameters",
      "status_code",
      "response_headers",
      "response_body",
      "created_at",
      "updated_at"
    ])
  })
})