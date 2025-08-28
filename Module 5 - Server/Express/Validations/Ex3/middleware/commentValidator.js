import { body, validationResult } from 'express-validator';

export const commentSchema = [
    body('email')
    .isEmail().withMessage('Email must be valid'),
    body('content').isLength({min: 10, max: 1000})
    .withMessage('Invalid comment content')
]

export function validateComment(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = new Error('Comment Validation Failed');
        err.details = errors.array();
        throw err;
    }
    next()
}

