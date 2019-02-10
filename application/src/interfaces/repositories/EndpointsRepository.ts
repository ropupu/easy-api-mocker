import { Group } from 'entities/group/Group';
import { Endpoints } from 'entities/endpoint/Endpoints';

export class EndpointsRepository {
  public async get(group: Group): Promise<Endpoints> {
    return new Promise((resolve) => resolve(new Endpoints([])));
  }
}