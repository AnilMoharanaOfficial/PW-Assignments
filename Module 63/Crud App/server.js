import { config } from "dotenv";
config();
import app from "./app.js";
import connectToDB from "./config/database.js";

const PORT = process.env.PORT || 3536;

app.listen(PORT, async () => {
  await connectToDB();
  console.log(`SERVER IS ARUNNING AT localhost:${PORT}`);
});
