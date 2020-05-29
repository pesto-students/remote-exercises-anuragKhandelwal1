const animalSort = animals => {
    return animals.sort((animalA, animalB) => animalA.numberOfLegs - animalB.numberOfLegs !== 0 ? animalA.numberOfLegs - animalB.numberOfLegs : animalA.name > animalB.name ? 1 : -1
    );
};


export { animalSort };
