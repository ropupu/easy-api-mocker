import { Endpoint } from 'entities/endpoint/Endpoint';

export class EndpointRepository {
  public async store(endpoint: Endpoint): Promise<boolean> {
    return new Promise((resolve) => resolve(true));
  }
}