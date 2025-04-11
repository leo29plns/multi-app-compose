"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("@adonisjs/vite");
const viteBackendConfig = (0, vite_1.defineConfig)({
    buildDirectory: 'public/assets',
    manifestFile: 'public/assets/.vite/manifest.json',
    assetsUrl: '/assets',
    scriptAttributes: {
        defer: true,
    },
});
exports.default = viteBackendConfig;
//# sourceMappingURL=vite.js.map