declare const hashConfig: any;
export default hashConfig;
declare module '@adonisjs/core/types' {
    interface HashersList extends InferHashers<typeof hashConfig> {
    }
}
