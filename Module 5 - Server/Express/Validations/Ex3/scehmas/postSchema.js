export const postSchema = {
    type: "object",
    properties: {
        title: { type: "string", minLength: 5, maxLength: 500 },
        content: { type: "string", minLength: 10, maxLength: 1000 },
        tags: {
            type: "array",
            items: { type: "string" }
        }
    }
}