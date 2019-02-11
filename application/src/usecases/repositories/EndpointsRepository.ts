import { Endpoint } from 'entities/endpoint/Endpoint';
import { Endpoints } from 'entities/endpoint/Endpoints';
import { Group } from 'entities/group/Group';

export interface EndpointsRepository {
  get(group: Group): Promise<Endpoints>;
  find(params: object): Promise<Endpoint>;
}