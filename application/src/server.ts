import * as Express from "express";
import * as bodyParser from "body-parser";
import { CreateGroupUsecase } from 'usecases/group/CreateGroupUsecase';
import { CreateEndpointUsecase } from 'usecases/endpoint/CreateEndpointUsecase';
import { DeleteEndpointUsecase } from 'usecases/endpoint/DeleteEndpointUsecase';
import { GetEndpointsUsecase } from 'usecases/endpoint/GetEndpointsUsecase';
import { GroupRepository } from 'interfaces/repositories/GroupRepository';
import { GroupsRepository } from 'interfaces/repositories/GroupsRepository';
import { EndpointRepository } from 'interfaces/repositories/EndpointRepository';
import { EndpointsRepository } from 'interfaces/repositories/EndpointsRepository';

const PORT = 3000;

class App {

  public app: Express.Application;

  constructor() {
      this.app = Express();
      this.config();        
  }

  private config(): void{
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
      this.app.use(function (err: Error, req: Express.Request, res: Express.Response, next: Express.NextFunction){
        console.error(err.stack);
        res.status(500).send({ error: err });
      });
  }
}

const app = new App().app;

app.get('/', (req: Express.Request, res: Express.Response) => {
  res.send('Hello World!');
});

app.post('/api/', async (req: Express.Request, res: Express.Response) => {
  const groupRepository = new GroupRepository();
  const createGroupUsecase = new CreateGroupUsecase(groupRepository);
  const groupKey: string = await createGroupUsecase.normal();
  res.status(201).send({ group_key: groupKey });
});

app.get('/api/:group_key', async (req: Express.Request, res: Express.Response) => {
  const groupKeyString = req.params.group_key;
  const groupsRepository = new GroupsRepository();
  const endpointsRepository = new EndpointsRepository();
  const getEndpointsUsecase = new GetEndpointsUsecase(groupsRepository, endpointsRepository);
  const endpoints = await getEndpointsUsecase.normal(groupKeyString);
  res.status(200).send(endpoints.getObject());
})

app.post('/api/:group_key', async (req: Express.Request, res: Express.Response) => {
  const groupKeyString = req.params.group_key;
  const groupsRepository = new GroupsRepository();
  const endpointRepository = new EndpointRepository();
  const endpointsRepository = new EndpointsRepository();
  const createEndpointUsecase = new CreateEndpointUsecase(groupsRepository, endpointRepository, endpointsRepository);
  await createEndpointUsecase.normal(
    groupKeyString,
    req.params.path,
    req.params.method,
    req.params.status_code,
    req.params.headers,
    req.params.parameters,
    req.params.response_body
  );
  res.status(200).send({});
})

app.delete('/api/:group_key', async (req: Express.Request, res: Express.Response) => {
  const endpointKey = req.body.endpoint_key;
  const endpointsRepository = new EndpointsRepository();
  const deleteEndpointUsecase = new DeleteEndpointUsecase(endpointsRepository);
  await deleteEndpointUsecase.normal(endpointKey);
  res.status(200).send({});
})

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
})