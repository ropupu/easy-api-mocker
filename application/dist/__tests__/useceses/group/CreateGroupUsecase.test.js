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
const CreateGroupUsecase_1 = require("usecases/group/CreateGroupUsecase");
jest.mock('adapters/repositories/GroupRepository');
jest.mock('entities/group/GroupKey');
jest.mock('entities/group/Group');
describe('CreateGroupUsecase', () => {
    let instance;
    beforeEach(() => {
        instance = new CreateGroupUsecase_1.CreateGroupUsecase();
    });
    it('check CreateGroupUsecase.normal() return true', () => __awaiter(this, void 0, void 0, function* () {
        const key = yield instance.normal();
        expect(key).toMatch(/\w{8}/);
    }));
});
//# sourceMappingURL=CreateGroupUsecase.test.js.map