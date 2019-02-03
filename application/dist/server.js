"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const bodyParser = require("body-parser");
const CreateGroupUsecase_1 = require("usecases/group/CreateGroupUsecase");
const PORT = 3000;
class App {
    constructor() {
        this.app = Express();
        this.config();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(function (err, req, res, next) {
            console.error(err.stack);
            res.status(500).send({ error: err });
        });
    }
}
const app = new App().app;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/api/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const createGroupUsecase = new CreateGroupUsecase_1.CreateGroupUsecase();
    const groupKey = yield createGroupUsecase.normal();
    res.status(201).send({ group_key: groupKey });
}));
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
//# sourceMappingURL=server.js.map