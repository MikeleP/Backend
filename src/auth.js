import mongo from "mongodb";
import connect from "./db.js";
import bcrypt from "bcrypt";

(async () => {
  let db = await connect();
  await db.collection("users").createIndex({ username: 1 }, { unique: true });
})();

export default {
  async registerUser(userData) {
    let db = await connect();

    let doc = {
      username: userData.username,
      password: await bcrypt.hash(userData.password, 8),
      farm_code: userData.farm_code,
    };

    await db.collection("users").insertOne(doc);
  },
};
