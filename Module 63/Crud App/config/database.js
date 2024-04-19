import mongoose from "mongoose";

const database =
  process.env.DATABASE_URI

const connectToDB = async () => {
  try {
    const { connection } = await mongoose.connect(database);

    if (connection) {
      console.log(`Connected TO DB: ${connection.host}`);
    }
  } catch (error) {
    console.log(error, "Error in DB Connection");
  }
};

export default connectToDB;
