import { RepositoriesInterface } from 'adapters/repositories/RepositoriesInterface';

export class EndpointsRepository implements RepositoriesInterface {
  public async find(keyMap: object): Promise<Array<object>> {
    return new Promise((resolve) => resolve([]));
  }
}