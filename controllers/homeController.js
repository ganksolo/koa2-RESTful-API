class HomeController {
    async runtime(ctx, next) {
        const start = Date.now();
        ctx.body = "this is home!"
        await next();
        const ms = Date.now() - start;
        console.log(`${ctx.method}--${ctx.url}--${ms}ms`);
    }
}

module.exports = new HomeController()