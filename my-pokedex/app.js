const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#d6b3ff",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  ice: "#e0f5ff ",
  ghost: "#7f7fda",
};

const pokeLimit = 151;

const pokeInput = document.querySelector('#pokeInput');
const pokeBtn = document.querySelector('.pokeBtn');

const pokeContainer = document.querySelector('.poke-container');



const pokeListing = async () => {
  for (var i = 1; i <= pokeLimit; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        const pokemonName = data.name[0].toUpperCase() + data.name.slice(1);
        const pokemonId = data.id.toString().padStart(3, '0');
        const pokemonType = data.types[0].type.name;

        const pokeItems = document.createElement('div');
        pokeItems.classList.add('poke-item');
        pokeItems.style.backgroundColor = `${colors[pokemonType]}`;
        pokeItems.innerHTML = `
          <img class="poke-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png" alt="pokemon ${data.name}">
          <h2 class="poke-name">${pokemonName}</h2>
          <p class="poke-id">#${pokemonId}</p>
          <p class="poke-weight">${data.weight} Kg</p>
          <p class="poke-type">${pokemonType}</p>
          `;

        pokeContainer.appendChild(pokeItems);
      });
  }
}
pokeListing();

pokeInput.addEventListener('input', () => {
  const pokeNames = document.querySelectorAll('.poke-name');
  const search = pokeInput.value.toLowerCase();

  pokeNames.forEach((item) => {
    const pokeNamesValue = item.innerHTML.toLowerCase();
    item.parentElement.style.display = 'block';
    if (!pokeNamesValue.includes(search)) {
      item.parentElement.style.display = 'none';
    }
  });
});



/* const pokeListing = async () => {
  for (var i = 1; i <= pokeLimit; i++) {
    await getPoke(i);
  }
};

const getPoke = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let response = await fetch(url);
  let data = await response.json();
  createPoke(data);
};

const createPoke = async (pokes) => {
  const pokemonName = pokes.name[0].toUpperCase() + pokes.name.slice(1);
  const pokemonId = pokes.id.toString().padStart(3, '0');
  const pokemonType = pokes.types[0].type.name;

  const pokeItems = document.createElement('div');
  pokeItems.classList.add('poke-item');
  pokeItems.style.backgroundColor = `${colors[pokemonType]}`;
  pokeItems.innerHTML = `
  <img class="poke-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png" alt="pokemon ${pokes.name}">
  <h2 class="poke-name">${pokemonName}</h2>
  <p class="poke-id">#${pokemonId}</p>
  <p class="poke-weight">${pokes.weight} Kg</p>
  <p class="poke-type">${pokemonType}</p>
  `;

  pokeContainer.appendChild(pokeItems);
};

pokeListing();

pokeInput.addEventListener('input', () => {
  const pokeNames = document.querySelectorAll('.poke-name');
  const search = pokeInput.value.toLowerCase();

  pokeNames.forEach((item) => {
    const pokeNamesValue = item.innerHTML.toLowerCase();
    item.parentElement.style.display = 'block';
    if (!pokeNamesValue.includes(search)) {
      item.parentElement.style.display = 'none';
    }
  });
}); */