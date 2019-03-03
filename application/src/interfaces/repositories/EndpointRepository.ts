import { Endpoint } from 'entities/endpoint/Endpoint';
import { Database } from 'interfaces/databases/Database';
import { Firestore } from 'interfaces/databases/Firestore';

export class EndpointRepository {
  private db: Database;
  constructor() {
    this.db = Firestore.getInstance();
  }
  public async store(endpoint: Endpoint): Promise<boolean> {
    try {
      const result = await this.db.saveChild('endpoints', 'groups', endpoint.getGroupKey(), endpoint.getObject());
    } catch (error) {
      console.error(error);
      throw error;
    }
    return new Promise((resolve) => resolve(true));
  }
}