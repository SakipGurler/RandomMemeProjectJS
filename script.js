const meme = document.querySelector(".meme");
const title = document.querySelector(".title");
const button = document.querySelector(".button");

const url = "https://meme-api.com/gimme/";

let subreddit = ["catmemes", "dogmemes", "wholesomemes", "me_irl"];

let getMeme = () => {
  let randomMeme = subreddit[Math.floor(Math.random() * subreddit.length)];

  fetch(url + randomMeme)
    .then((res) => res.json())
    .then((data) => {
      let memeImg = new Image();
      memeImg.onload = () => {
        meme.src = data.url
        title.textContent = data.title
      }
      memeImg.src = data.url
    })
};

button.addEventListener("click", getMeme);

window.addEventListener("load", getMeme);
