const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/products", {
  useNewUrlParser: true,
  //   useCreateIndex: true,
});

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

const Product = mongoose.model("Product", {
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
  },
  detailes: {
    type: detailes,
  },
});

const guitar = new Product({
  name: "guitar",
  category: "music",
  detailes: {
    description: "fsdhsghtdghehe",
    price: 5,
    images: ["sfdgsg", "trhrrderh"],
    phone: "+972586889067",
  },
});

guitar
  .save()
  .then(() => {
    console.log(guitar);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
