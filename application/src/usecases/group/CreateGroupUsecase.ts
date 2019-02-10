import { GroupRepository } from 'usecases/repositories/GroupRepository';
import { Group } from 'entities/group/Group';
import { GroupKey } from 'entities/group/GroupKey';

export class CreateGroupUsecase {
  private groupRepository: GroupRepository;

  constructor(groupRepository: GroupRepository) {
    this.groupRepository = groupRepository;
  }
  public async normal(): Promise<string> {
    const groupKey = new GroupKey();
    const group = new Group(groupKey);
    try {
      await this.groupRepository.store(group);
    } catch (e) {
      throw e;
    }
    return new Promise((resolve) => resolve(group.getKey()));
  }
}