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
    title: "FrostByte",
    creator: "Gene",
    url: "https://genemagg10.github.io/skifree/",
    image: "./assets/frostbyte-thumb.svg",
  },
  {
    title: "Cutie Racers",
    creator: "Ella",
    url: "https://genemagg10.github.io/CutieRacers/",
    image: "./assets/cutieracers-thumb.svg",
  },
  {
    title: "Ingoizer's World",
    creator: "Luca",
    url: "https://genemagg10.github.io/adventure-game/",
    image: "./assets/ingoizers-world-thumb.svg",
  },
  {
    title: "Pelada Legends",
    creator: "Gene",
    url: "https://genemagg10.github.io/pelada-legends/",
    image: "./assets/pelada-legends-thumb.svg",
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

document.addEventListener("DOMContentLoaded", renderGallery);
