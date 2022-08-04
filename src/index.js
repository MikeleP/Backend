import express from "express";
import cors from "cors";

import connect from "./db.js";

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

app.get("/dolazak", async (req, res) => {
  let db = await connect();
  let kolekcija = db.collection("dolazak");
  let cursor = await kolekcija.find();
  let data = await cursor.toArray();

  res.json(data);
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
