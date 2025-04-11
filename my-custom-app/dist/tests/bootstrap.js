"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureSuite = exports.runnerHooks = exports.plugins = void 0;
const assert_1 = require("@japa/assert");
const app_1 = require("@adonisjs/core/services/app");
const plugin_adonisjs_1 = require("@japa/plugin-adonisjs");
const test_utils_1 = require("@adonisjs/core/services/test_utils");
exports.plugins = [(0, assert_1.assert)(), (0, plugin_adonisjs_1.pluginAdonisJS)(app_1.default)];
exports.runnerHooks = {
    setup: [],
    teardown: [],
};
const configureSuite = (suite) => {
    if (['browser', 'functional', 'e2e'].includes(suite.name)) {
        return suite.setup(() => test_utils_1.default.httpServer().start());
    }
};
exports.configureSuite = configureSuite;
//# sourceMappingURL=bootstrap.js.map