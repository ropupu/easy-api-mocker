import { Endpoint } from 'entities/endpoint/Endpoint';
import { EndpointsRepository } from 'usecases/repositories/EndpointsRepository';

export class DeleteEndpointUsecase {
  private endpointsRepository: EndpointsRepository; 

  constructor(
    endpointsRepository: EndpointsRepository 
  ) {
    this.endpointsRepository = endpointsRepository;
  }
  public async normal(
    endpointKey: string
  ): Promise<boolean> {
    try {
      const endpoint: Endpoint = await this.endpointsRepository.find({key: endpointKey});
      if (!endpoint){
        throw new Error('endpoint doesnt exist');
      }
      this.endpointsRepository.delete(endpoint);
    } catch (e) {
      throw e;
    }
    return new Promise((resolve) => resolve(true));
  }
}