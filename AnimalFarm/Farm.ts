namespace Farm {
    
    const hay: Food = new Food("Hay", 100);
    const seeds: Food = new Food("Seeds", 100);
    const corpses: Food = new Food("Corpses", 20);
    const krill: Food = new Food("Krill", 100);
    
    const stable: Animal[] = [];
    
    const cow: Animal = new Animal("Gisela", "Cow", "Mooh", hay, 5);
    stable.push(cow);
    const chicken: Animal = new Animal("Huun", "Chicken", "Bok Bok", seeds, 8);
    stable.push(chicken);
    const pig: Animal = new Animal("Gunther", "Pig", "Oink", corpses, 1);
    stable.push(pig);
    const sheep: Animal = new Animal("Esmeralda", "Sheep", "Baaah", hay, 4);
    stable.push(sheep);
    const whale: Animal = new Animal("Angela", "Whale", "Ooof", krill, 7);
    stable.push(whale);
    
    let count: number = 0;
    callAnimal();

    function callAnimal(): void {
        if(count<=stable.length) {
            stable[count].sing();
            stable[count].eat();
            count++;
            console.log(count);
            setTimeout(callAnimal, 3000)
        }
    }
}