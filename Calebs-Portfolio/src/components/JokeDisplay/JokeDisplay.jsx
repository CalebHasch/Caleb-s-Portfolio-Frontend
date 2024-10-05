import { useContext, useState } from "react";
import { JokeContext } from "../../contexts/JokeContext";

export default function JokeDisplay() {
  const [punchlineDisplayed, setPunchlineDisplayed] = useState(false);
  const joke = useContext(JokeContext);

  function onClick() {
    joke.getNewJoke();
  }

  return (
    <div>
      <p>{joke.joke.setup}</p>
      {punchlineDisplayed ? (
        <p>{joke.joke.punchline}</p>
      ) : (
        <p>Epic punchline!</p>
      )}
      <button onClick={onClick}>Click for a corny joke</button>
    </div>
  );
}
