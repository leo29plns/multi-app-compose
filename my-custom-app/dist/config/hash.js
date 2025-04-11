"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hash_1 = require("@adonisjs/core/hash");
const hashConfig = (0, hash_1.defineConfig)({
    default: 'scrypt',
    list: {
        scrypt: hash_1.drivers.scrypt({
            cost: 16384,
            blockSize: 8,
            parallelization: 1,
            maxMemory: 33554432,
        }),
    },
});
exports.default = hashConfig;
//# sourceMappingURL=hash.js.map