import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {

  const PETS_URL = "http://localhost:3001/pets"

  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  // useEffect(() => {
  //   fetch(PETS_URL)
  //   .then((response) => response.json())
  //   .then((petData) => setPets(petData))
  // }, [])

  const changeType = (event) => {
    setFilters({...filters, type: event.target.value});
  }

  useEffect(() => {
    findPetsClick();
  }, [])

  const findPetsClick = () => {
    fetch(filters.type === "all" ? PETS_URL : PETS_URL + "?type=" + filters.type)
    .then((response) => response.json())
    .then((petData) => setPets(petData))
  }

  const adoptPet = (event) => {
    console.log(event.target.id)
    setPets(pets.map((pet) => {
      if(pet.id == event.target.id) {
        return pet.isAdopted === true;
      } else {
        return pet;
      }
    })
  )}
  

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={changeType} onFindPetsClick={findPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={adoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
