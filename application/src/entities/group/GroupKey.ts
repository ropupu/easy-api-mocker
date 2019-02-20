export class GroupKey {
  private key: string;

  constructor(key?: string) {
    const words = 'abcdefghijklmnopqrstuvwxyz0123456789_';
    let keyCandidate = '';
    for (let i = 0; i < 12; i++) {
      keyCandidate += words[Math.floor(Math.random()*(words.length))];
    }
    this.key = key ? key : keyCandidate;
  }
  public getKey(): string {
    return this.key;
  }
}