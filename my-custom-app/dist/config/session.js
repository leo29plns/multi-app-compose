"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("#start/env");
const app_1 = require("@adonisjs/core/services/app");
const session_1 = require("@adonisjs/session");
const sessionConfig = (0, session_1.defineConfig)({
    enabled: true,
    cookieName: 'adonis-session',
    clearWithBrowser: false,
    age: '2h',
    cookie: {
        path: '/',
        httpOnly: true,
        secure: app_1.default.inProduction,
        sameSite: 'lax',
    },
    store: env_1.default.get('SESSION_DRIVER'),
    stores: {
        cookie: session_1.stores.cookie(),
    },
});
exports.default = sessionConfig;
//# sourceMappingURL=session.js.map