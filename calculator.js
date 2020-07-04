const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("a client connected to the endpoint /");
  res.send("welcome to the calculator App!");
});
app.get("/sum", (req, res) => {
  const number1 = req.query.number1;
  const number2 = req.query.number2;
  console.log("1st number is " + number1);
  let sum = parseInt(number1) + parseInt(number2);
  res.send(
    "1st number is " +
      number1 +
      " & 2nd number is" +
      number2 +
      " !!!!sum is" +
      sum
  );
});
app.get("/sub", (req, res) => {
  const number1 = req.query.number1;
  const number2 = req.query.number2;
  console.log("1st number is " + number1);
  let sub = parseInt(number1) - parseInt(number2);
  res.send(
    "1st number is " +
      number1 +
      " & 2nd number is" +
      number2 +
      " !!!!result is" +
      sub
  );
});
app.get("/mul", (req, res) => {
  const number1 = req.query.number1;
  const number2 = req.query.number2;
  console.log("1st number is " + number1);
  let mul = parseInt(number1) * parseInt(number2);
  res.send(
    "1st number is " +
      number1 +
      " & 2nd number is" +
      number2 +
      " !!!!result is" +
      mul
  );
});
app.get("/div", (req, res) => {
  const number1 = req.query.number1;
  const number2 = req.query.number2;
  console.log("1st number is " + number1);
  let div = parseInt(number1) / parseInt(number2);
  res.send(
    "1st number is " +
      number1 +
      " & 2nd number is" +
      number2 +
      " !!!!result is" +
      div
  );
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
