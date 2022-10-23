

const url = 'https://animechan.vercel.app/api/random'
getQuote(url);

async function getQuote(url) {
  let x = await fetch(url);
  let data = await x.json();
  let content = data.quote;
  let animeName = data.anime;
  let char = data.character;
  document.getElementById('anime').innerHTML = animeName;
  document.getElementById('quote').innerHTML = content;
  document.getElementById('char').innerHTML = char;
}

