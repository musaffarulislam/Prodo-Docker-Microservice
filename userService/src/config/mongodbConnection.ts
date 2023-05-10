import mongoose, { Mongoose } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const connectDB = async (): Promise<Mongoose> => {
  try {
    const conn = await mongoose.connect(String(process.env.MONGO_CONNECTION_URI), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4
    } as mongoose.MongooseOptions);
    console.log(`User MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err}`);
    process.exit(1);
  }
};

export default connectDB;