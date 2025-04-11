"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = exports.appKey = void 0;
const env_1 = require("#start/env");
const app_1 = require("@adonisjs/core/services/app");
const helpers_1 = require("@adonisjs/core/helpers");
const http_1 = require("@adonisjs/core/http");
exports.appKey = new helpers_1.Secret(env_1.default.get('APP_KEY'));
exports.http = (0, http_1.defineConfig)({
    generateRequestId: true,
    allowMethodSpoofing: false,
    useAsyncLocalStorage: false,
    cookie: {
        domain: '',
        path: '/',
        maxAge: '2h',
        httpOnly: true,
        secure: app_1.default.inProduction,
        sameSite: 'lax',
    },
});
//# sourceMappingURL=app.js.map