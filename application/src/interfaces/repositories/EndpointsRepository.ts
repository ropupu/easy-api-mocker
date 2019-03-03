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
    let endpoints = [];
    if (params['group']) {
      const groupKey = params['group'].getKey();
      endpoints = await this.db.selectChildren('endpoints', 'groups', groupKey, conditions);
    } else {
      endpoints = await this.db.select('endpoints', conditions);
    }
    if (endpoints) {
      return new Promise((resolve) => resolve(endpoints[0]));
    }
    return new Promise((resolve) => resolve(null));
  }
  public async delete(endpoint: Endpoint): Promise<boolean> {
    return new Promise((resolve) => resolve(true));
  }
}