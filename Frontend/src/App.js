import React, { useState } from "react";
import "./App.css"
const FinancialLiteracyMultiplayerApp = () => {
  const [players, setPlayers] = useState([
    { name: "Player 1", money: 10000 },
    { name: "Player 2", money: 10000 },
    { name: "Player 3", money: 10000 },
    { name: "Player 4", money: 10000 },
  ]);

  const handleInvest = (player, investment) => {
    const updatedPlayers = players.map((player) => {
      if (player.name === player.name) {
        player.money -= investment;
      }
      return player;
    });

    setPlayers(updatedPlayers);
  };

  return (
    <div>
      <h1>Financial Literacy Multiplayer App</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Player</th>
            <th>Money</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.name}>
              <td>{player.name}</td>
              <td>{player.money}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Invest</h2>
        <select>
          {players.map((player) => (
            <option key={player.name} value={player.name}>
              {player.name}
            </option>
          ))}
        </select>
        <input type="number" placeholder="Amount to invest" />
        <button onClick={() => handleInvest(player, investment)}>Invest</button>
      </div>
    </div>
  );
};

export default FinancialLiteracyMultiplayerApp;
