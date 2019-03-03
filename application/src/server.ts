import * as Express from "express";
import * as bodyParser from "body-parser";
import { CreateGroupUsecase } from 'usecases/group/CreateGroupUsecase';
import { CreateEndpointUsecase } from 'usecases/endpoint/CreateEndpointUsecase';
import { DeleteEndpointUsecase } from 'usecases/endpoint/DeleteEndpointUsecase';
import { UseEndpointUsecase } from 'usecases/endpoint/UseEndpointUsecase';
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
  }

  public setErrorHandling(): void{
    this.app.use(function (err: Error, req: Express.Request, res: Express.Response, next: Express.NextFunction){
      if (res.headersSent) {
        return next(err)
      }
      console.error(err.stack);
      res.status(500).send({ message: 'Inernal Server Error' });
    }); 
  }
}
const express = new App();
const app = express.app;

app.get('/', (req: Express.Request, res: Express.Response) => {
  res.send('Hello World!');
});

app.post('/api/', async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  try {
    const groupRepository = new GroupRepository();
    const createGroupUsecase = new CreateGroupUsecase(groupRepository);
    const groupKey: string = await createGroupUsecase.normal();
  res.status(201).send({ group_key: groupKey });
  } catch (err) {
    next(err);
  }
});

app.get('/api/:group_key', async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  try {
    const groupKeyString = req.params.group_key;
    const groupsRepository = new GroupsRepository();
    const endpointsRepository = new EndpointsRepository();
    const getEndpointsUsecase = new GetEndpointsUsecase(groupsRepository, endpointsRepository);
    const endpoints = await getEndpointsUsecase.normal(groupKeyString);
    res.status(200).send(endpoints.getObject());
  } catch (err) {
    if (err.message === 'group not found') {
      res.status(404).send({ 'message': 'Group Not Found'});
    }
    next(err);
  }
})

app.post('/api/:group_key', async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  try {
    console.log(req.body);
    const groupKeyString = req.params.group_key;
    const path = req.body.path;
    const method = req.body.method;
    const headers = req.body.headers;
    const statusCode = parseInt(req.body.status_code);
    const parameters = req.body.parameters;
    const responseHeaders = req.body.response_headers;
    const responseBody = req.body.response_body;

    const groupsRepository = new GroupsRepository();
    const endpointRepository = new EndpointRepository();
    const endpointsRepository = new EndpointsRepository();
    const createEndpointUsecase = new CreateEndpointUsecase(groupsRepository, endpointRepository, endpointsRepository);
    await createEndpointUsecase.normal(
      groupKeyString,
      path,
      method,
      headers,
      statusCode,
      parameters,
      responseHeaders,
      responseBody
    );
    res.status(200).send({});
  } catch (err) {
    next(err);
  }
})

app.delete('/api/:group_key', async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  try {
    const endpointKey = req.body.endpoint_key;
    const endpointsRepository = new EndpointsRepository();
    const deleteEndpointUsecase = new DeleteEndpointUsecase(endpointsRepository);
    await deleteEndpointUsecase.normal(endpointKey);
    res.status(200).send({});
  } catch (err) {
    next(err);
  }
})

app.all('/api/:group_key/*', async (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  try {
    const groupKeyString = req.params.group_key;
    const path = req.params[0];
    const method = req.method;
    const headers = req.headers;
    const parameters = req.body;

    const groupsRepository = new GroupsRepository();
    const endpointsRepository = new EndpointsRepository();
    const useEndpointUsecase = new UseEndpointUsecase(groupsRepository, endpointsRepository);
    const endpoint = await useEndpointUsecase.normal(groupKeyString, {
      path: path,
      method: method,
      headers: headers,
      parameters: parameters
    });
    res.status(endpoint.getStatusCode()).send(endpoint.getResponseBody());
  } catch (err) {
    next(err);
  }
}) 

express.setErrorHandling();

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
})