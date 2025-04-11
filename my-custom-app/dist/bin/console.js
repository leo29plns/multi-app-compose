"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@adonisjs/core");
const APP_ROOT = new URL('../', import.meta.url);
const IMPORTER = (filePath) => {
    if (filePath.startsWith('./') || filePath.startsWith('../')) {
        return Promise.resolve(`${new URL(filePath, APP_ROOT).href}`).then(s => require(s));
    }
    return Promise.resolve(`${filePath}`).then(s => require(s));
};
new core_1.Ignitor(APP_ROOT, { importer: IMPORTER })
    .tap((app) => {
    app.booting(async () => {
        await Promise.resolve().then(() => require('#start/env'));
    });
    app.listen('SIGTERM', () => app.terminate());
    app.listenIf(app.managedByPm2, 'SIGINT', () => app.terminate());
})
    .ace()
    .handle(process.argv.splice(2))
    .catch((error) => {
    process.exitCode = 1;
    (0, core_1.prettyPrintError)(error);
});
//# sourceMappingURL=console.js.map