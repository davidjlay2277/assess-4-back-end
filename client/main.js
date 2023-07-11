// const { getFortune } = require("../server/controller");
console.log("front end running");

//buttons
const complimentBtn = document.getElementById("complimentButton");
const complimentType = document.getElementById("complimentInput");

const fortuneBtn = document.getElementById("fortuneButton");

const messageBtn = document.getElementById("messageButton");
const messageInput = document.getElementById("")

const imgBtn = document.getElementById("imgButton");
const rouletBtn = document.getElementById("rouletButton");

console.log(rouletBtn);
baseURL = "http://localhost:4000/api";

//function for compliment that runs when clicked
// take in the form value, send to server on end point /compliment
const getCompliment = (e) => {
  e.preventDefault();
  const complimentType = document.getElementById('complimentInput')
  axios.post(`${baseURL}/compliment`).then((res) => {
    const data = res.data;
   
    console.log(complimentType.value)
    alert("hit on complaint");
  });
};

const getMessage = (e) => {
  e.preventDefault();
  console.log("hit on message button");
  alert("hit on message button");
};

const getImg = (e) => {
  e.preventDefault();
  console.log("hit on image button");
  axios.post(`${baseURL}/img`).then((res) => {});
  alert("hit on image button");
};

const getFortune = () => {
  axios.get(`${baseURL}/fortune`).then((res) => {
    alert("hit on fortune button");
  });
};

const roulet = () => {

  alert("hit on roulet btn");
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
messageBtn.addEventListener("click", getMessage);
imgBtn.addEventListener("click", getImg);
rouletBtn.addEventListener("click", roulet);
