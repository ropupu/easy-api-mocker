import { Group } from 'entities/group/Group';
import { GroupRepository } from 'adapters/repositories/GroupRepository';

export class CreateGroupUsecase {

  public async normal(): Promise<string> {
    const groupRepository = new GroupRepository();
    const group = new Group(groupRepository);
    try {
      await group.create();
    } catch (e) {
      throw e;
    }
    return new Promise((resolve) => resolve(group.getKey()));
  }
}