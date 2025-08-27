let counter = 0;

export function addCounter(req, res, next) {
    counter ++;
    req.counter = counter;
    next();
}