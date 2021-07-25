// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS
// console.log(data);
// 1.0 Create the bridge using <ul class="cards"></ul>

// 2.0 renderPokemonCard(pokemon)
// - create an <h2>
//    - text comes from pokemon.name
// - create an <img>
//    - src ???
// - run renderStatsList() and append
//
// input: an object that represents a pokemon
// output: <li> element that looks like the the card template
//
// How could I test this on the page rather than a console.log?

// 2.1 renderStatsList(stats)
// - The list of stats
// - For loop to render each stat from a "stats" array
//
// input: an array of stats from a pokemon object
// output: <ul> element with various <li> elements

// 2.2 renderPokemonCards(data)
// - A for loop on the array of pokemon
//   - run renderPokemon()
//   - append to the element from Step 1.0
// - input: an array of objects that represent pokemon (data)
// - output: -


// function renderPokemon (pokemon) {
//    let pokemonCard = {}
//    for (let i = 0; i < data.length; i++) {
// const item = data[i]
// // console.log("Pokemon Data: ", item)
// const name = item.name
// // console.log("Pokemon Names: ", name)
// const image = item.sprites.other["official-artwork"].front_default
// // console.log("Pokemon Images: ", image)
// const titleEl = document.createElement("h2")
// document.body.append(titleEl)
// titleEl.innerText = name
// //Create Image Source
// const imgEl = document.createElement("img")
// document.body.append(imgEl)
// imgEl.setAttribute("src", image)
//    }
//    return pokemonCard
// }
// const pokemonCards = renderPokemon(data)
// // console.log("pokemonCards: ", pokemonCards)


// // const statistics = data.stats
// function renderStatsList(data) {
//   let pokemonStatistics = {};
//   for (let i = 0; i < data.length; i++) {
//     const item = data[i];
//     // console.log("Pokemon Data:", item);
//     const pokemonStats = item.stats[i];
//     // console.log("Pokemon Stats: ", pokemonStats);
//     const base = pokemonStats.base_stat;
//     console.log("Base: ", base);
//   }
//   return pokemonStatistics;
// }
// const pokemonRenderStats = renderStatsList(data);
// // console.log("pokemonRenderStats: ", pokemonRenderStats)

// console.log(data)

const listEl = document.querySelector(".cards")

// console.log("The Bridge: ", listEl)

function renderPokemonCard(pokemon) {
  // console.log("Inside renderPokemonCard: ", pokemon)

  const containerEl = document.createElement("li")
  containerEl.className = "card"

  const headingEl = document.createElement("h2")
  headingEl.className = "card--title"

  headingEl.innerText = pokemon.name.toUpperCase()

  containerEl.append(headingEl)

  const imageEl = document.createElement("img")

  const imageSrc = pokemon.sprites.other["official-artwork"].front_default

  imageEl.setAttribute("width", "256")
  imageEl.setAttribute("class", "card--img")
  imageEl.setAttribute("src", imageSrc)

  containerEl.append(imageEl)

  const listEl = document.createElement("ul")
  listEl.className = "card--text"

  for (let i = 0; i < pokemon.stats.length; i++) {
    const statItem = pokemon.stats[i]
    const baseStat = statItem.base_stat
    const statName = statItem.stat.name

    const listItemEl = document.createElement("li")

    listItemEl.innerText = `${statName.toUpperCase()}: ${baseStat}`

    listEl.append(listItemEl)
  }

  containerEl.append(listEl)

  return containerEl
}

for (let i = 0; i < data.length; i++) {
  const pokemon = data[i]

  // console.log("Before renderPokemonCard: ", pokemon)

  const pokemonCard = renderPokemonCard(pokemon)

  listEl.append(pokemonCard)
}