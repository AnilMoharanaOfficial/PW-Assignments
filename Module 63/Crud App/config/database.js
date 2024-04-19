import mongoose from "mongoose";

const database =
  process.env.DATABASE_URI ||
  "mongodb+srv://anilmoharana:BiX6IVWdcVmM60vc@cluster0.wmbnw45.mongodb.net/Crud";

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
