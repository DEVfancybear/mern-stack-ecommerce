import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "./config/config";
import userRoute from "./routes/api/userRoute";
import productRoute from "./routes/api/productRoute";
import orderRoute from "./routes/api/orderRoute";
import uploadRoute from "./routes/api/uploadRoute";
import cors from "cors";
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/uploads", uploadRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  //
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "client/build/index.html")));
  });
}

app.listen(config.PORT, () => {
  console.log("Server started at http://localhost:5000");
});
