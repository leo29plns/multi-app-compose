"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("#start/env");
const lucid_1 = require("@adonisjs/lucid");
const dbConfig = (0, lucid_1.defineConfig)({
    connection: 'postgres',
    connections: {
        postgres: {
            client: 'pg',
            connection: {
                host: env_1.default.get('DB_HOST'),
                port: env_1.default.get('DB_PORT'),
                user: env_1.default.get('DB_USER'),
                password: env_1.default.get('DB_PASSWORD'),
                database: env_1.default.get('DB_DATABASE'),
            },
            migrations: {
                naturalSort: true,
                paths: ['database/migrations'],
            },
        },
    },
});
exports.default = dbConfig;
//# sourceMappingURL=database.js.map