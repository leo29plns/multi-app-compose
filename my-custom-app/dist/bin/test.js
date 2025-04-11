"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = 'test';
require("reflect-metadata");
const core_1 = require("@adonisjs/core");
const runner_1 = require("@japa/runner");
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
    .testRunner()
    .configure(async (app) => {
    const { runnerHooks, ...config } = await Promise.resolve().then(() => require('../tests/bootstrap.js'));
    (0, runner_1.processCLIArgs)(process.argv.splice(2));
    (0, runner_1.configure)({
        ...app.rcFile.tests,
        ...config,
        ...{
            setup: runnerHooks.setup,
            teardown: runnerHooks.teardown.concat([() => app.terminate()]),
        },
    });
})
    .run(() => (0, runner_1.run)())
    .catch((error) => {
    process.exitCode = 1;
    (0, core_1.prettyPrintError)(error);
});
//# sourceMappingURL=test.js.map