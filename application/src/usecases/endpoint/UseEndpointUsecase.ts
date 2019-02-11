import { Endpoint } from 'entities/endpoint/Endpoint';
import { GroupsRepository } from 'usecases/repositories/GroupsRepository';
import { EndpointsRepository } from 'usecases/repositories/EndpointsRepository';

export class UseEndpointUsecase {
  private groupsRepository: GroupsRepository;
  private endpointsRepository: EndpointsRepository;
  constructor(groupsRepository: GroupsRepository, endpointsRepository: EndpointsRepository) {
    this.groupsRepository = groupsRepository;
    this.endpointsRepository = endpointsRepository;
  }

  public async normal(groupKeyString: string, endpointParams: object): Promise<Endpoint> {
    let endpoint: Endpoint;
    try {
      const group = await this.groupsRepository.findByKey(groupKeyString);
      endpointParams["group"] = group;
      endpoint = await this.endpointsRepository.find(endpointParams);
    } catch (e) {
      throw e;
    }
    return new Promise((resolve) => resolve(endpoint));
  }
}