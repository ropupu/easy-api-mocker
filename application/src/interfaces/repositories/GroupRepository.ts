import { Group } from 'entities/group/Group';
import { Database } from 'interfaces/databases/Database';
import { Firestore } from 'interfaces/databases/Firestore';
import { Item } from 'interfaces/databases/Item';

export class GroupRepository {
  private db: Database;
  constructor() {
    this.db = Firestore.getInstance();
  }

  public async store(group: Group): Promise<boolean> {
    try {
      const result = await this.db.save('groups', {}, group.getKey());
    } catch (error) {
      console.error(error);
      throw error;
    }
    return new Promise((resolve) => resolve(true));
  }
}