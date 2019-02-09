import { AggregationRepositoryInterface } from 'adapters/repositories/AggregationRepositoryInterface';

export class GroupsRepository implements AggregationRepositoryInterface {
  public async find(keyMap: object): Promise<Array<object>> {
    return new Promise((resolve) => resolve([]));
  }
}