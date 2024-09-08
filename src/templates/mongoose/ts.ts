import mongoose, { Document, Model, Schema } from 'mongoose';

// Define an interface representing a document in MongoDB.
interface __Name__ extends Document {
  // Add your document properties here
}

const __name__Schema: Schema = new Schema({}, { timestamps: true });

// Create a Model.
const __Name__Model: Model<__Name__> = mongoose.model<__Name__>(
  '__name__',
  __name__Schema,
  '__name__'
);

export default __Name__Model;
