import { useContext, useState, useEffect, useRef } from "react";
import { JokeContext } from "../../contexts/JokeContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import Preloader from "../Preloader/Preloader";
import "./JokeDisplay.css";

export default function JokeDisplay() {
  const [punchlineDisplayed, setPunchlineDisplayed] = useState(false);
  const joke = useContext(JokeContext);
  const isLoading = useContext(LoadingContext);
  const punchlineRef = useRef(null);

  function onClick() {
    setPunchlineDisplayed(false);
    joke.getNewJoke();
    console.log(punchlineRef);
  }

  function togglePunchline() {
    setPunchlineDisplayed(true);
  }

  useEffect(() => {
    if (punchlineRef && punchlineRef.current) {
      const hiddenPunch = punchlineRef.current;

      hiddenPunch.addEventListener("mouseover", togglePunchline);

      return () =>
        hiddenPunch.removeEventListener("mouseover", togglePunchline);
    }
  }, []);

  return (
    <div className="joke-display">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <p className="joke-display__setup">{joke.joke.setup}</p>
          {punchlineDisplayed ? (
            <p className="joke-display__punchline">{joke.joke.punchline}</p>
          ) : (
            <p
              className="joke-display__hidden-punchline"
              ref={punchlineRef}
              onClick={togglePunchline}
            >
              Reveal epic punchline!
            </p>
          )}
        </>
      )}
      <button className="joke-display__button" onClick={onClick}>
        Click for a corny joke
      </button>
    </div>
  );
}
