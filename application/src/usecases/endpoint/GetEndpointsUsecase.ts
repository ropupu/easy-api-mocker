import { Endpoints } from 'entities/endpoint/Endpoints';
import { GroupsRepository } from 'usecases/repositories/GroupsRepository';
import { EndpointsRepository } from 'usecases/repositories/EndpointsRepository';

export class GetEndpointsUsecase {
  private groupsRepository: GroupsRepository;
  private endpointsRepository: EndpointsRepository;

  constructor(groupsRepository: GroupsRepository, endpointsRepository: EndpointsRepository) {
    this.groupsRepository = groupsRepository;
    this.endpointsRepository = endpointsRepository;
  }
  public async normal(groupKeyString: string): Promise<Endpoints> {
    let endpoints: Endpoints;
    try {
      const group = await this.groupsRepository.findByKey(groupKeyString);
      if (!group) {
        throw new Error('group not found');
      }
      endpoints = await this.endpointsRepository.get(group);
    } catch (e) {
      throw e;
    }
    return new Promise((resolve) => resolve(endpoints));
  }
}