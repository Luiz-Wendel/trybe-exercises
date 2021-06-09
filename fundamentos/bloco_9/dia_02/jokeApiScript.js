// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then(data => {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = data.joke;
      const jokeContainer = document.getElementById('jokeContainer');
      jokeContainer.appendChild(paragraph);
    })
    .catch((error) => console.log(error));
};

window.onload = () => fetchJoke();
