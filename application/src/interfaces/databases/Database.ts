import { Condition } from 'interfaces/databases/Condition';
import { Item } from 'interfaces/databases/Item';

export interface Database {
  save(tableName: string, data: object, key?: string): Promise<string>;
  saveChild(tableName: string, parentTableName: string, parentKey: string, data: object, key?: string): Promise<string>;
  select(tableName: string, conditions: Array<Condition>): Promise<Array<Item>>;
  selectChildren(tableName: string, parentTableName: string, parentKey: string, conditions: Array<Condition>): Promise<Array<Item>>;
  find(tableName: string, key: string): Promise<Item|null>;
}