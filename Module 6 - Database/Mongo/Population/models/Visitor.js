import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
    name: {type: String}
})

const User = mongoose.model('Visitor', visitorSchema);



