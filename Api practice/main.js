document.getElementById('quote').addEventListener('click', getQuote)
document.getElementById('catboy').addEventListener('click', getPic)

function getQuote() {
  fetch('https://animechan.vercel.app/api/random')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.getElementById('anime').innerHTML = `Anime name: ${data.anime}`
    document.querySelector('h2').innerHTML = `Character: ${data.character}`
    document.querySelector('h3').innerHTML = `Quote: ${data.quote}`
  })
  .catch(err => {
    console.log(err)
  })
}

function getPic() {
  fetch('https://api.catboys.com/img')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('img').src = data.url
  })
  .catch(err => {
    console.log(err)
  })
}

