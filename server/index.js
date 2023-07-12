const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment } = require("./controller.js");
const { getFortune } = require("./controller");
const { getImg } = require("./controller");
const { getMessage } = require("./controller");
const {putFortune} = require("./controller");

//ENDPOINTS
app.post("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/img", getImg);
app.post("/api/message", getMessage);
app.put("/api/fortune/new",putFortune)

//LISTEN ON PORT
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
