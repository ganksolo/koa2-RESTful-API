class AdminController {
    async auth(ctx, next) {
        ctx.body = 'this is get auth for Admin!';
    }
    async role(ctx, next) {
        ctx.body = 'this is admin role data';
    }
    async config(ctx, next) {
        ctx.body = 'this is admin config!depoly';
    }
}

module.exports = new AdminController()