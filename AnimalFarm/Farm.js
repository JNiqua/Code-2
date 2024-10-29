"use strict";
var Farm;
(function (Farm) {
    const hay = new Farm.Food("Hay", 100);
    const seeds = new Farm.Food("Seeds", 100);
    const corpses = new Farm.Food("Corpses", 20);
    const krill = new Farm.Food("Krill", 100);
    const stable = [];
    const cow = new Farm.Cow("Gisela", "Cow", "Mooh", hay, 5, true);
    stable.push(cow);
    // const chicken: Animal = new Chicken("Huun", "Chicken", "Bok Bok", seeds, 8);
    // stable.push(chicken);
    // const pig: Animal = new Pig("Gunther", "Pig", "Oink", corpses, 1, true);
    // stable.push(pig);
    // const sheep: Animal = new Sheep("Esmeralda", "Sheep", "Baaah", hay, 4, true);
    // stable.push(sheep);
    // const whale: Animal = new Whale("Angela", "Whale", "Ooof", krill, 7, true);
    // stable.push(whale);
    let count = 0;
    callAnimal();
    function callAnimal() {
        if (count <= stable.length) {
            stable[count].sing();
            stable[count].eat();
            stable[count].doSpecialAction();
            // cow.doSpecialAction();
            count++;
            console.log(count);
            setTimeout(callAnimal, 3000);
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=Farm.js.map