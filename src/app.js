const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];


const initializePlayers = (players) => {
    const detailedPlayers = [];
        players.forEach((apple, mango) => {
          detailedPlayers.push({
            name: apple,
            strength: getRandomStrength(),
            image: 'images/super-' + (mango + 1) + '.png',
            type: mango % 2 == 0 ? 'hero' : 'villain',
            id: mango + 1,
          });
        });
        return detailedPlayers;
};

const getRandomStrength = () => {
return Math.ceil(Math.random() * 100);
};

const view = (playerdecision) => {
  const player = document.createElement('div');
  player.classList.add('player');
  let image = document.createElement('img');
  image.setAttribute('src', playerdecision.image);
  image.setAttribute('alt', '');
  let name = document.createElement('div');
  name.className = 'name';
  name.textContent = playerdecision.name;
  let strength = document.createElement('div');
  strength.textContent = playerdecision.strength;
  strength.className = 'strength';
  player.append(image, name, strength);
  return player;
};

const buildPlayers = (players, type) => {
  let fragment = document.createElement('div');
  players
    .filter((player) => player.type == type)
    .forEach((player) => fragment.append(view(player)));
  return fragment.innerHTML;
    return fragment;
};
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

};

window.onload = () => {
    viewPlayers(initializePlayers(PLAYERS));
};