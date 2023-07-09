const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune} = require('./controller')

//ENDPOINTS
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

//LISTEN ON PORT
const PORT = 4000;
app.listen(4000, () => console.log(`Server running on 4000 ${PORT}`));
