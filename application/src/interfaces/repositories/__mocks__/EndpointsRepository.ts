import { Group } from 'entities/group/Group';
import { Endpoint } from 'entities/endpoint/Endpoint';
import { Endpoints } from 'entities/endpoint/Endpoints';

export class EndpointsRepository {
  public async get(group: Group): Promise<Endpoints> {
    const endpoint = new Endpoint(
      group,
      'foo/bar',
      'GET',
      200,
      {},
      {},
      ""
    );
    return new Promise((resolve) => resolve(new Endpoints([endpoint])));
  }
  public async find(params: object): Promise<Endpoint> {
    return new Promise((resolve) => resolve(null));
  }
}