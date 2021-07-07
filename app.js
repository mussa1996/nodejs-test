import express from "express";
import bodyParser from "body-parser";
import route from "./src/routers/index"
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',route);
app.get("/", (req, res) => {
  res.status(200).json({
    message: "I am using babel in NodeJS",
    status: "success",
  });
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log("server up and running");
});