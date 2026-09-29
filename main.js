// ============================================
// MAGGIO FAMILY ARCADE — Game Data & Renderer
// ============================================
//
// To add a new game, simply push an object to the `games` array below.
// The page will render it automatically. No HTML changes needed.
//
// Format:
// {
//   title:   "Game Title",
//   creator: "Creator Name",
//   url:     "https://link-to-game.com",
//   image:   "./assets/thumbnail.svg"  (or .jpg, .png, .webp)
// }

const games = [
  {
    title: "Ingoizer's World",
    creator: "Luca",
    url: "https://genemagg10.github.io/adventure-game/",
    image: "./assets/ingoizers-world-thumb.svg",
  },
  {
    title: "Claw Machine Cuties",
    creator: "Ella",
    url: "https://genemagg10.github.io/claw-machine-cuties/",
    image: "./assets/claw-machine-cuties-thumb.svg",
  },
  {
    title: "Star Wars Adventure",
    creator: "Jordan",
    url: "https://genemagg10.github.io/star-wars-adventure/",
    image: "./assets/star-wars-adventure-thumb.svg",
  },
  {
    title: "FrostByte",
    creator: "Gene",
    url: "https://genemagg10.github.io/frostbyte/",
    image: "./assets/frostbyte.png",
  },
  {
    title: "Cutie Racers",
    creator: "Ella",
    url: "https://genemagg10.github.io/CutieRacers/",
    image: "./assets/cutieracers.png",
  },
  {
    title: "Pelada Legends",
    creator: "Gene",
    url: "https://genemagg10.github.io/pelada-legends/",
    image: "./assets/pelada-legends-thumb.svg",
  },
  {
    title: "Downscale",
    creator: "Gene",
    url: "https://genemagg10.github.io/downscale/",
    image: "./assets/downscale.png",
  },
];

// ---- Renderer ----

function renderGallery() {
  const gallery = document.getElementById("game-gallery");
  if (!gallery) return;

  gallery.innerHTML = games
    .map(
      (game) => `
    <a class="game-card" href="${game.url}" target="_blank" rel="noopener noreferrer">
      <div class="game-card__screen">
        <img src="${game.image}" alt="${game.title} thumbnail" loading="lazy">
      </div>
      <div class="game-card__info">
        <h2 class="game-card__title">${game.title}</h2>
        <p class="game-card__creator">by ${game.creator}</p>
      </div>
    </a>
  `
    )
    .join("");
}

// ---- Press Start: launch a random game ----

function playRandomGame() {
  const game = games[Math.floor(Math.random() * games.length)];
  window.open(game.url, "_blank", "noopener,noreferrer");
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  const pressStart = document.getElementById("press-start");
  if (pressStart) pressStart.addEventListener("click", playRandomGame);
});
