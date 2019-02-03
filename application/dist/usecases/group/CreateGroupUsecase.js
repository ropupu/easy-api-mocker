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
class CreateGroupUsecase {
    normal() {
        return __awaiter(this, void 0, void 0, function* () {
            const groupRepository = new GroupRepository_1.GroupRepository();
            const group = new Group_1.Group(groupRepository);
            try {
                yield group.create();
            }
            catch (e) {
                throw e;
            }
            return new Promise((resolve) => resolve(group.getKey()));
        });
    }
}
exports.CreateGroupUsecase = CreateGroupUsecase;
//# sourceMappingURL=CreateGroupUsecase.js.map