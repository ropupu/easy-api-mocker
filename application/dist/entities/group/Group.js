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
class Group {
    constructor(repository) {
        this.groupKey = new GroupKey_1.GroupKey();
        this.reporisotry = repository;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const unixTimestamp = Math.round(new Date().getTime() / 1000);
            this.createdAt = unixTimestamp;
            this.updatedAt = unixTimestamp;
            yield this.groupKey.create();
            return yield this.reporisotry.save({
                key: this.groupKey.getKey(),
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            });
        });
    }
    getKey() {
        return this.groupKey.getKey();
    }
}
exports.Group = Group;
//# sourceMappingURL=Group.js.map