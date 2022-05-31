document.querySelectorAll('li').forEach(elem => elem.addEventListener('click', handleClick))
document.querySelector('button').addEventListener('click', generateDraft)


let civArr = ["Akkad", "Aksum", "America", "Arabia", "Argentina", "Armenia", "Assyria", "Australia",
  "Austria", "Ayyuubids", "Aztecs", "Babylon", "Belgium", "Boers", "Bolivia", "Brazil", "Brunei",
  "Bulgaria", "Burma", "Byzantium", "Canada", "Carthage", "Celts", "Chile", "China", "Colombia",
  "Cuba", "Denmark", "Egypt", "England", "Ethiopia", "Finland", "France", "Franks", "Gauls", "Germany",
  "Golden Horde", "Goths", "Greece", "Hittites", "Hungary", "Huns", "Inca", "India", "Indonesia", 
  "Ireland", "Iroquis", "Israel", "Italy", "Japan", "Jerusalem", "Khmer", "Kilwa", "Kongo", "Korea",
  "Lithuania", "Macedonia", "Madagascar", "Manchuria", "Maori", "Maurya", "Mexico", "Mongolia", "Moors",
  "Morocco", "Mysore", "Nabataea", "Netherlands", "New Zealand", "Normandy", "Norway", "Nubia", "Oman",
  "Ottomans", "Persia", "Philippines", "Phoenicia", "Poland", "Polynesia", "Portugal", "Prussia",
  "Romania", "Rome", "Russia", "Scotland", "Shoshone", "Siam", "Sioux", "Songhai", "Spain", "Sumeria",
  "Sweden", "The UAE", "Tibet", "Timurids", "Tonga", "Turkey", "Ukraine", "Vatican", "Venice", 
  "Vietnam", "Wales", "Zimbabwe", "Zulus"]

let bannedCivArr = []

function handleClick(e) {
  const targetedCiv = e.target
  targetedCiv.classList.toggle('banned');
  bannedCivArr.push(targetedCiv.textContent)
}

function generateDraft() {
  //makes sure that the banned civs are not included in the draft
  let availableOptions = civArr.filter(x => !bannedCivArr.includes(x))
  let player1 = []
  //get the civ, add it to the player, remove it from the available options
  for(let i = 1; i<=4; i++) {
    let civ = availableOptions[Math.floor(Math.random()* availableOptions.length)]
    player1.push(civ)
    availableOptions.splice(availableOptions.indexOf(civ), 1)
  }

  let player2 = []
  for(let i = 1; i<=4; i++) {
    let civ = availableOptions[Math.floor(Math.random()* availableOptions.length)]
    player2.push(civ)
    availableOptions.splice(availableOptions.indexOf(civ), 1)
  }
  let player3 = []
  for(let i = 1; i<=4; i++) {
    let civ = availableOptions[Math.floor(Math.random()* availableOptions.length)]
    player3.push(civ)
    availableOptions.splice(availableOptions.indexOf(civ), 1)
  }
  let player4 = []
  for(let i = 1; i<=4; i++) {
    let civ = availableOptions[Math.floor(Math.random()* availableOptions.length)]
    player4.push(civ)
    availableOptions.splice(availableOptions.indexOf(civ), 1)
  }
  let player5 = []
  for(let i = 1; i<=4; i++) {
    let civ = availableOptions[Math.floor(Math.random()* availableOptions.length)]
    player5.push(civ)
    availableOptions.splice(availableOptions.indexOf(civ), 1)
  }

  let player6 = []
  for(let i = 1; i<=4; i++) {
    let civ = availableOptions[Math.floor(Math.random()* availableOptions.length)]
    player6.push(civ)
    availableOptions.splice(availableOptions.indexOf(civ), 1)
  }
  //inserting player options into the DOM
  document.querySelector('.player1').textContent = `player1: ${player1.map(x => ' ' + x)}`
  document.querySelector('.player2').textContent = `player2: ${player2.map(x => ' ' + x)}`
  document.querySelector('.player3').textContent = `player3: ${player3.map(x => ' ' + x)}`
  document.querySelector('.player4').textContent = `player4: ${player4.map(x => ' ' + x)}`
  document.querySelector('.player5').textContent = `player5: ${player5.map(x => ' ' + x)}`
  document.querySelector('.player6').textContent = `player6: ${player6.map(x => ' ' + x)}`
}