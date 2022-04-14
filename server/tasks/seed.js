const { ObjectId } = require("mongodb");
const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const posts = data.posts;
const comments = data.comments;
const users = data.users;
// import moment from 'moment'
const moment = require("moment");

async function main() {
  const db = await dbConnection.dbConnection();
  await db.dropDatabase();

  const userid1 = await users.signUp(
    "Priyanka",
    "Popeta",
    "priyankap@gmail.com",
    "123456Pp",
    "01/01/1995",
    "Female",
    "Male",
    "Singe",
    ["Dance"],
    "Jersey City"
  );
  const userid2 = await users.signUp(
    "Tapish",
    "Chavan",
    "tapishc@gmail.com",
    "asd12@",
    "01/01/1997",
    "Male",
    "Female",
    "Single",
    ["Coding", "Football"],
    "Jersey City"
  );
  const userid3 = await users.signUp(
    "Roshan",
    "Badgujar",
    "roshanb@gmail.com",
    "asd12@",
    "01/01/1997",
    "Male",
    "Female",
    "Single",
    ["Cricket"],
    "Jersey City"
  );

  const post1 = await posts.create(
    `Post by ${userid1.firstName}`,
    "body",
    { _id: userid1._id, firstName: userid1.firstName },
    true
  );
  const post2 = await posts.create(
    `Post by ${userid2.firstName}`,
    "body",
    { _id: userid2._id, firstName: userid2.firstName },
    false
  );
  const post3 = await posts.create(
    `Post by ${userid3.firstName}`,
    "body",
    { _id: userid3._id, firstName: userid3.firstName },
    true
  );

  console.log("Done seeding database");

  await dbConnection.closeConnection();
  //   await db.closeConnection();
}

main().catch((error) => {
  console.log(error);
});
