import { RepositoryInterface } from 'adapters/repositories/RepositoryInterface';

export class EndpointRepository implements RepositoryInterface {
  public async save(data: object): Promise<boolean> {
    return new Promise((resolve) => resolve(true));
  }
}