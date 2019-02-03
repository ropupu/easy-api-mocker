import { GroupKey } from 'entities/group/GroupKey';
import { GroupsRepository } from 'adapters/repositories/GroupsRepository';

jest.mock('adapters/repositories/GroupsRepository');

describe('GroupKey', () => {
  let instance: GroupKey;
  beforeEach(() => {
    instance = new GroupKey();
  })
  it('check Groupkey.create() returns key string(8 characters)', async () => {
    const key = await instance.create();
    expect(key).toMatch(/\w{8}/);
  })
})