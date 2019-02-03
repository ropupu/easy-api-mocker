import * as Express from "express";
import * as bodyParser from "body-parser";
import { CreateGroupUsecase } from 'usecases/group/CreateGroupUsecase';

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
  const createGroupUsecase = new CreateGroupUsecase();
  let groupKey: string = '';
  try {
    groupKey = await createGroupUsecase.normal();
  } catch (e) {
    throw e;
  }
  res.status(201).send({ group_key: groupKey });
});

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
})