"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyparser_1 = require("@adonisjs/core/bodyparser");
const bodyParserConfig = (0, bodyparser_1.defineConfig)({
    allowedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
    form: {
        convertEmptyStringsToNull: true,
        types: ['application/x-www-form-urlencoded'],
    },
    json: {
        convertEmptyStringsToNull: true,
        types: [
            'application/json',
            'application/json-patch+json',
            'application/vnd.api+json',
            'application/csp-report',
        ],
    },
    multipart: {
        autoProcess: true,
        convertEmptyStringsToNull: true,
        processManually: [],
        limit: '20mb',
        types: ['multipart/form-data'],
    },
});
exports.default = bodyParserConfig;
//# sourceMappingURL=bodyparser.js.map