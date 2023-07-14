// const { default: axios } = require("axios");

//BUTTONS
const complimentBtn = document.getElementById("complimentButton");

const getFortuneBtn = document.getElementById("fortuneButton");
const submitFortuneBtn = document.getElementById("new-fortune-btn");
const removeFortuneBtn = document.getElementById("remove-fortune-btn");
console.log("remove fortune button");
const messageBtn = document.getElementById("messageButton");

const imgBtn = document.getElementById("imgButton");

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

  console.log("hit on message");
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
  imageContainer.innerHTML = "";

  const createBackground = document.createElement("div");
  createBackground.innerHTML = `<img class = card-background src="${res.data}" alt ="inspiring"></img>`;
  imageContainer.appendChild(createBackground);
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
  // fortuneDiv.innerHTML = "";
  fortuneRequests++;
  let { randomFortune } = res.data;
  if (fortuneRequests > 3) {
    alert("Slow down. Share with those less fortunate");
  } else {
    const createFortune = document.createElement("p");
    createFortune.innerHTML = `${randomFortune}`;
    fortuneDiv.appendChild(createFortune);
  }
};
//////////////////////////////////////////////////////////////////////////////////

///////////////////////// Add a new FORTUNE with PUT /////////////////////////////
confirmFortuneAdded = (res) => {
  fortunesPutByUser++;
  console.log('fortunes put by user', fortunesPutByUser)
  if (fortunesPutByUser === 1) {
    alert(`Fortune submitted: "${res.data}"`);
  } else {
    alert(`Another success: "${res.data}" was submitted. Total submits = ${fortunesPutByUser}`);
  }

};

const putFortune = (e) => {
  e.preventDefault();
  let newFortune = [document.getElementById("new-fortune-text").value];
  axios.put(`${baseURL}/fortune`, newFortune).then(confirmFortuneAdded);
};
////////////////////////////////////////////////////////////////////////////////

///////////////////////// Delete the last fortune  /////////////////////////////
const confirmcCallback = () => {
  console.log("deletion successful");
};

const nothingToDelete = (e) => {
  console.log("User cannot access system value for this endpoint");
  alert('Nothing to delete')
}

const removeFortune = (e) => {
  e.preventDefault();
  axios
  .delete(`${baseURL}/fortune`)
  .then(confirmcCallback)
  .catch(nothingToDelete);
};

/////////////////////////////////////////////////////////////
const refreshCard = (e) => {
  fortuneRequests = 0;
  fortunesPutByUser = 0;
  myCardDiv.innerHTML = `<div id="image-container">
    </div>
        <div class = "card-content"> 
            <h2 class = "welcome"> Welcome </h2> 
              </br>
            <div id="message">  </div>
               </br>
            <div id="compliment"> </div>
              </br>
            <div id="fortune">  
              </div>
           </div>
  `;
};
////////////////////////////////////////////////////////////////////////////////

//EVENT LISTENERS - 6 Buttons
complimentBtn.addEventListener("click", getCompliment);
getFortuneBtn.addEventListener("click", getFortune);
submitFortuneBtn.addEventListener("click", putFortune);
removeFortuneBtn.addEventListener("click", removeFortune);
messageBtn.addEventListener("click", getMessage);
imgBtn.addEventListener("click", getImg);
refreshBtn.addEventListener("click", refreshCard);
