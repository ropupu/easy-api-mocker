import { RepositoryInterface } from 'adapters/repositories/RepositoryInterface';

export class Endpoint {
  private groupKey: string;
  private path: string;
  private parameters: object;
  private statusCode: number;
  private headers: object;
  private body: string;
  private createdAt: number;
  private updatedAt: number;
  private reporisotry: RepositoryInterface;

  constructor(groupKey: string, path: string, parameters: object, statusCode: number, headers: object, body: string) {
    this.groupKey = groupKey;
    this.path = path;
    this.parameters = parameters;
    this.statusCode = statusCode;
    this.headers = headers;
    this.body = body;
  }

  public async create(): Promise<boolean> {
    const unixTimestamp = Math.round( new Date().getTime() / 1000 );
    this.createdAt = unixTimestamp;
    this.updatedAt = unixTimestamp;
    return await this.reporisotry.save(this);
  }
  public getResponse(): object {
    return {
      statusCode: this.statusCode,
      headers: this.headers,
      body: this.body
    };
  }
}