import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleType(e) {
    console.log(e.target.value);
    setFilters({
      type: e.target.value
    });
  }

  function handlePets() {

    if (filters.type === "all") {
      fetch("http://localhost:3001/pets")
        .then((r) => r.json())
        .then((data) => setPets(data))
    } else {
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
        .then((r) => r.json())
        .then((data) => setPets(data))
    }
  }

  function handleAdoptPet(id) {
    // fetch(`http://localhost:3001/pets/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     "isAdopted": !isAdopt
    //   })
    // })
    // .then((r)=>r.json())
    // .then((data)=> {
    //   const updatedPets = pets.map((pet)=>{
    //     if (pet.id === id) {
    //       return data
    //     } else {
    //       return pet
    //     }
    //   })

    //   setPets(updatedPets)
    // })

    const updatedPets = pets.map((pet) => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
      })

      setPets(updatedPets)

  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleType} onFindPetsClick={handlePets} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
