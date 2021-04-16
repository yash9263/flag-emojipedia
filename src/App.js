import { useState } from "react";
import "./styles.css";
import Flags from "./Flags";

var flagWeKnow = Object.keys(Flags);
export default function App() {
  const [meaning, setMeaning] = useState("Flag");

  function flagInputHandler(event) {
    var userInput = event.target.value;

    var meaning = Flags[userInput];

    console.log(meaning);
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function flagClickHandler(flag) {
    var meaning = Flags[flag];
    setMeaning(meaning);
    console.log(flag);
  }

  return (
    <div className="App">
      <h1>Get your country flag emojis</h1>

      <input onChange={flagInputHandler}></input>
      <h2> {meaning} </h2>
      <h3>Flags we know</h3>
      {flagWeKnow.map((flag) => {
        return (
          <span
            className="flag"
            onClick={() => flagClickHandler(flag)}
            key={flag}
          >
            {" "}
            {flag}{" "}
          </span>
        );
      })}
      <div class="footer">Flags emojis won't show on windows devices.</div>
    </div>
  );
}
