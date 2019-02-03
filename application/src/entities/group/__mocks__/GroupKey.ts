export class GroupKey {
  private key = '12345678';
  public async create(): Promise<string> {
    return new Promise((resolve) => resolve(this.key));
  }
  public getKey(): string {
    return this.key;
  }
}