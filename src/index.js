import express from "express";
import cors from "cors";

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati

app.use(cors()); // omogući CORS na svim rutama
app.use(express.json()); //dekodiranje JSON poruke od klijenta

app.get("/", (req, res) => {
  res.json([]);
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
