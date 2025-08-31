export function reqLogger(req, res, next) {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
    
}

export function resFormatter(req, res, next) {
    const oldSend = res.send.bind(res);
    const oldJson = res.json.bind(res);

    function formatRes(oldFunc, data) {
        return {
            statusCode: res.statusCode,
            response: oldFunc(data)
        }
    }

    res.send = function(data) {
        formatRes(oldSend, data)
    }

    res.json = function(data) {
        formatRes(oldJson, data)
    }

    next();
}