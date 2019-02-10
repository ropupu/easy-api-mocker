import * as Express from "express";
import * as bodyParser from "body-parser";
import { CreateGroupUsecase } from 'usecases/group/CreateGroupUsecase';
import { GroupRepository } from 'interfaces/repositories/GroupRepository';

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

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
})