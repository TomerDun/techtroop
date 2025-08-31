export function logger(req, res, next) {
    console.log(`${Date.now()} | ${req.method} /`)
    next();
}