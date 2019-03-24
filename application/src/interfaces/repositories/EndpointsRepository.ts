import { Group } from 'entities/group/Group';
import { Endpoint } from 'entities/endpoint/Endpoint';
import { Endpoints } from 'entities/endpoint/Endpoints';
import { Database } from 'interfaces/databases/Database';
import { Firestore } from 'interfaces/databases/Firestore';

export class EndpointsRepository {
  private db: Database;
  constructor() {
    this.db = Firestore.getInstance();
  }

  public async get(group: Group): Promise<Endpoints> {
    return new Promise((resolve) => resolve(new Endpoints([])));
  }
  public async find(params: object): Promise<Endpoint> {
    let conditions = [];
    Object.keys(params).forEach((key) => {
      if (typeof params[key] !== 'object') {
        conditions.push({
          column: key,
          operator: '==',
          value: params[key]
        })
      }
    });
    const groupKey = params['group'].getKey();
    const endpoints = await this.db.selectChildren('endpoints', 'groups', groupKey, conditions);
    if (endpoints.length > 0) {
      const key = endpoints[0]['key'];
      const data = endpoints[0]['data'];
      const endpoint = new Endpoint(params['group'], data['path'], data['method'], data['headers'], data['status_code'], data['parameters'], data['response_headers'], data['response_body']);
      endpoint.setKey(key);
      return new Promise((resolve) => resolve(endpoint));
    }
    return new Promise((resolve) => resolve(null));
  }
  public async delete(endpoint: Endpoint): Promise<boolean> {
    return new Promise((resolve) => resolve(true));
  }
}