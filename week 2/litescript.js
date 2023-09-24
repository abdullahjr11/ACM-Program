const memes = [
  "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be6ace19c29d4e0cec7_LuyYKvSMNsoK3_Kgkfbw9Cwf-vF7gFtOyUnT6TogZ8vuN81S8hQWSTUh4_TpjkdUlQjr_0cOXJL2SyPT4KjX-RAVudOV7AH4JyP3K-zzaYIVCrvIpA31aoqB7dBjwSglYaJuFR4R.png",
  "https://res.cloudinary.com/practicaldev/image/fetch/s--dbm8BrWp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5e8otrwlfo71smasf6pz.png",
  "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8ea3ab2c96bf56e0c_BXId-G1Ggyl_HTcQQpC0m2beUlGyAAgFrBsIsvSjdopQ3Bcu2ElhryoCUXku9YSlWYEBnlpSXFo7a7GrmEC7iIi5lpyuQjl2H7z5wEv_G1DrRVheKrpw5KyvOUrZC2tvAIFCwKxt.png",
  // Add more meme image URLs here
];

function generateMeme() {
  const memeImage = document.getElementById("meme-image");
  const randomIndex = Math.floor(Math.random() * memes.length);
  memeImage.src = memes[randomIndex];
}

// Preload the first meme on page load
window.addEventListener("load", () => generateMeme());
