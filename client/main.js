// const { getFortune } = require("../server/controller");
// console.log("front end running");

//BUTTONS
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const messageBtn = document.getElementById("messageButton");

const imgBtn = document.getElementById("imgButton");
const rouletBtn = document.getElementById("rouletButton");

const complimentDiv = document.getElementById("compliment");

/////The field on the web page where the message, fortune, URL and message are appended
const myCardDiv = document.getElementById("my-card");

//////not neededed??????????????
const messageDiv = document.getElementById("message");
const fortuneDiv = document.getElementById("fortune");

baseURL = "http://localhost:4000/api";

//default error
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
  console.log("hit on get message");
  const messageInput = document.querySelectorAll(".checkboxes:checked");
  ///Found this ... syntax on stack overflow.
  const sumInput = [[...messageInput].reduce((a, b) => a + +b.value, 0)];
  console.log(sumInput);
  axios.put(`${baseURL}/message`, sumInput).then(addMessage).catch(errFunction);
};
const addMessage = (res) => {
  console.log(res);
  const createMessage = document.createElement("div");

  createMessage.innerHTML = `${res.data}`;
  complimentDiv.appendChild(createMessage);
};

///////////////////////////////////////////////////////////////////////////////////

const getFortune = () => {
  axios.get(`${baseURL}/fortune`).then((res) => {
    alert("hit on fortune button");
  });
};

const roulet = () => {
  alert("hit on roulet btn");
};

//EVENT LISTENERS - 5 Buttons
complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
messageBtn.addEventListener("click", getMessage);
imgBtn.addEventListener("click", getImg);
rouletBtn.addEventListener("click", roulet);
