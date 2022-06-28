const jwt = require("jsonwebtoken");
const Product = require("../models/product.js");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secret string");
    // console.log(decoded);
    const product = await Product.findOne({
      _id: decoded.id,
      "tokens.token": token,
    });
    if (!product) {
      throw new Error();
    }
    req.token = token;
    req.product = product;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
