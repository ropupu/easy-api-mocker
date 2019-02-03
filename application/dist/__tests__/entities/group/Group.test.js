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
const Group_1 = require("entities/group/Group");
const GroupRepository_1 = require("adapters/repositories/GroupRepository");
jest.mock('adapters/repositories/GroupRepository');
jest.mock('entities/group/GroupKey');
describe('Group', () => {
    let instance;
    beforeEach(() => {
        const groupRepository = new GroupRepository_1.GroupRepository();
        instance = new Group_1.Group(groupRepository);
    });
    it('check Group.create() returns true', () => __awaiter(this, void 0, void 0, function* () {
        const ret = yield instance.create();
        expect(ret).toBe(true);
    }));
    it('check Group.getKey() returns key (8 characters)', () => __awaiter(this, void 0, void 0, function* () {
        yield instance.create();
        expect(instance.getKey()).toMatch(/\w{8}/);
    }));
});
//# sourceMappingURL=Group.test.js.map