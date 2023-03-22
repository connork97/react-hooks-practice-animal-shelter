import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {

  // const renderPets = pets.map((pet) => {
  //   return (
  //     <div>
  //       <h3>{pet.name}</h3>
  //       <p>Age: {pet.age}</p>
  //       <p>Weight: {pet.weight}</p>
  //       <p>{pet.isAdopted ? "Adopted!" : "Needs a home."}</p>
  //       <button id={pet.id} onClick={onAdoptPet}>Adopt Me!</button>
  //     </div>
  //   )
  // })

  const eachPet = pets.map((pet) => <Pet pet={pet} onAdoptPet={onAdoptPet} />)

  return (
    <div className="ui cards">{eachPet}</div>
  )
}

export default PetBrowser;
