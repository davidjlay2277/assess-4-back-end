//BUTTONS
const complimentBtn = document.getElementById("complimentButton");
const getFortuneBtn = document.getElementById("fortuneButton");
const submitFortuneBtn = document.getElementById("new-fortune-btn");

const messageBtn = document.getElementById("messageButton");
const imgBtn = document.getElementById("imgButton");
const rouletBtn = document.getElementById("rouletButton");

let complimentDiv = document.getElementById("compliment");
let messageDiv = document.getElementById("message");
let fortuneDiv = document.getElementById("fortune");
let allHTML = document.querySelectorAll("body");
/////The field on the web page where the message, fortune, URL and message are appended
const myCardDiv = document.getElementById("my-card");

baseURL = "http://localhost:4000/api";

//default error//
const errFunction = (err) => {
  alert(err);
};

/////////////////////// Request a COMPLIMENT with POST //////////////////////////
const getCompliment = (e) => {
  e.preventDefault();
  let resObj = {
    index: document.getElementById("complimentInput").value,
  };
  axios
    .post(`${baseURL}/compliment`, resObj)
    .then(addCompliment)
    .catch(errFunction);
};

const addCompliment = (res) => {
  complimentDiv.innerHTML = "";
  const createCompliment = document.createElement("div");
  createCompliment.innerHTML = `${res.data}`;
  complimentDiv.appendChild(createCompliment);
};
/////////////////////////////////////////////////////////////////////////////////

///////////////////////// Request an IMAGE with POST /////////////////////////////
const getImg = (e) => {
  e.preventDefault();
  const resValue = [
    document.querySelector('input[name="imageType"]:checked').value,
  ];
  axios.post(`${baseURL}/img`, resValue).then(addImage).catch(errFunction);
};

const addImage = (res) => {
  const createBackground = document.createElement("div");
  createBackground.innerHTML = `<style>
  #my-card {
    background-image: url(${res.data});
    background-repeat: no-repeat;
  }
  </style>`;
  res;

  myCardDiv.appendChild(createBackground);
};
///////////////////////////////////////////////////////////////////////////////////

///////////////////////// Request a MESSAGE with PUT /////////////////////////////
const getMessage = (e) => {
  e.preventDefault();
  const messageInput = document.querySelectorAll(".checkboxes:checked");
  const sumInput = [[...messageInput].reduce((a, b) => a + +b.value, 0)];
  axios
    .post(`${baseURL}/message`, sumInput)
    .then(addMessage)
    .catch(errFunction);
};
const addMessage = (res) => {
  messageDiv.innerHTML = "";
  const createMessage = document.createElement("div");
  createMessage.innerHTML = `${res.data}`;
  messageDiv.appendChild(createMessage);
};

///////////////////////// Request a random FORTUNE with GET ///////////////////
const getFortune = (e) => {
  e.preventDefault();
  axios.get(`${baseURL}/fortune`).then(addFortune).catch(errFunction);
};

const addFortune = (res) => {
  const createFortune = document.createElement("div");
  createFortune.innerHTML = `${res.data}`;
  complimentDiv.appendChild(createFortune);
};
//////////////////////////////////////////////////////////////////////////////////

///////////////////////// Add a new FORTUNE with PUT /////////////////////////////
confirmFortuneAdded = (res) => {
  console.log("New String:", res.data);
  alert("New fortune added to server files");
};

const putFortune = (e) => {
  e.preventDefault();
  let newFortune = [document.getElementById("new-fortune-text").value];
  axios.put(`${baseURL}/fortune/new`, newFortune).then(confirmFortuneAdded);
};
////////////////////////////////////////////////////////////////////////////////

///////////////////////// Delete the last fortune  /////////////////////////////
const playRoulet = (e) => {
  e.preventDefault();
  alert("hit on roulet btn");
};

////////////////////////////////////////////////////////////////////////////////

//EVENT LISTENERS - 6 Buttons
complimentBtn.addEventListener("click", getCompliment);
getFortuneBtn.addEventListener("click", getFortune);
submitFortuneBtn.addEventListener("click", putFortune);
// newFortuneInput.addEventListener("change", InputHandler);
messageBtn.addEventListener("click", getMessage);
imgBtn.addEventListener("click", getImg);
rouletBtn.addEventListener("click", playRoulet);
