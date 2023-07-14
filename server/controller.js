//not currently connected to a database.

let fortunes = [
  "placeholder",
  // ,
  // "A System crash is imminent, better push to GitHub",
  // "Your next assessment will score 100.",
  // "Callback Hell is a real place, but I <strong>promise</strong> you a way out.",
  // "This greeting card will make no sense.",
  "Agents! They cut the hardline! ... either that, or <strong>Cors</strong> is not installed.",
  "You will <strong>generate a fortune</strong> by becoming a developer.",
];
const systemFortuneLength = fortunes.length;
let fortuneHistoryArr = [];

let fortuneQuantity = fortunes.length;
let prevIndex;
let prevPrevIndex;
let newRandomIndex;

let fortuneObj = {
  fortuneQuantity: 0,
  randomFortune: "",
};

module.exports = {
  getCompliment: (req, res) => {
    let { index } = req.body;

    const allCompliments = [
      "Welcome to the internet, we're happy you're here!",
      "Code so clean, I could eat browser cookies off of it.",
      "The symmetry of your face is uncanny.",
      "You click buttons like a pro!",
    ];
    let userCompliment = allCompliments[index];
    res.status(200).send(userCompliment);
  },

  getFortune: (req, res) => {
    // let newRandomIndex = Math.floor(Math.random() * fortunes.length);
 console.log('-------------BEGIN--------------')
    let currentLength = fortuneHistoryArr.length 
  console.log('the array length is:', currentLength)
  console.log('the array:', fortuneHistoryArr,'\n')

    const returnUniqueFortune = (index) => {
      fortuneHistoryArr.push(index);
      console.log('the unique index is', index)
      console.log('reruning unique value on array: ',fortuneHistoryArr,'\n--------------------END RUN----------------\n');
      let fortuneObj = {
        fortuneQuantity: fortuneQuantity,
        randomFortune: fortunes[index],
      };
      res.status(200).send(fortuneObj);
    };

    const getRandom = () => {
      let newRandomIndex = Math.floor(Math.random() * fortunes.length);
      if (newRandomIndex === prevIndex || prevPrevIndex) {
        getNewRandom();
      } else {
        returnUniqueFortune(newRandomIndex);
        return;
      }
    };

    const getNewRandom = () => {
      let newRandomIndex = Math.floor(Math.random() * fortunes.length);
      if (newRandomIndex === prevIndex || prevPrevIndex) {
        getRandom();
      } else {  
        returnUniqueFortune(newRandomIndex);
        return;
      }
    };
    if (fortuneHistoryArr.length === 0) {
      let newRandomIndex = Math.floor(Math.random() * fortunes.length);
      returnUniqueFortune(newRandomIndex);
       } else if (fortuneHistoryArr.length === 1) {
  
      let prevIndex = fortuneHistoryArr[0];
      let prevPrevIndex = fortuneHistoryArr[0];
      console.log('TRUTH2:\n prev index is ',prevIndex)
      console.log('prevPrev index is ',prevPrevIndex)
      getRandom();
    } else {
     
      let prevIndex = fortuneHistoryArr[fortuneHistoryArr.length - 1];
      let prevPrevIndex = fortuneHistoryArr[fortuneHistoryArr.length - 2];
      console.log('Truth 3:\n prev index is ',prevIndex)
      console.log('prevPrev index is ',prevPrevIndex, '\n\n')
      getRandom();
    }
  },

  getImg: (req, res) => {
    const input = req.body[0];
    const calmUrl =
      "https://media.npr.org/assets/img/2022/12/09/penguins-0e7c7c45a1188d5a2ccf897179945d927508b22c-s1300-c85.webp";

    const inspiringUrl =
      "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201910/1_7-x588.jpg?PclOeJ.qXdBqTMtw3QqW5Kx7ZHQAuLqx/";

    const ominousUrl =
      "//www.photomural.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/2/12405.jpg";

    if (input === "calm") {
      res.status(200).send(calmUrl);
    } else if (input === "inspiring") {
      res.status(200).send(inspiringUrl);
    } else if (input === "ominous") {
      res.status(200).send(ominousUrl);
    } else {
      res
        .status(400)
        .send(console.error("That is strange. Try the radio buttons again"));
    }
  },

  getMessage: (req, res) => {
    const value = req.body[0];
    let messagesArr = [
      {
        value: 1,
        responses: ["ecstatic"],
        message: "Carpe diem!",
      },
      {
        value: 2,
        responses: ["discouraged"],
        message:
          "This will help: <a href=https://www.youtube.com/watch?v=7uUlOAyQsn4> motivation </a>",
      },
      {
        value: 3,
        responses: ["ecstatic", "discouraged"],
        message: "The glass is half full, my friend",
      },
      {
        value: 4,
        responses: ["confused"],
        message: "Curiosity is a wonderful thing",
      },
      {
        value: 5,
        responses: ["ecstatic", "confused"],
        message: "The best inventions are created on the brink of mania",
      },
      {
        value: 6,
        responses: ["discouraged", "confused"],
        message: "There is a chance you are confused about being discouraged",
      },
      {
        value: 7,
        responses: ["ecstatic", "discouraged", "confused"],
        message: "You have a lot going on. Take a long walk, that might help.",
      },
    ];
    const messageObj = messagesArr.find((e) => e.value === value);
    let { message } = messageObj;
    res.status(200).send(message);
  },

  putFortune: (req, res) => {
    fortunes.push(req.body[0]);
    let newFortuneAdded = fortunes[fortunes.length - 1];
    res.status(200).send(newFortuneAdded);
  },

  deleteFortune: (req, res) => {
    console.log("starting:", systemFortuneLength);
    console.log("current:", fortunes.length);
    if (fortunes.length > systemFortuneLength) {
      fortunes.pop();
      console.log("truth");
      res.status(200).send("deleted");
    } else {
      console.log("false");
      res.status(403).send("not deleted");
    }
    console.log("ending", fortunes.length);
  },
};
