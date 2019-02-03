import { CreateGroupUsecase } from 'usecases/group/CreateGroupUsecase';
import { Group } from 'entities/group/Group';
import { GroupRepository } from 'adapters/repositories/GroupRepository';

jest.mock('adapters/repositories/GroupRepository');
jest.mock('entities/group/GroupKey');
jest.mock('entities/group/Group');

describe('CreateGroupUsecase', () => {
  let instance: CreateGroupUsecase;
  beforeEach(() => {
    instance = new CreateGroupUsecase();
  })
  it('check CreateGroupUsecase.normal() return true', async() => {
    const key = await instance.normal();
    expect(key).toMatch(/\w{8}/);
  })
})