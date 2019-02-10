import { Group } from 'entities/group/Group';

export class GroupRepository {
  public async store(group: Group): Promise<boolean> {
    return new Promise((resolve) => resolve(true));
  }
}