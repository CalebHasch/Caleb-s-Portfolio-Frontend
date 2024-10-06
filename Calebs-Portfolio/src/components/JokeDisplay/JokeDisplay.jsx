import { useContext, useState, useEffect, useRef } from "react";
import { JokeContext } from "../../contexts/JokeContext";

export default function JokeDisplay() {
  const [punchlineDisplayed, setPunchlineDisplayed] = useState(false);
  const joke = useContext(JokeContext);
  const punchlineRef = useRef(null);

  function onClick() {
    setPunchlineDisplayed(false);
    joke.getNewJoke();
  }

  function togglePunchline() {
    setPunchlineDisplayed(true);
    window.setTimeout(onClick, 10000);
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
    <div>
      <p>{joke.joke.setup}</p>
      {punchlineDisplayed ? (
        <p>{joke.joke.punchline}</p>
      ) : (
        <p ref={punchlineRef}>Reveal epic punchline!</p>
      )}
      <button onClick={onClick}>Click for a corny joke</button>
    </div>
  );
}
