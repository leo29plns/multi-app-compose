"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("@adonisjs/auth");
const access_tokens_1 = require("@adonisjs/auth/access_tokens");
const authConfig = (0, auth_1.defineConfig)({
    default: 'api',
    guards: {
        api: (0, access_tokens_1.tokensGuard)({
            provider: (0, access_tokens_1.tokensUserProvider)({
                tokens: 'accessTokens',
                model: () => Promise.resolve().then(() => require('#models/user'))
            }),
        }),
    },
});
exports.default = authConfig;
//# sourceMappingURL=auth.js.map