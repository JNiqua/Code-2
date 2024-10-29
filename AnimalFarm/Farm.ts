namespace Farm {
    
    const hay: Food = new Food("Hay", 100);
    const seeds: Food = new Food("Seeds", 100);
    const corpses: Food = new Food("Corpses", 20);
    const krill: Food = new Food("Krill", 100);
    
    const stable: Animal[] = [];
    
    const cow: Animal = new Cow("Gisela", "Cow", "Mooh", hay, 5, true);
    stable.push(cow);
    // const chicken: Animal = new Chicken("Huun", "Chicken", "Bok Bok", seeds, 8, true);
    // stable.push(chicken);
    const pig: Animal = new Pig("Gunther", "Pig", "Oink", corpses, 1, true);
    stable.push(pig);
    const sheep: Animal = new Sheep("Esmeralda", "Sheep", "Baaah", hay, 4, true);
    stable.push(sheep);
    const whale: Animal = new Whale("Angela", "Whale", "Ooof", krill, 7, true);
    stable.push(whale);
    
    let count: number = 0;
    callAnimal();

    function callAnimal(): void {
        if(count<=stable.length) {
            stable[count].sing();
            stable[count].eat();
            // stable[count].
            // cow.doSpecialAction();
            count++;
            console.log(count);
            setTimeout(callAnimal, 3000)
        }
    }
}