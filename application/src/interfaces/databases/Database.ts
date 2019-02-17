import { Item } from 'interfaces/databases/Item';

export interface Database {
  save(tableName: string, data: object, key?: string): Promise<string>;
  find(tableName: string, key: string): Promise<Item|null>;
}