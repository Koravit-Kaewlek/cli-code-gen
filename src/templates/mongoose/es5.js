const mongoose = require('mongoose');
const { Schema } = mongoose;

const __name__Schema = new Schema({}, { timestamps: true });

const __Name__Model = mongoose.model('__name__', __name__Schema, '__name__');

module.exports = __Name__Model;
