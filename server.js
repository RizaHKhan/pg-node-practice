import express from "express";
import bodyParser from "body-parser";
import userRouter from "./router.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server started");
});
