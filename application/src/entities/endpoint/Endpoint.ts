import { Group } from 'entities/group/Group';

export class Endpoint {
  private key: string;
  private group: Group;
  private path: string;
  private method: string;
  private headers: object;
  private parameters: object;
  private statusCode: number;
  private responseHeaders: object;
  private responseBody: string;
  private createdAt: number;
  private updatedAt: number;

  constructor(
    group: Group,
    path: string,
    method: string,
    headers: object,
    statusCode: number,
    parameters: object,
    responseHeaders: object,
    responseBody: string,
    ) {
    this.group = group;
    if (!this.validatePath(path)) {
      throw new Error('Endpoint: path is not valid');
    }
    this.path = path;
    if (!this.validateMethod(method)) {
      throw new Error('Endpoint: method is not valid');
    }
    this.method = method;
    if (!this.validateHeaders(headers)) {
      throw new Error('Endpoint: headers is not valid');
    }
    if (!this.validateStatusCode(statusCode)) {
      throw new Error('Endpoint: statuscode is not valid');
    }
    this.statusCode = statusCode;
    if (!this.validateHeaders(responseHeaders)) {
      throw new Error('Endpoint: response headers is not valid');
    }
    this.responseHeaders = responseHeaders;
    if (!this.validateParameters(parameters)) {
      throw new Error('Endpoint: parameters is not valid');
    }
    this.parameters = parameters;
    this.responseBody = responseBody;
  }

  private validatePath(path: string): boolean {
    return path.length > 0;
  }

  private validateMethod(method: string): boolean {
    const validMethods = [
      'GET',
      'POST',
      'PUT',
      'DELETE'
    ];
    return validMethods.indexOf(method) > -1;
  }

  private validateStatusCode(statusCode: number): boolean {
    const validStatusCodes = [
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      226,
      301,
      302,
      303,
      304,
      307,
      308,
      400,
      401,
      403,
      404,
      405,
      406,
      407,
      408,
      409,
      410,
      411,
      412,
      413,
      414,
      415,
      416,
      417,
      418,
      421,
      422,
      423,
      424,
      425,
      426,
      428,
      429,
      431,
      451,
      500,
      501,
      502,
      503,
      504,
      505,
      506,
      507,
      508,
      510,
      511,
    ];
    return validStatusCodes.indexOf(statusCode) > -1;
  }

  private validateHeaders(headers: object): boolean {
    const reg = /\w*/;
    let result = true;
    Object.keys(headers).forEach((key) => {
      if (!reg.test(key)) {
        result = false;
      }
      if (!reg.test(headers[key])) {
        result = false;
      }
    })
    return result;
  }

  private validateParameters(parameters: object): boolean {
    const reg = /\w*/;
    let result = true;
    Object.keys(parameters).forEach((key) => {
      if (!reg.test(key)) {
        result = false;
      }
      if (!reg.test(parameters[key])) {
        result = false;
      }
    })
    return result;
  }

  public setKey(key: string) {
    this.key = key;
  }

  public update(method?: string, headers?: object, statusCode?: number, responseHeaders?: object,  parameters?: object, responseBody?:string): boolean {
    const unixTimestamp = Math.round( new Date().getTime() / 1000 );
    this.updatedAt = unixTimestamp;

    if (method) {
      this.method = method;
    }
    if (headers) {
      this.headers = headers;
    }
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (responseHeaders) {
      this.responseHeaders = responseHeaders;
    }
    if (parameters) {
      this.parameters = parameters;
    }
    if (responseBody) {
      this.responseBody = responseBody;
    }
    return true;
  }

  public getObject(): object {
    return {
      group_key: this.group.getKey(),
      path: this.path,
      method: this.method,
      headers: this.headers,
      parameters: this.parameters,
      status_code: this.statusCode,
      response_headers: this.responseHeaders,
      response_body: this.responseBody,
      created_at: this.createdAt,
      updated_at: this.updatedAt
    }
  }

  public getStatusCode(): number {
    return this.statusCode;
  }

  public getResponseBody(): string {
    return this.responseBody;
  }
}