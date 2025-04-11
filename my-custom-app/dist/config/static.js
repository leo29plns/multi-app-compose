"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const static_1 = require("@adonisjs/static");
const staticServerConfig = (0, static_1.defineConfig)({
    enabled: true,
    etag: true,
    lastModified: true,
    dotFiles: 'ignore',
});
exports.default = staticServerConfig;
//# sourceMappingURL=static.js.map