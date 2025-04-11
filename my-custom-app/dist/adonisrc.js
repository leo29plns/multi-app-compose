"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("@adonisjs/core/app");
exports.default = (0, app_1.defineConfig)({
    commands: [() => Promise.resolve().then(() => require('@adonisjs/core/commands')), () => Promise.resolve().then(() => require('@adonisjs/lucid/commands'))],
    providers: [
        () => Promise.resolve().then(() => require('@adonisjs/core/providers/app_provider')),
        () => Promise.resolve().then(() => require('@adonisjs/core/providers/hash_provider')),
        {
            file: () => Promise.resolve().then(() => require('@adonisjs/core/providers/repl_provider')),
            environment: ['repl', 'test'],
        },
        () => Promise.resolve().then(() => require('@adonisjs/core/providers/vinejs_provider')),
        () => Promise.resolve().then(() => require('@adonisjs/core/providers/edge_provider')),
        () => Promise.resolve().then(() => require('@adonisjs/session/session_provider')),
        () => Promise.resolve().then(() => require('@adonisjs/vite/vite_provider')),
        () => Promise.resolve().then(() => require('@adonisjs/shield/shield_provider')),
        () => Promise.resolve().then(() => require('@adonisjs/static/static_provider')),
        () => Promise.resolve().then(() => require('@adonisjs/lucid/database_provider')),
        () => Promise.resolve().then(() => require('@adonisjs/auth/auth_provider'))
    ],
    preloads: [() => Promise.resolve().then(() => require('#start/routes')), () => Promise.resolve().then(() => require('#start/kernel'))],
    tests: {
        suites: [
            {
                files: ['tests/unit/**/*.spec(.ts|.js)'],
                name: 'unit',
                timeout: 2000,
            },
            {
                files: ['tests/functional/**/*.spec(.ts|.js)'],
                name: 'functional',
                timeout: 30000,
            },
        ],
        forceExit: false,
    },
    metaFiles: [
        {
            pattern: 'resources/views/**/*.edge',
            reloadServer: false,
        },
        {
            pattern: 'public/**',
            reloadServer: false,
        },
    ],
    assetsBundler: false,
    hooks: {
        onBuildStarting: [() => Promise.resolve().then(() => require('@adonisjs/vite/build_hook'))],
    },
});
//# sourceMappingURL=adonisrc.js.map