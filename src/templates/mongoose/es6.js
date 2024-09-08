import mongoose from 'mongoose';
const { Schema } = mongoose;

const __name__Schema = new Schema({}, { timestamps: true });

const __Name__Model = mongoose.model('__name__', __name__Schema, '__name__');

export default __Name__Model;
