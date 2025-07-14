function safeJsonParse(str) {
    try {
        return JSON.parse(str)                
    } catch (error) {
        return "Invalid json format"
    }
}

console.log(safeJsonParse('{"name": "John"}')); 
// Output: { name: "John" }

console.log(safeJsonParse('invalid json')); 
// Output: "Invalid JSON format"
