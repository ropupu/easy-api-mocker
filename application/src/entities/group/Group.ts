import { GroupKey } from 'entities/group/GroupKey';
import { RepositoryInterface } from 'adapters/repositories/RepositoryInterface';

export class Group {
  private groupKey: GroupKey;
  private createdAt: number;
  private updatedAt: number;
  private reporisotry: RepositoryInterface;

  constructor(repository: RepositoryInterface) {
    this.groupKey = new GroupKey();
    this.reporisotry = repository;
  }

  public async create(): Promise<boolean> {
    const unixTimestamp = Math.round( new Date().getTime() / 1000 );
    this.createdAt = unixTimestamp;
    this.updatedAt = unixTimestamp;
    await this.groupKey.create();
    return await this.reporisotry.save({
      key: this.groupKey.getKey(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    });
  }
  public getKey(): string {
    return this.groupKey.getKey();
  }
}