const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/products", {
  useNewUrlParser: true,
  //   useCreateIndex: true,
});

// const guitar = new Product({
//   name: "guitar",
//   category: "music",
//   detailes: {
//     description: "fsdhsghtdghehe",
//     price: 5,
//     images: ["sfdgsg", "trhrrderh"],
//     phone: "+972586889067",
//   },
// });

// guitar
//   .save()
//   .then(() => {
//     console.log(guitar);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });
