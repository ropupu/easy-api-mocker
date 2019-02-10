import { CreateGroupUsecase } from 'usecases/group/CreateGroupUsecase';
import { GroupRepository } from 'interfaces/repositories/GroupRepository';

jest.mock('interfaces/repositories/GroupRepository');

describe('CreateGroupUsecase', () => {
  let instance: CreateGroupUsecase;
  beforeEach(() => {
    const groupRepository = new GroupRepository();
    instance = new CreateGroupUsecase(groupRepository);
  })
  it('check CreateGroupUsecase.normal() return groupKey', async() => {
    const key = await instance.normal();
    expect(key).toMatch(/\w{12}/);
  })
})