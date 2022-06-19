const e = require("express");
const express = require("express");

const app = express();

app.use(express.json());

let numbers = [1, 2, 3, 4, 5, 6];

app.get("/numbers", (req, res) => {
  res.status(200).send(numbers);
});

app.post("/numbers", (req, res) => {
  try {
    const numbers = addNumber(Number(req.body.num));
    res.status(200).send(numbers);
  } catch (e) {
    // console.log(e);
    res.status(400).send({ error: e.message });
  }
});

app.put("/numbers/:num", (req, res) => {
  try {
    const numbers = updateNum(Number(req.params.num), Number(req.body.num));
    res.status(200).send(numbers);
  } catch (e) {
    // console.log(e);
    res.status(400).send({ error: e.message });
  }
});

app.delete("/numbers/:num", (req, res) => {
  try {
    const numbers = deleteNum(Number(req.params.num));
    res.status(200).send(numbers);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.listen(3000, () => {
  console.log("server up");
});

const updateNum = (oldNum, newNum) => {
  const exist = numbers.find((n) => n === oldNum);
  if (!exist) throw new Error("Number not exist");
  const index = numbers.indexOf(oldNum);
  numbers[index] = newNum;
  return numbers;
};

const deleteNum = (numToDelete) => {
  const exist = numbers.find((n) => n === numToDelete);
  if (!exist) throw new Error("Number not exist");
  numbers = numbers.filter((num) => num != numToDelete);
  return numbers;
};

const addNumber = (num) => {
  const duplicate = numbers.find((n) => n === num);
  if (duplicate) throw new Error("Number already exist");
  numbers.push(num);
  return numbers;
};
