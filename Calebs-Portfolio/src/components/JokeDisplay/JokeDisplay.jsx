import { useContext, useState } from "react";
import { JokeContext } from "../../contexts/JokeContext";
import Preloader from "../Preloader/Preloader";
import "./JokeDisplay.css";

export default function JokeDisplay() {
  const [punchlineDisplayed, setPunchlineDisplayed] = useState(false);
  const joke = useContext(JokeContext);

  function onClick() {
    setPunchlineDisplayed(false);
    joke.getNewJoke();
  }

  function togglePunchline() {
    setPunchlineDisplayed(true);
    setTimeout(onClick, 10000);
  }

  return (
    <div className="joke-display">
      {joke.isLoading ? (
        <Preloader />
      ) : (
        <div>
          <p className="joke-display__setup">{joke.joke.setup}</p>
          {punchlineDisplayed ? (
            <p className="joke-display__punchline">{joke.joke.punchline}</p>
          ) : (
            <p
              className="joke-display__hidden-punchline"
              onClick={togglePunchline}
              onMouseEnter={togglePunchline}
            >
              Reveal epic punchline!
            </p>
          )}
        </div>
      )}
      <button className="joke-display__button" onClick={onClick}>
        Click for a corny joke
      </button>
    </div>
  );
}
