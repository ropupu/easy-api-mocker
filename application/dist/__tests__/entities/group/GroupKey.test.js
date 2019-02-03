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
const GroupKey_1 = require("entities/group/GroupKey");
jest.mock('adapters/repositories/GroupsRepository');
describe('GroupKey', () => {
    let instance;
    beforeEach(() => {
        instance = new GroupKey_1.GroupKey();
    });
    it('check GroupKey.create() returns key string(8 characters)', () => __awaiter(this, void 0, void 0, function* () {
        const key = yield instance.create();
        expect(key).toMatch(/\w{8}/);
    }));
    it('check GroupKey.getKey() returns key string', () => __awaiter(this, void 0, void 0, function* () {
        const key = yield instance.create();
        expect(instance.getKey()).toBe(key);
    }));
});
//# sourceMappingURL=GroupKey.test.js.map