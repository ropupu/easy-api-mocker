import { Group } from 'entities/group/Group';
import { GroupKey } from 'entities/group/GroupKey';
import { Endpoint } from 'entities/endpoint/Endpoint';
import { Endpoints } from 'entities/endpoint/Endpoints';

export class EndpointsRepository {
  public async get(group: Group): Promise<Endpoints> {
    const endpoint = new Endpoint(
      group,
      'foo/bar',
      'GET',
      {},
      200,
      {},
      {},
      ""
    );
    return new Promise((resolve) => resolve(new Endpoints([endpoint])));
  }
  public async find(params: object): Promise<Endpoint> {
    const group = new Group(new GroupKey());
    if (params.hasOwnProperty('key')) {
      return new Promise((resolve) => resolve(new Endpoint(
        group,
        'foo/bar',
        'GET',
        {},
        200,
        {},
        {},
        ""))
      )
    }
    if (params.hasOwnProperty('path') && params["path"] === 'use-endpoint-use-case') {
      return new Promise((resolve) => resolve(new Endpoint(
        group,
        'foo/bar',
        'GET',
        {},
        200,
        {},
        {},
        ""))
      )
    }
    return new Promise((resolve) => resolve(null));
  }
  public async delete(endpoint: Endpoint): Promise<boolean> {
    return new Promise((resolve) => resolve(true));
  }
}