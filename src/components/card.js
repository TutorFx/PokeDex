import { colors } from "../assets/data";
import "./card.component.scss";

import { useState } from "react";

import IconButton from '@mui/material/IconButton';
import SwitchAccessShortcut from '@mui/icons-material/SwitchAccessShortcut';

export const Card = ({ pokemon }) => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="pokeitem" id={pokemon.name}>
      {console.log(pokemon)}
      <div className="pokeimg">
        <span>{`#${pokemon.id}`}</span>
        {colors[pokemon.types[0].type.name] !== undefined ? (
          <svg
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352.23 276.63"
          >
            <ellipse
              cx="176.12"
              cy="138.32"
              rx="176.12"
              ry="138.32"
              strokeDasharray="10,10"
              d="M5 40 l215 0"
              stroke="grey"
              strokeWidth={pokemon.types[0].type.name === "normal" ? 1 : 0}
              fill={colors[pokemon.types[0].type.name].color}
            />
            <rect
              width="352.23"
              height="136.33"
              fill={colors[pokemon.types[0].type.name].color}
            />
          </svg>
        ) : undefined}
        <img
          className="sprite"
          alt="sprite"
          src={pokemon.sprites.other["official-artwork"].front_default}
        />
      </div>
      <div className="pokedata">
        <div className="types">
          {pokemon.types.map((tipo, _kid) => (
            <span className={`type-${tipo.type.name}`} key={_kid}>{tipo.type.name}</span>
          ))}
        </div>
        <span className="name">{pokemon.name}</span>
        <IconButton onClick={() => setToggle(!toggle)} aria-label="delete">
          <SwitchAccessShortcut />
        </IconButton>
      </div>
    </div>
  )
};
