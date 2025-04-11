"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("@adonisjs/core/env");
exports.default = await env_1.Env.create(new URL('../', import.meta.url), {
    NODE_ENV: env_1.Env.schema.enum(['development', 'production', 'test']),
    PORT: env_1.Env.schema.number(),
    APP_KEY: env_1.Env.schema.string(),
    HOST: env_1.Env.schema.string({ format: 'host' }),
    LOG_LEVEL: env_1.Env.schema.string(),
    SESSION_DRIVER: env_1.Env.schema.enum(['cookie', 'memory']),
    DB_HOST: env_1.Env.schema.string({ format: 'host' }),
    DB_PORT: env_1.Env.schema.number(),
    DB_USER: env_1.Env.schema.string(),
    DB_PASSWORD: env_1.Env.schema.string.optional(),
    DB_DATABASE: env_1.Env.schema.string()
});
//# sourceMappingURL=env.js.map