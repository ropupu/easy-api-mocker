import { Group } from 'entities/group/Group';
import { GroupKey } from 'entities/group/GroupKey';

export class GroupsRepository {
  public async findByKey(keyString: string): Promise<Group> {
    const groupKey = new GroupKey();
    return new Promise((resolve) => resolve(new Group(groupKey)));
  }
}