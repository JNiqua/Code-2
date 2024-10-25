"use strict";
var Farm;
(function (Farm) {
    const hay = new Farm.Food("Hay", 100);
    const seeds = new Farm.Food("Seeds", 100);
    const corpses = new Farm.Food("Corpses", 20);
    const krill = new Farm.Food("Krill", 100);
    const stable = [];
    const cow = new Farm.Animal("Gisela", "Cow", "Mooh", hay, 5);
    stable.push(cow);
    const chicken = new Farm.Animal("Huun", "Chicken", "Bok Bok", seeds, 8);
    stable.push(chicken);
    const pig = new Farm.Animal("Gunther", "Pig", "Oink", corpses, 1);
    stable.push(pig);
    const sheep = new Farm.Animal("Esmeralda", "Sheep", "Baaah", hay, 4);
    stable.push(sheep);
    const whale = new Farm.Animal("Angela", "Whale", "Ooof", krill, 7);
    stable.push(whale);
    let count = 0;
    callAnimal();
    function callAnimal() {
        if (count <= stable.length) {
            stable[count].sing();
            stable[count].eat();
            count++;
            console.log(count);
            setTimeout(callAnimal, 3000);
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=Farm.js.map