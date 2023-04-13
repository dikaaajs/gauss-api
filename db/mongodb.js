import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const mongoURI = process.env.URI;
console.log(process.env.URI);
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
