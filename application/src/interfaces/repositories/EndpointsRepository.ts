import { Group } from 'entities/group/Group';
import { Endpoint } from 'entities/endpoint/Endpoint';
import { Endpoints } from 'entities/endpoint/Endpoints';

export class EndpointsRepository {
  public async get(group: Group): Promise<Endpoints> {
    return new Promise((resolve) => resolve(new Endpoints([])));
  }
  public async find(params: object): Promise<Endpoint> {
    return new Promise((resolve) => resolve(null));
  }
}