import mongo from "mongodb";
import connect from "./db.js";
import bcrypt from "bcrypt";

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
