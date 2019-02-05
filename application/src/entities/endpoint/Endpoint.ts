import { RepositoryInterface } from 'adapters/repositories/RepositoryInterface';

export class Endpoint {
  private groupKey: string;
  private path: string;
  private method: string;
  private parameters: object;
  private statusCode: number;
  private headers: object;
  private body: string;
  private createdAt: number;
  private updatedAt: number;
  private reporisotry: RepositoryInterface;

  constructor(groupKey: string, path: string, method: string, parameters: object, statusCode: number, headers: object, body: string, repository: RepositoryInterface) {
    this.groupKey = groupKey;
    this.path = path;
    this.method = method;
    this.parameters = parameters;
    this.statusCode = statusCode;
    this.headers = headers;
    this.body = body;
    this.reporisotry = repository;
  }


  public async create(): Promise<boolean> {
    const unixTimestamp = Math.round( new Date().getTime() / 1000 );
    this.createdAt = unixTimestamp;
    this.updatedAt = unixTimestamp;
    return await this.reporisotry.save({
      groupKey: this.groupKey,
      path: this.path,
      method: this.method,
      parameters: this.parameters,
      statusCode: this.statusCode,
      headers: this.headers,
      body: this.body,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    });
  }

  public async update(method?: string, parameters?: object, statusCode?: number, headers?: object, body?:string): Promise<boolean> {
    const unixTimestamp = Math.round( new Date().getTime() / 1000 );
    this.updatedAt = unixTimestamp;

    if (method) {
      this.method = method;
    }
    if (parameters) {
      this.parameters = parameters;
    }
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (headers) {
      this.headers = headers;
    }
    if (body) {
      this.body = body;
    }

    return await this.reporisotry.save({
      groupKey: this.groupKey,
      path: this.path,
      method: this.method,
      parameters: this.parameters,
      statusCode: this.statusCode,
      headers: this.headers,
      body: this.body,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    });
  }

  public get(): object {
    return {
      groupKey: this.groupKey,
      path: this.path,
      method: this.method,
      parameters: this.parameters,
      statusCode: this.statusCode,
      headers: this.headers,
      body: this.body,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}