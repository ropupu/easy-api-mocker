import { Group } from 'entities/group/Group';
import { GroupKey } from 'entities/group/GroupKey';
import { GroupRepository } from 'adapters/repositories/GroupRepository';

jest.mock('adapters/repositories/GroupRepository');
jest.mock('entities/group/GroupKey')

describe('Group', () => {
  let instance: Group;
  beforeEach(() => {
    const groupRepository = new GroupRepository();
    instance = new Group(groupRepository);
  })
  it('check Group.create() returns true', async () => {
    const ret = await instance.create();
    expect(ret).toBe(true);
  })
  it('check Group.getKey() returns key (12 characters)', async() => {
    await instance.create();
    expect(instance.getKey()).toMatch(/\w{12}/);
  })
})