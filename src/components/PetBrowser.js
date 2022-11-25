import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {

  // const petList = pets.map((pet) => {
  //   return <Pet key={pet.id} id={pet.id} gender={pet.gender} name={pet.name} type={pet.type}
  //     isAdopt={pet.isAdopted} age={pet.age} weight={pet.weight} onAdoptPet={onAdoptPet} />
  // })

  const petList = pets.map((pet) => {
    return <Pet key={pet.id} id={pet.id} pet={pet} isAdopt={pet.isAdopted} onAdoptPet={onAdoptPet} />
  })

  return <div className="ui cards">{petList}</div>;
}

export default PetBrowser;
