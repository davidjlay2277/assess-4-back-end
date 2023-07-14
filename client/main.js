// const { default: axios } = require("axios");

//BUTTONS
const imgBtn = document.getElementById("img-btn");
const messageBtn = document.getElementById("message-btn");
const complimentBtn = document.getElementById("compliment-btn");
  ///All Fortune buttons///
const createFortuneBtn = document.getElementById("add-fortune-btn");
const removeFortuneBtn = document.getElementById("remove-fortune-btn");
const getfortuneBtn = document.getElementById("get-fortune-btn");

const refreshBtn = document.getElementById("refresh-btn");


let complimentDiv = document.getElementById("compliment");
let messageDiv = document.getElementById("message");
let fortuneDiv = document.getElementById("fortune");
let imageContainer = document.getElementById("image-container");
let fortuneRequests = 0;
let fortunesPutByUser = 0;
/////The field on the web page where the message, fortune, URL and message are appended
const myCardDiv = document.getElementById("my-card");
const container = document.querySelector(".container");

const baseURL = "http://localhost:4000/api";

//default error//
const errFunction = (err) => {
  alert(err);
};

/////////////////////// Add the IMAGE to the card //////////////////////////
const addImage = (res) => {
  imageContainer.innerHTML = "";

  const createBackground = document.createElement("div");
  createBackground.innerHTML = `<img class = card-background src="${res.data}" alt ="inspiring"></img>`;
  imageContainer.appendChild(createBackground);
};

/////////////////////// Add the COMPLIMENT to the card //////////////////////////
const addCompliment = (res) => {
  complimentDiv.innerHTML = "";
  const createCompliment = document.createElement("div");
  createCompliment.innerHTML = `${res.data}`;
  complimentDiv.appendChild(createCompliment);
};

/////////////////////// Add the MESSAGE to the card //////////////////////////
const addMessage = (res) => {
  messageDiv.innerHTML = "";
  const createMessage = document.createElement("div");
  createMessage.innerHTML = `${res.data}`;
  messageDiv.appendChild(createMessage);
};

//////////////////Confirm the new fortune was added/////////////////////////////
const confirmFortuneAdded = (res) => {
  fortunesPutByUser++;
  console.log(res.body)
  console.log("fortune added by user:", fortunesPutByUser);
  if (fortunesPutByUser === 1) {
    alert(`Fortune submitted: "${res.data}"`);
  } else {
    alert(
      `Another success: "${res.data}" was submitted. Total submits = ${fortunesPutByUser}`
    );
  }
};

////////////////////////// Add the random fortune to the card ////////////////////
const addFortune = (res) => {
  // fortuneDiv.innerHTML = "";
  console.log(fortuneRequests)
  fortuneRequests++;
  console.log(res.data)
  if (fortuneRequests > 8) {
    alert("Slow down. Share with those less fortunate");
  } else {
    const createFortune = document.createElement("p");
    createFortune.innerHTML = `${res.data}`;
    fortuneDiv.appendChild(createFortune);
  }
};

///////////////// Confirm deletion of last entry  ////////////////////////////
const confirmcCallback = () => {
  console.log("deletion successful");
  alert('succesfully deleted previous entry')
};

const nothingToDelete = (e) => {
  console.log("User cannot access system value for this endpoint");
  alert("Nothing to delete");
};

///////////////////////// Request an IMAGE with POST /////////////////////////////
const getImg = (e) => {
  e.preventDefault();
  const resValue = [
    document.querySelector('input[name="imageType"]:checked').value,
  ];
  axios.post(`${baseURL}/img`, resValue).then(addImage).catch(errFunction);
};

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

/////////////////////// Request a COMPLIMENT with GET //////////////////////////
const getCompliment = (e) => {
  e.preventDefault();
  let resObj = {
    index: document.getElementById("compliment-input").value,
  };
  console.log("hit on message");
  axios
    .post(`${baseURL}/compliment`, resObj)
    .then(addCompliment)
    .catch(errFunction);
};

////////////////////////Request a random FORTUNE with GET ///////////////////
const getFortune = (e) => {
  e.preventDefault();
  axios.get(`${baseURL}/fortune`).then(addFortune).catch(errFunction);
};

///////////// Put th user entered string on the server  //////////////////////
const putFortune = (e) => {
  e.preventDefault();
  let newFortune = [document.getElementById("create-fortune").value];
  console.log(newFortune)
  if (newFortune[0] === '') {
alert("Text field was empty")
  }
  else {axios.put(`${baseURL}/fortune`, newFortune).then(confirmFortuneAdded);}
};
///////////////// Delete prev last fortune entry ////////////////////////////
const removeFortune = (e) => {
  e.preventDefault();
  axios
    .delete(`${baseURL}/fortune`)
    .then(confirmcCallback)
    .catch(nothingToDelete);
};
// Refresh Button will reset HTML for each div in the card /////////////////////
const refreshCard = (e) => {
  fortuneRequests = 0;
  fortunesPutByUser = 0;
  complimentDiv.innerHTML = "";
  messageDiv.innerHTML = "";
  fortuneDiv.innerHTML = "";
  imageContainer.innerHTML = "";
};


//EVENT LISTENERS - 7 Buttons
imgBtn.addEventListener("click", getImg);
complimentBtn.addEventListener("click", getCompliment);
messageBtn.addEventListener("click", getMessage);

createFortuneBtn.addEventListener("click", putFortune);
removeFortuneBtn.addEventListener("click", removeFortune);
getfortuneBtn.addEventListener("click", getFortune);

refreshBtn.addEventListener("click", refreshCard);
