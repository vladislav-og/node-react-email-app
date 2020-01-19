const mongoose = require('mongoose');
const Schema = mongoose.Schema; // or const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false}
});

model.exports = recipientSchema;
