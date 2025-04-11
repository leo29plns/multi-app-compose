"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shield_1 = require("@adonisjs/shield");
const shieldConfig = (0, shield_1.defineConfig)({
    csp: {
        enabled: false,
        directives: {},
        reportOnly: false,
    },
    csrf: {
        enabled: true,
        exceptRoutes: [],
        enableXsrfCookie: false,
        methods: ['POST', 'PUT', 'PATCH', 'DELETE'],
    },
    xFrame: {
        enabled: true,
        action: 'DENY',
    },
    hsts: {
        enabled: true,
        maxAge: '180 days',
    },
    contentTypeSniffing: {
        enabled: true,
    },
});
exports.default = shieldConfig;
//# sourceMappingURL=shield.js.map