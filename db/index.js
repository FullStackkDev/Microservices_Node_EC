import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URI);
    console.log(`MongoDB connected successfully on ${db.connection.host}`);
  } catch (err) {
    console.log(`Could not connect to database due to ${err.message}`);
  }
};

export { connectDB };
