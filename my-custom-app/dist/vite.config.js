"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const client_1 = require("@adonisjs/vite/client");
exports.default = (0, vite_1.defineConfig)({
    plugins: [
        (0, client_1.default)({
            entrypoints: ['resources/css/app.css', 'resources/js/app.js'],
            reload: ['resources/views/**/*.edge'],
        }),
    ],
});
//# sourceMappingURL=vite.config.js.map