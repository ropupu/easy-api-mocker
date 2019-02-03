import { RepositoryInterface } from 'adapters/repositories/RepositoryInterface';

export class Group {
  private reporisotry: RepositoryInterface;

  constructor(repository: RepositoryInterface) {
    this.reporisotry = repository;
  }

  public async create(): Promise<boolean> {
    return new Promise((resolve) => resolve(true));
  }
  public getKey(): string {
    return '12345678';
  }
}