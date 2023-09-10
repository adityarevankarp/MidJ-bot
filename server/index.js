import express from "express";
import * as dotenv from "dotenv";
import postRoutes from "./routes/postRoutes.js";
import midjourney from "./routes/midjourney.js";
import connectdb from "./db/connect.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/midjourney", midjourney);
app.get("/", async (req, res) => {
  res.send("hello from adithya");
});
const startServer = async () => {
  try {
    connectdb(process.env.MONGODB_URL);
    app.listen(8080, () => console.log("Server has started on localhost:8080"));
  } catch (error) {
    console.log(err);
  }
};
startServer();
