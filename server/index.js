// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/publish", (req, res) => {
  console.log(req);
  let title = req.body.title
  res.json({ message: title });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});