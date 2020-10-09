import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();
  const view = `
  <div class="characters">
  ${characters.results
    .map(
      (character) => `
    <article class="character-item">
      <a href="#/${character.id}">
        <div class="image-container">
          <img src="${character.image}" alt="${character.name}" class="character-image">
        </div>
        <div class="character-content">
          <div class="character-title">
            <h2>${character.name}</h2>
            <div class="status-container">
            <div class="dot ${character.status}"></div>
            <span class="bold-info">${character.status} - ${character.species}</span>
            </div>
          </div>
          <div class="character-info">
          <span class="question bold-info">Origin:</span><span>${character.origin.name}</span>
          </div>
          <div class="character-info">
          <span class="question bold-info">Last known location:</span><span>${character.location.name}</span>
          </div>
        </div>
      </a>
    </article>
    `
    )
    .join("")}
  </div>
  `;
  return view;
};

export default Home;
