import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState();

  const getRandomColor = () => {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    //console.log(hex[Math.floor(Math.random() * 16)]);

    const color = new Array(6)
      .fill("")
      .map(() => hex[Math.floor(Math.random() * 16)])
      .join("");
    //console.log(color);

    return `#${color}`;
  };
  const pickColor = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    setAnswers(
      [newColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };
  useEffect(() => {
    pickColor();
  }, []);

  function checkAnswer(a) {
    //console.log(a);
    if (a === color) {
      //console.log("Correct");
      setResult(true);
      pickColor();
    } else {
      setResult(false);
      //console.log("Wrong!!");
    }
  }

  return (
    <div className="App">
      <div>
        <div className="guess-color" style={{ background: color }}></div>
        {answers.map((a) => {
          return (
            <button onClick={() => checkAnswer(a)} key={a}>
              {a}
            </button>
          );
        })}
        {result === true && <div className="correct">Correct</div>}
        {result === false && <div className="wrong">Wrong!!</div>}
      </div>
    </div>
  );
}
