import { GroupKey } from 'entities/group/GroupKey';

export class Group {
  private groupKey: GroupKey;
  private createdAt: number;
  private updatedAt: number;

  constructor(groupKey: GroupKey, createdAt?: number, updatedAt?: number) {
    this.groupKey = groupKey;
    const unixTimestamp = Math.round( new Date().getTime() / 1000 );
    this.createdAt = unixTimestamp;
    this.updatedAt = unixTimestamp;
    if (createdAt) {
      this.createdAt = createdAt;
    }
    if (updatedAt) {
      this.updatedAt = updatedAt;
    }
  }

  public getKey(): string {
    return this.groupKey.getKey();
  }
}