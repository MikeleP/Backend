import express from "express";
import cors from "cors";

import connect from "./db.js";
import { ObjectId, ObjectID } from "bson";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

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

//----------------------------------------------------------------

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
