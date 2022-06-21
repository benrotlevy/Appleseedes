const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blog";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log(error);
    }
    const db = client.db(databaseName);

    db.collection("posts")
      .insertMany([
        {
          headline: "hello world",
          content: "fsdbghdapiba[oibaienhbiorb reagher[gh[re rehgirqe[ogh",
          comments: [
            {
              userId: new ObjectId("62b02cc3f084ab04bff686f5"),
              comment: "thank you",
            },
            {
              userId: new ObjectId("62b02cc3f084ab04bff686f6"),
              comment: "i didnt like the post",
            },
          ],
        },
        {
          headline: "hello israel",
          content: "gagp  qtqpy qpt tt -9ytg34t 43t -0ugeqrtg -05yq",
          comments: [
            {
              userId: new ObjectId("62b02cc3f084ab04bff686f5"),
              comment: "thank you very mutch",
            },
          ],
        },
      ])
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    //     db.collection("users")
    //       .insertMany([
    //         {
    //           name: "benjamin",
    //           age: 25,
    //         },
    //         {
    //           name: "avital",
    //           age: 23,
    //         },
    //       ])
    //       .then((result) => {
    //         console.log(result);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
  }
);
