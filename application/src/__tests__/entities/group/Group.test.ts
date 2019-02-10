import { Group } from 'entities/group/Group';
import { GroupKey } from 'entities/group/GroupKey';

describe('Group', () => {
  let instance: Group;
  beforeEach(() => {
    instance = new Group(new GroupKey());
  })
  it('check Group.getKey() returns key (12 characters)', () => {
    expect(instance.getKey()).toMatch(/\w{12}/);
  })
})