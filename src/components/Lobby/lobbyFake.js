import React, { useState } from 'react';
import { Container } from "react-bootstrap";

const Lobby = () => {
  const [players, setPlayers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [submittedPlayerName, setSubmittedPlayerName] = useState('');
  const [startGame, setStartGame] = useState(false); // Added state for starting the game

  const joinLobby = (playerName) => {
    if (players.length < 4 && !players.includes(playerName)) {
      setPlayers([...players, playerName]);
      setShowForm(false);
      setSubmittedPlayerName('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    joinLobby(submittedPlayerName);
  };

  const handleInputChange = (event) => {
    setSubmittedPlayerName(event.target.value);
  };

  const handleStartGame = () => {
    setStartGame(true);
    console.log('Game Started!');
  };

  return (
    <Container>
      <div>
        
      <h2>Lobby</h2><br/>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {players.length < 4 && !startGame && (
          <button onClick={() => setShowForm(true)}>Join Lobby</button>
        )}
        {showForm && !startGame && (
          <form onSubmit={handleSubmit} style={{ marginLeft: '10px' }}>
            <label>
              Player Name:
              <input type="text" value={submittedPlayerName} onChange={handleInputChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
      {!startGame && players.length >= 2 && (
        <button onClick={handleStartGame}>Start Game</button>
      )}
      {startGame}
      </div>
    </Container>
  );
};

export default Lobby;
