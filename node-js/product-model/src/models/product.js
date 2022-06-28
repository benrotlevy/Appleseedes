const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const detailes = new mongoose.Schema({
  description: {
    type: String,
    require: true,
    minLength: 10,
  },
  price: {
    type: Number,
    require: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Price must be positive");
      }
    },
  },
  discount: {
    type: Number,
    default: 0,
  },
  images: {
    type: [String],
    require: true,
    validate(value) {
      if (value.length < 2) {
        throw new Error("product must have at least 2 images");
      }
    },
  },
  phone: {
    type: String,
    validate(value) {
      if (value.length !== 13) {
        throw new Error("israel phone number has 13 digits");
      }
      if (value.slice(0, 4) !== "+972") {
        throw new Error("israel phone number start with +972");
      }
      for (let i = 1; i < value.length; i++) {
        if (isNaN(Number(value[i]))) {
          throw new Error("you cant insert letters to the number");
        }
      }
    },
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const productSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
  },
  password: {
    type: String,
    require: true,
  },
  detailes: {
    type: detailes,
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

productSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

productSchema.methods.toJSON = function () {
  const public = this.toObject();
  delete public.password;
  delete public.tokens;
  return public;
};

productSchema.methods.generateToken = async function () {
  const token = jwt.sign({ id: this._id.toString() }, "secret string");
  this.tokens = this.tokens.concat({ token });
  await this.save();
  return token;
};

productSchema.statics.findByCredentials = async (name, password) => {
  const product = await Product.findOne({ name });
  //   console.log(product);
  let error = false;
  if (!product) error = true;
  const match = await bcrypt.compare(password, product.password);
  if (!match) error = true;
  if (error) throw new Error("failed to login");

  return product;
};

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
