//not currently connected to a database.

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Welcome to the internet, we're happy you're here!",
      "Code so clean, I could eat browser cookies off of it",
      "The symmetry of your face is uncanny",
      "You click buttons like a pro!",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortunes = [
      "A System crash is immenenat, better push to GitHub",
      "Your next assessment will score 99.",
      "Callback Hell is a real place, but you can avoid it in this space",
      "This greeting card will make no sense",
      "Agents! They cut the hardline! ... either that, or cors is not installed",
    ];

    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    res.status(200).send(randomFortune);
  },
};
