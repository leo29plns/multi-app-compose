"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("@adonisjs/core/services/app");
const http_1 = require("@adonisjs/core/http");
class HttpExceptionHandler extends http_1.ExceptionHandler {
    constructor() {
        super(...arguments);
        this.debug = !app_1.default.inProduction;
        this.renderStatusPages = app_1.default.inProduction;
        this.statusPages = {
            '404': (error, { view }) => {
                return view.render('pages/errors/not_found', { error });
            },
            '500..599': (error, { view }) => {
                return view.render('pages/errors/server_error', { error });
            },
        };
    }
    async handle(error, ctx) {
        return super.handle(error, ctx);
    }
    async report(error, ctx) {
        return super.report(error, ctx);
    }
}
exports.default = HttpExceptionHandler;
//# sourceMappingURL=handler.js.map