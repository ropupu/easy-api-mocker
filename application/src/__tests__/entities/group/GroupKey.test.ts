import { GroupKey } from 'entities/group/GroupKey';

describe('GroupKey', () => {
  let instance: GroupKey;
  beforeEach(() => {
    instance = new GroupKey();
  })
  it('check GroupKey.getKey() returns key string(12 characters)', () => {
    const key = instance.getKey();
    expect(key).toMatch(/\w{12}/);
  })
})