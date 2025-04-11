"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@adonisjs/core/logger");
const http_1 = require("@adonisjs/core/http");
class ContainerBindingsMiddleware {
    handle(ctx, next) {
        ctx.containerResolver.bindValue(http_1.HttpContext, ctx);
        ctx.containerResolver.bindValue(logger_1.Logger, ctx.logger);
        return next();
    }
}
exports.default = ContainerBindingsMiddleware;
//# sourceMappingURL=container_bindings_middleware.js.map