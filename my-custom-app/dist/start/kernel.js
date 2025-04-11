"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const router_1 = require("@adonisjs/core/services/router");
const server_1 = require("@adonisjs/core/services/server");
server_1.default.errorHandler(() => Promise.resolve().then(() => require('#exceptions/handler')));
server_1.default.use([
    () => Promise.resolve().then(() => require('#middleware/container_bindings_middleware')),
    () => Promise.resolve().then(() => require('@adonisjs/static/static_middleware')),
    () => Promise.resolve().then(() => require('@adonisjs/vite/vite_middleware')),
]);
router_1.default.use([
    () => Promise.resolve().then(() => require('@adonisjs/core/bodyparser_middleware')),
    () => Promise.resolve().then(() => require('@adonisjs/session/session_middleware')),
    () => Promise.resolve().then(() => require('@adonisjs/shield/shield_middleware')),
    () => Promise.resolve().then(() => require('@adonisjs/auth/initialize_auth_middleware'))
]);
exports.middleware = router_1.default.named({
    auth: () => Promise.resolve().then(() => require('#middleware/auth_middleware'))
});
//# sourceMappingURL=kernel.js.map