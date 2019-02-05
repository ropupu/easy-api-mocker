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
const GroupsRepository_1 = require("adapters/repositories/GroupsRepository");
class GroupKey {
    constructor() {
        this.groupsRepository = new GroupsRepository_1.GroupsRepository();
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const words = 'abcdefghijklmnopqrstuvwxyz0123456789_';
            let keyCandidate = '';
            for (let i = 0; i < 12; i++) {
                keyCandidate += words[Math.floor(Math.random() * (words.length))];
            }
            const keyMap = {
                key: keyCandidate
            };
            const groups = yield this.groupsRepository.find(keyMap);
            if (groups.length > 0) {
                return yield this.create();
            }
            this.key = keyCandidate;
            return new Promise((resolve) => resolve(this.key));
        });
    }
    getKey() {
        return this.key;
    }
}
exports.GroupKey = GroupKey;
//# sourceMappingURL=GroupKey.js.map