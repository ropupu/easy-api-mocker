import { RepositoryInterface } from 'adapters/repositories/RepositoryInterface';

export class Group {
  private groupKey: string;
  private createdAt: number;
  private updatedAt: number;
  private reporisotry: RepositoryInterface;

  constructor(groupKey: string) {
    this.groupKey = groupKey;
  }

  public async create(): Promise<boolean> {
    const unixTimestamp = Math.round( new Date().getTime() / 1000 );
    this.createdAt = unixTimestamp;
    this.updatedAt = unixTimestamp;
    return await this.reporisotry.save(this);
  }
}