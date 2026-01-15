const express = require("express");
const app = express();
const bodyParser = (req, res, next) => {
  const contentType = req.headers["content-type"];
  req.on("data", (data) => {
    let apiData = "";
    apiData += data;
    let body = JSON.parse(apiData);
    req.body = body;
    next();
  });
};

app.use(bodyParser)


app.post("/user",  (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body.firstName);
});

app.listen(5000, "127.0.0.1", () => {
  console.log("server started");
});
