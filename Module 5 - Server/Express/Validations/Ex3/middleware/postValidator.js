import Ajv from "ajv";
import { addFormats } from 'ajv-formats';
import { postSchema } from "../scehmas/postSchema";

const ajv = new Ajv();
addFormats(ajv);
const validatePost = ajv.compile(postSchema);

// Middleware
function postValidation(req, res, next) {
    const valid = validatePost(req.body);
    if (valid) { next() }
    else {
        console.log(validatePost.errors)
        const error = new Error("Post validation error")
        error.status = 400;
        error.message = validatePost.errors[0].message;
        next(error);
    }
}
