import logo from "./logo.svg";
import "./App.scss";

import { Container } from "@mui/system";
import axios from "axios";

import React, { useEffect, useState } from "react";

import {Card} from "./components/card.js"

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container>
        <div className="pokelist">
          {pokemons.length === 0 ? (
            <div>carregando...</div>
          ) : (
            pokemons.map((pokemon, key) => <Card pokemon={pokemon.data} key={key.toString()} />)
          )}
        </div>
      </Container>
    </div>
  );
}

export default App;
