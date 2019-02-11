import { Endpoint } from 'entities/endpoint/Endpoint';
import { GroupsRepository } from 'usecases/repositories/GroupsRepository';
import { EndpointRepository } from 'usecases/repositories/EndpointRepository';
import { EndpointsRepository } from 'usecases/repositories/EndpointsRepository';

export class CreateEndpointUsecase {
  private groupsRepository: GroupsRepository;
  private endpointsRepository: EndpointsRepository;
  private endpointRepository: EndpointRepository; 

  constructor(
    groupsRepository: GroupsRepository, 
    endpointRepository: EndpointRepository,
    endpointsRepository: EndpointsRepository 
  ) {
    this.groupsRepository = groupsRepository;
    this.endpointRepository = endpointRepository;
    this.endpointsRepository = endpointsRepository;
  }
  public async normal(
    groupKeyString: string,
    path: string,
    method: string,
    statusCode: number,
    headers: object,
    parameters: object,
    responseBody: string,
  ): Promise<boolean> {
    try {
      const group = await this.groupsRepository.findByKey(groupKeyString);
      const existingEndpoint = await this.endpointsRepository.find({
        group: group,
        path: path,
        method: method,
        statusCode: statusCode,
        headers: headers,
        parameters: parameters
      })
      if (existingEndpoint){
        throw new Error('same endpoint already exists');
      }
      const endpoint = new Endpoint(
        group,
        path,
        method,
        statusCode,
        headers,
        parameters,
        responseBody
      );
      this.endpointRepository.store(endpoint);
    } catch (e) {
      throw e;
    }
    return new Promise((resolve) => resolve(true));
  }
}