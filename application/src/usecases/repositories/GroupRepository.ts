import { Group } from 'entities/group/Group';

export interface GroupRepository {
  store(group: Group): Promise<boolean>;
}