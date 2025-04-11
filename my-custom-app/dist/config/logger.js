"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("#start/env");
const app_1 = require("@adonisjs/core/services/app");
const logger_1 = require("@adonisjs/core/logger");
const loggerConfig = (0, logger_1.defineConfig)({
    default: 'app',
    loggers: {
        app: {
            enabled: true,
            name: env_1.default.get('APP_NAME'),
            level: env_1.default.get('LOG_LEVEL'),
            transport: {
                targets: (0, logger_1.targets)()
                    .pushIf(!app_1.default.inProduction, logger_1.targets.pretty())
                    .pushIf(app_1.default.inProduction, logger_1.targets.file({ destination: 1 }))
                    .toArray(),
            },
        },
    },
});
exports.default = loggerConfig;
//# sourceMappingURL=logger.js.map