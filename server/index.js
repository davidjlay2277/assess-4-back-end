const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const {
  getCompliment,
  getFortune,
  getImg,
  getMessage,
  putFortune,
  deleteFortune,
} = require("./controller.js");

//ENDPOINTS
app.post("/api/compliment", getCompliment);
app.get   ("/api/fortune", getFortune);
app.delete("/api/fortune", deleteFortune);
app.put   ("/api/fortune", putFortune);
app.post("/api/img", getImg);
app.post("/api/message", getMessage);

// app.delete("/api")

//LISTEN ON PORT
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
