import type { Config } from '@japa/runner/types';
export declare const plugins: Config['plugins'];
export declare const runnerHooks: Required<Pick<Config, 'setup' | 'teardown'>>;
export declare const configureSuite: Config['configureSuite'];
