"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const hash_1 = require("@adonisjs/core/services/hash");
const helpers_1 = require("@adonisjs/core/helpers");
const orm_1 = require("@adonisjs/lucid/orm");
const lucid_1 = require("@adonisjs/auth/mixins/lucid");
const access_tokens_1 = require("@adonisjs/auth/access_tokens");
const AuthFinder = (0, lucid_1.withAuthFinder)(() => hash_1.default.use('scrypt'), {
    uids: ['email'],
    passwordColumnName: 'password',
});
class User extends (0, helpers_1.compose)(orm_1.BaseModel, AuthFinder) {
}
User.accessTokens = access_tokens_1.DbAccessTokensProvider.forModel(User);
exports.default = User;
__decorate([
    (0, orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, orm_1.column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, orm_1.column)({ serializeAs: null }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], User.prototype, "createdAt", void 0);
__decorate([
    orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], User.prototype, "updatedAt", void 0);
//# sourceMappingURL=user.js.map