import { Endpoint } from 'entities/endpoint/Endpoint';

export class Endpoints {
  private endpoints: Array<Endpoint>

  constructor(endpoints: Array<Endpoint>) {
    this.endpoints = endpoints;
  }
  public push(endpoint: Endpoint) {
    this.endpoints.push(endpoint);
  }
  public get(): Array<Endpoint> {
    return this.endpoints;
  }
  public getObject(): Array<object> {
    let response = [];
    this.endpoints.forEach((endpoint) => {
      response.push(endpoint.getObject());
    })
    return response;
  }
}