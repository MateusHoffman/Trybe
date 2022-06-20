// apiScript.js

const API_URL = 'https://icanhazdadjoke.com/';

const addJokeInDom = (joke) => {
  const h2Joke = document.querySelector('#jokeContainer')
  h2Joke.innerText = joke
}

const fetchJoke = async () => {
  const fetchApi = await fetch(API_URL, {method: 'GET', headers: { 'Accept': 'application/json' }})
  const getData = await fetchApi.json()
  addJokeInDom(getData.joke)
};


window.onload = () => fetchJoke();