export default function SearchPrompts({ buttonText, search, prompt }) {
  function onClick() {
    search(prompt);
  }

  return (
    <>
      <button onClick={onClick}>{buttonText}</button>
    </>
  );
}
