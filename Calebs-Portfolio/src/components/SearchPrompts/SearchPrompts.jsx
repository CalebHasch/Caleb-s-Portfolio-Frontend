import "./SearchPrompts.css";

export default function SearchPrompts({ buttonText, search, prompt }) {
  function onClick() {
    search(prompt);
  }

  return (
    <>
      <button className="prompt" onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
}
