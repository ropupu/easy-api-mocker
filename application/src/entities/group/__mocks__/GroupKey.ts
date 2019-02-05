export class GroupKey {
  private key = '123456789012';
  public async create(): Promise<string> {
    return new Promise((resolve) => resolve(this.key));
  }
  public getKey(): string {
    return this.key;
  }
}