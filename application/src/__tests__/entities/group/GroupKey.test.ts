import { GroupKey } from 'entities/group/GroupKey';
import { GroupsRepository } from 'adapters/repositories/GroupsRepository';

jest.mock('adapters/repositories/GroupsRepository');

describe('GroupKey', () => {
  let instance: GroupKey;
  beforeEach(() => {
    instance = new GroupKey();
  })
  it('check GroupKey.create() returns key string(12 characters)', async () => {
    const key = await instance.create();
    expect(key).toMatch(/\w{12}/);
  })
  it('check GroupKey.getKey() returns key string', async() => {
    const key = await instance.create();
    expect(instance.getKey()).toBe(key);
  })
})