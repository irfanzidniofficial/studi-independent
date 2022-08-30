// Di promise ada 3 state
// pending, fullfiled, rejected
import fetch from "node-fetch";

fetch("https://fake-tweets-api.herokuapp.com/posts")
  .then((response) => response.json())
  .then((tweets) => {
    let sizeTweet = tweets.length;
    console.log("panjang data = " + sizeTweet + "\n" + tweets);
  })
  .catch((err) => {
    console.error(error);
  });
