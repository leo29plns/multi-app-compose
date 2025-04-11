import { HttpContext, ExceptionHandler } from '@adonisjs/core/http';
import type { StatusPageRange, StatusPageRenderer } from '@adonisjs/core/types/http';
export default class HttpExceptionHandler extends ExceptionHandler {
    protected debug: boolean;
    protected renderStatusPages: any;
    protected statusPages: Record<StatusPageRange, StatusPageRenderer>;
    handle(error: unknown, ctx: HttpContext): unknown;
    report(error: unknown, ctx: HttpContext): unknown;
}
