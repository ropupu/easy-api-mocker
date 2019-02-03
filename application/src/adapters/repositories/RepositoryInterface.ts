export interface RepositoryInterface {
  save: (data: object) => Promise<boolean>
}