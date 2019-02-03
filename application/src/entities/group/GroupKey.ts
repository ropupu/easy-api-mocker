import { GroupsRepository } from 'adapters/repositories/GroupsRepository';

export class GroupKey {
  private key: string;
  private groupsRepository: GroupsRepository;

  constructor() {
    this.groupsRepository = new GroupsRepository();
  }
  public async create(): Promise<string> {
    const keyCandidate: string = Math.random().toString(36).slice(-8);
    const keyMap: object = {
      key: keyCandidate
    };
    const groups: Array<object> = await this.groupsRepository.find(keyMap);
    if (groups.length > 0) {
      return await this.create();
    }
    this.key = keyCandidate;
    return new Promise((resolve) => resolve(this.key));
  }
  public getKey(): string {
    return this.key;
  }
}