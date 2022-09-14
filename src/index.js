import express from "express";
import cors from "cors";

import connect from "./db.js";
import { ObjectId, ObjectID } from "bson";
import auth from "./auth.js";
// import mongo from "mongodb";
// import { emit } from "nodemon";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/auth", async (req, res) => {
  let user = req.body;

  try {
    await auth.authenticateUser(user.username, user.password);
  } catch (e) {
    res.satus(403).json({ error: e.message });
  }
});

app.post("/users", async (req, res) => {
  let user = req.body;

  let id;
  try {
    id = await auth.registerUser(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }

  res.json({ id: id });
});

//------------------------- GOVEDO ------------------------------

app.get("/govedo", async (req, res) => {
  let db = await connect();
  let kolekcija = db.collection("govedo");
  let cursor = await kolekcija.find();
  let data = await cursor.toArray();

  res.json(data);
});

app.post("/govedo", async (req, res) => {
  let doc = req.body;
  console.log(doc);

  let db = await connect();
  let kolekcija = db.collection("govedo");

  let result = await kolekcija.insertOne(doc);

  res.status(201);
  res.send();
});

app.put("/govedo/:idGoveda", async (req, res) => {
  let doc = req.body;
  let id = req.params.idGoveda;

  let db = await connect();
  let kolekcija = db.collection("govedo");

  let result = await kolekcija.replaceOne({ _id: ObjectId(id) }, doc);

  res.status(201);
  res.send();
});

app.delete("/govedo/:idGoveda", async (req, res) => {
  let id = req.params.idGoveda;

  let db = await connect();
  let kolekcija = db.collection("govedo");

  let result = await kolekcija.findOneAndDelete({ _id: ObjectId(id) });

  res.status(201);
  res.send();
});

//------------------------- DOLAZAK ------------------------------

app.get("/dolazak", async (req, res) => {
  let db = await connect();
  let kolekcija = db.collection("dolazak");
  let cursor = await kolekcija.find();
  let data = await cursor.toArray();

  res.json(data);
});

app.post("/dolazak", async (req, res) => {
  let doc = req.body;
  console.log(doc);

  let db = await connect();
  let kolekcija = db.collection("dolazak");

  let result = await kolekcija.insertOne(doc);

  res.status(201);
  res.send();
});

app.put("/dolazak/:idDolaska", async (req, res) => {
  let doc = req.body;
  let id = req.params.idDolaska;

  let db = await connect();
  let kolekcija = db.collection("dolazak");

  let result = await kolekcija.replaceOne({ _id: ObjectId(id) }, doc);

  res.status(201);
  res.send();
});

app.delete("/dolazak/:idDolaska", async (req, res) => {
  let id = req.params.idDolaska;

  let db = await connect();
  let kolekcija = db.collection("dolazak");

  let result = await kolekcija.findOneAndDelete({ _id: ObjectId(id) });

  res.status(201);
  res.send();
});

//------------------------- ODLAZAK ------------------------------

app.get("/odlazak", async (req, res) => {
  let db = await connect();
  let kolekcija = db.collection("odlazak");
  let cursor = await kolekcija.find();
  let data = await cursor.toArray();

  res.json(data);
});

app.post("/odlazak", async (req, res) => {
  let doc = req.body;
  console.log(doc);

  let db = await connect();
  let kolekcija = db.collection("odlazak");

  let result = await kolekcija.insertOne(doc);

  res.status(201);
  res.send();
});

app.put("/odlazak/:idOdlaska", async (req, res) => {
  let doc = req.body;
  let id = req.params.idOdlaska;

  let db = await connect();
  let kolekcija = db.collection("odlazak");

  let result = await kolekcija.replaceOne({ _id: ObjectId(id) }, doc);

  res.status(201);
  res.send();
});

app.delete("/odlazak/:idOdlaska", async (req, res) => {
  let id = req.params.idOdlaska;

  let db = await connect();
  let kolekcija = db.collection("odlazak");

  let result = await kolekcija.findOneAndDelete({ _id: ObjectId(id) });

  res.status(201);
  res.send();
});

//----------------------------------------------------------------

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
