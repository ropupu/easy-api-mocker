export interface RepositoriesInterface {
  find: (keyMap: object) => Promise<Array<object>>
}