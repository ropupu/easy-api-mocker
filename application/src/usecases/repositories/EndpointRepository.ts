import { Endpoint } from 'entities/endpoint/Endpoint';

export interface EndpointRepository {
  store(endpoint: Endpoint): Promise<boolean>;
}