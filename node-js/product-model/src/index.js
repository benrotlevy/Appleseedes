const express = require("express");
require("./db/mongoose.js");
const Product = require("./models/product.js");
const auth = require("./middleware/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    const token = await product.generateToken();
    res.status(201).send({ product, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/products/login", async (req, res) => {
  try {
    const product = await Product.findByCredentials(
      req.body.name,
      req.body.password
    );
    const token = await product.generateToken();
    res.status(200).send({ product, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post("/products/logout", auth, async (req, res) => {
  try {
    req.product.tokens = req.product.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.product.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

app.post("/products/logoutAll", auth, async (req, res) => {
  try {
    req.product.tokens = [];
    await req.product.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/products/me", auth, async (req, res) => {
  try {
    // const products = await Product.find({});
    res.send(req.product);
  } catch (error) {
    res.status(500).send();
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Product.findById(_id);
    if (!product) {
      return res.status(400).send();
    }
    res.send(product);
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).send();
    }
    res.status(500).send();
  }
});

app.get("/active-products/", async (req, res) => {
  try {
    const products = await Product.find({ isActive: true });
    res.send(products);
  } catch (error) {
    res.status(500).send();
  }
});

app.get("/productsBYPrice/", async (req, res) => {
  try {
    const products = await Product.find({});
    const filter = products.filter((product) => {
      //   console.log(product);
      return product.detailes.price >= 50 && product.detailes.price <= 500;
    });
    res.send(filter);
  } catch (error) {
    res.status(500).send();
  }
});

app.patch("/products/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowed = ["discount", "isActive", "password"];
  const isValid = updates.every((update) => allowed.includes(update));
  try {
    if (!isValid) throw new Error("operation not valid");
    const product = req.product;
    if (req.body.discount) product.detailes.discount = req.body.discount;
    if (req.body.isActive) product.isActive = req.body.isActive;
    if (req.body.password) product.password = req.body.password;
    await product.save();
    res.send(product);
  } catch (error) {
    if (error.massege === "operation not valid") res.status(404).send(error);
    res.status(500).send(error);
  }
});

app.delete("/products/me", auth, async (req, res) => {
  try {
    req.product.remove();
    res.send(req.product);
  } catch (error) {
    // if (error.name === "CastError") {
    //   res.status(400).send();
    // }
    res.status(500).send();
  }
});

app.delete("/products/", async (req, res) => {
  try {
    const result = await Product.deleteMany({});
    res.send(result);
  } catch (error) {
    res.status(500).send();
  }
});

app.listen(PORT, () => {
  console.log("server is up in port " + PORT);
});
