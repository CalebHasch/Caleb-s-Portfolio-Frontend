function processResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function fetchJoke() {
  return fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  ).then(processResponse);
}

export { fetchJoke };
