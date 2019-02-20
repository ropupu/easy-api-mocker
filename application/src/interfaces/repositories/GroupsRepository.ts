import { Group } from 'entities/group/Group';
import { GroupKey } from 'entities/group/GroupKey';
import { Database } from 'interfaces/databases/Database';
import { Firestore } from 'interfaces/databases/Firestore';

export class GroupsRepository {
  private db: Database;
  constructor() {
    this.db = Firestore.getInstance();
  }

  public async findByKey(keyString: string): Promise<Group> {
    const result = await this.db.find('groups', keyString);
    if (result.data) {
      const groupKey = new GroupKey(result.key);
      return new Promise((resolve) => resolve(new Group(groupKey)));
    }
    return new Promise((resolve) => resolve(null));
  }
}