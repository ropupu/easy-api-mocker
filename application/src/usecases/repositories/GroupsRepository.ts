import { Group } from 'entities/group/Group';

export interface GroupsRepository {
  findByKey(keyString: string): Promise<Group>;
}