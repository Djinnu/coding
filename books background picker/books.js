document.getElementById('game').onclick = gameOfThrones;
document.getElementById('king').onclick = kingKiller;
document.getElementById('raven').onclick = raven;
document.getElementById('glass').onclick = throneOfGlass;
document.getElementById('demon').onclick = demon;
document.getElementById('mist').onclick = mistborn;
document.getElementById('stormlight').onclick = stormlight;
document.getElementById('witcher').onclick = witcher;
document.getElementById('night').onclick = night;
document.getElementById('farseer').onclick = farseer;
document.getElementById('powder').onclick = powder;
document.getElementById('first').onclick = firstlaw;
document.getElementById('random').onclick = randomBackground;


const backgroundImages = ["url('game2.webp')", "url('https://wallpapercave.com/wp/wp7248155.jpg')",
 "url('https://i.pinimg.com/originals/47/96/1e/47961e41d324b85d28e6c4d2bba386c5.jpg')",
  "url('https://mcdn.wallpapersafari.com/medium/57/21/7XcoSd.jpg')", 
  "url('https://i.pinimg.com/originals/66/a6/56/66a656fa3b0318df3e6de75349c5d20c.jpg')", 
  "url('https://images2.alphacoders.com/240/thumb-1920-240022.jpg')", 
  "url('https://www.gvme.org/pages/get_image_large.php?id=1435')", 
  "url('https://cdna.artstation.com/p/assets/images/images/025/738/454/large/antonello-venditti-dimensioni-trilogialungavistal-assassino-di-corte-rgbun-po-scura.jpg?1586785676')", 
  "url('https://images3.alphacoders.com/744/thumb-1920-744829.jpg')", 
  "url('https://i.pinimg.com/originals/f0/a2/ea/f0a2ea97feeeccf1d7137a1c0cf9d1b6.jpg')"];


function randomBackground() {
    let image = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    if (image === "url('https://wallpapercave.com/wp/wp7248155.jpg')" || image === "url('https://mcdn.wallpapersafari.com/medium/57/21/7XcoSd.jpg')") {
        document.querySelector('h1').style.color = "black";
        document.querySelector('body').style.backgroundImage =  image;
    } else {
        document.querySelector('h1').style.color = "white";
        document.querySelector('body').style.backgroundImage =  image;
    }
}

function gameOfThrones() {
    document.querySelector('body').style.backgroundImage = "url('game2.webp')";
}

function kingKiller() {
    document.querySelector('body').style.backgroundImage = "url('https://wallpapercave.com/wp/wp7248155.jpg')";
    document.querySelector('h1').style.color = "black";
}

function raven() {
    document.querySelector('body').style.backgroundImage = "url('https://i.pinimg.com/originals/47/96/1e/47961e41d324b85d28e6c4d2bba386c5.jpg')";
}

function throneOfGlass() {
    document.querySelector('body').style.backgroundImage = "url('https://mcdn.wallpapersafari.com/medium/57/21/7XcoSd.jpg')";
    document.querySelector('h1').style.color = "black";
}

function demon() {
    document.querySelector('body').style.backgroundImage = "url('https://i.pinimg.com/originals/66/a6/56/66a656fa3b0318df3e6de75349c5d20c.jpg')";
}

function mistborn() {
    document.querySelector('body').style.backgroundImage = "url('https://images2.alphacoders.com/240/thumb-1920-240022.jpg')";
    document.querySelector('h1').style.color = "white";
}

function stormlight() {
    document.querySelector('body').style.backgroundImage = "url('https://wallpaperaccess.com/full/5625105.jpg')";
}

function witcher() {
    document.querySelector('body').style.backgroundImage = "url('https://wallpaperboat.com/wp-content/uploads/2019/04/the-witcher-3-001.jpg')";
}

function night() {
    document.querySelector('body').style.backgroundImage = "url('https://www.gvme.org/pages/get_image_large.php?id=1435')";
}

function farseer() {
    document.querySelector('body').style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/025/738/454/large/antonello-venditti-dimensioni-trilogialungavistal-assassino-di-corte-rgbun-po-scura.jpg?1586785676')";
}

function powder() {
    document.querySelector('body').style.backgroundImage = "url('https://images3.alphacoders.com/744/thumb-1920-744829.jpg')";
}

function firstlaw() {
    document.querySelector('body').style.backgroundImage = "url('https://i.pinimg.com/originals/f0/a2/ea/f0a2ea97feeeccf1d7137a1c0cf9d1b6.jpg')";
}