import { users } from "../usersModel.js";

export function validateId(req, res, next) {
    if (isNaN(Number(req.params.id))) {
        const idError = new Error('Invalid ID');
        idError.code = 400; 
        throw idError;
    }
    next();
}

export function userExists(req, res, next) {
    const filteredUsers = users.filter(u => u.id == req.params.id);
    if (!filteredUsers.length) {
        const notFoundError = new Error('User not foud');
        notFoundError.code = 400;
        throw notFoundError;
    }

    next()
}