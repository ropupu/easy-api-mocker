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
    constructor(groupKey, path, method, parameters, statusCode, headers, body, repository) {
        this.groupKey = groupKey;
        this.path = path;
        this.method = method;
        this.parameters = parameters;
        this.statusCode = statusCode;
        this.headers = headers;
        this.body = body;
        this.reporisotry = repository;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const unixTimestamp = Math.round(new Date().getTime() / 1000);
            this.createdAt = unixTimestamp;
            this.updatedAt = unixTimestamp;
            return yield this.reporisotry.save({
                groupKey: this.groupKey,
                path: this.path,
                method: this.method,
                parameters: this.parameters,
                statusCode: this.statusCode,
                headers: this.headers,
                body: this.body,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            });
        });
    }
    update(method, parameters, statusCode, headers, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const unixTimestamp = Math.round(new Date().getTime() / 1000);
            this.updatedAt = unixTimestamp;
            if (method) {
                this.method = method;
            }
            if (parameters) {
                this.parameters = parameters;
            }
            if (statusCode) {
                this.statusCode = statusCode;
            }
            if (headers) {
                this.headers = headers;
            }
            if (body) {
                this.body = body;
            }
            return yield this.reporisotry.save({
                groupKey: this.groupKey,
                path: this.path,
                method: this.method,
                parameters: this.parameters,
                statusCode: this.statusCode,
                headers: this.headers,
                body: this.body,
                createdAt: this.createdAt,
                updatedAt: this.updatedAt
            });
        });
    }
    get() {
        return {
            groupKey: this.groupKey,
            path: this.path,
            method: this.method,
            parameters: this.parameters,
            statusCode: this.statusCode,
            headers: this.headers,
            body: this.body,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}
exports.Endpoint = Endpoint;
//# sourceMappingURL=Endpoint.js.map