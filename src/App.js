import { useState } from "react";
import "./App.css";
import cards from "./cards.webp";

function App() {
  const [cardNumber, setCardNumber] = useState(54);
  const [playedCards, setPlayedCards] = useState([]);

  const getCardPosition = (index) => {
    const x = (index % 10) * 11.1;
    const y = Math.floor(index / 10) * 10;
    return `${x}% ${y}%`;
  };

  console.log("playedCards: ", playedCards);

  return (
    <>
      <input
        onChange={(e) => setCardNumber(parseInt(e.target.value))}
        value={cardNumber}
      />
      <div className="App">
        {Array.from(Array(cardNumber).keys()).map((x, i) => (
          <div
            key={i}
            style={{
              height: 103,
              width: 69,
              backgroundImage: `url(${cards})`,
              backgroundPosition: getCardPosition(i),
              border: "1px solid #333",
              margin: 5,
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => setPlayedCards([...playedCards, i])}
          >
            <div
              style={{
                backgroundColor: playedCards.includes(i)
                  ? "rgba(0,0,0, 0.5)"
                  : "",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                transition: "all 0.3s ease",
              }}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => setPlayedCards([])}
        style={{
          backgroundColor: "#FE5B5F",
          border: 0,
          borderRadius: 3,
          padding: "12px 16px",
          color: "#fff",
          marginTop: 140,
        }}
      >
        RESET
      </button>
    </>
  );
}

export default App;
