import React, { useEffect, useState } from "react";
import { getCharacters } from "../../../Api";
import StructureCard from "../../../context/StructureCard/StructureCard";
import "./style.css";

function Home() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = () => {
    getCharacters().then((res) => {
      if (res.data.data.results) {
        setCharacters(res.data.data.results);
      }
    });
  };
  console.log(characters);
  return (
    <div className="structures">
      {characters &&
        characters.map((item) => (
          <StructureCard
            // page="/characters/"
            id={item.id}
            key={item.id}
            img={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            name={item.name}
            description={item.description}
          />
        ))}
    </div>
  );
}

export default Home;
