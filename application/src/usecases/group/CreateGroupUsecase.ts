import { GroupKey } from 'entities/group/GroupKey';
import { Group } from 'entities/group/Group';

export class CreateGroupUsecase {
  private groupKey: GroupKey;

  constructor() {
    this.groupKey = new GroupKey();
  }
  public async normal(): Promise<string> {
    const key = await this.groupKey.create();
    const group = new Group(key);
    try {
      await group.create();
    } catch (e) {
      throw e;
    }
    return new Promise((resolve) => resolve(key));
  }
}