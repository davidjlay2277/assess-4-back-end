//not currently connected to a database.

module.exports = {
  getCompliment: (req, res) => {
    let { index } = req.body;

    const allCompliments = [
      "Welcome to the internet, we're happy you're here!",
      "Code so clean, I could eat browser cookies off of it",
      "The symmetry of your face is uncanny",
      "You click buttons like a pro!",
    ];
    let userCompliment = allCompliments[index];
    res.status(200).send(userCompliment);
  },
  getFortune: (req, res) => {
    const fortunes = [
      "A System crash is immenenat, better push to GitHub",
      "Your next assessment will score 100.",
      "Callback Hell is a real place, but you can avoid it in this space",
      "This greeting card will make no sense",
      "Agents! They cut the hardline! ... either that, or cors is not installed",
    ];

    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    res.status(200).send(randomFortune);
  },

  getImg: (req, res) => {
    const input = req.body[0];
    const calmUrl =
      "https://media.npr.org/assets/img/2022/12/09/penguins-0e7c7c45a1188d5a2ccf897179945d927508b22c-s1300-c85.webp";

    const inspiringUrl =
      "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201910/1_7-x588.jpg?PclOeJ.qXdBqTMtw3QqW5Kx7ZHQAuLqx";

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
    console.log(value);

    const messages = [
      {
        value: 1,
        responses: ["ecstatic"],
        message: "carpe diem!",
      },
      {
        value: 2,
        responses: ["discouraged"],
        message: "https://www.youtube.com/watch?v=7uUlOAyQsn4",
      },
      {
        value: 3,
        responses: ["ecstatic", "discouraged"],
        message: "The glass is half full, my friend",
      },
      {
        value: 4,
        responses: ["confused"],
        message: "Well aren't you wonderfully curious",
      },
      {
        value: 5,
        responses: ["ecstatic", "confused"],
        message: "The best invensiton are created on the brink of mania",
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

    if (value === sum) {
    }

    res.status(200).send(value);
  },
};
