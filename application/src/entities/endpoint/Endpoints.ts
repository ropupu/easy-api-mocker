import { AggregationRepositoryInterface } from 'adapters/repositories/AggregationRepositoryInterface';

export class Endpoints {
  private repository: AggregationRepositoryInterface;
  constructor(repository: AggregationRepositoryInterface) {
    this.repository = repository;
  }
}