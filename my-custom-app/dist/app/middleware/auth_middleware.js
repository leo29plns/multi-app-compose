"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthMiddleware {
    constructor() {
        this.redirectTo = '/login';
    }
    async handle(ctx, next, options = {}) {
        await ctx.auth.authenticateUsing(options.guards, { loginRoute: this.redirectTo });
        return next();
    }
}
exports.default = AuthMiddleware;
//# sourceMappingURL=auth_middleware.js.map