export interface AggregationRepositoryInterface {
  find: (keyMap: object) => Promise<Array<object>>
}