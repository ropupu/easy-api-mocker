import { GroupsRepository } from 'adapters/repositories/GroupsRepository';

export class GroupKey {
  private key: string;
  private groupsRepository: GroupsRepository;

  constructor() {
    this.groupsRepository = new GroupsRepository();
  }
  public async create(): Promise<string> {
    const words = 'abcdefghijklmnopqrstuvwxyz0123456789_';
    let keyCandidate = '';
    for (let i = 0; i < 12; i++) {
      keyCandidate += words[Math.floor(Math.random()*(words.length))];
    }
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