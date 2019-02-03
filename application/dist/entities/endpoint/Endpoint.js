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
class Endpoint {
    constructor(groupKey, path, parameters, statusCode, headers, body) {
        this.groupKey = groupKey;
        this.path = path;
        this.parameters = parameters;
        this.statusCode = statusCode;
        this.headers = headers;
        this.body = body;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const unixTimestamp = Math.round(new Date().getTime() / 1000);
            this.createdAt = unixTimestamp;
            this.updatedAt = unixTimestamp;
            return yield this.reporisotry.save(this);
        });
    }
    getResponse() {
        return {
            statusCode: this.statusCode,
            headers: this.headers,
            body: this.body
        };
    }
}
exports.Endpoint = Endpoint;
//# sourceMappingURL=Endpoint.js.map