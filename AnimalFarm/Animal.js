"use strict";
var Farm;
(function (Farm) {
    class Animal {
        constructor(_name, _species, _sound, _food, _consumeAmount) {
            this.set(_name, _species, _sound, _food, _consumeAmount);
        }
        set(_name, _species, _sound, _food, _consumeAmount) {
            this.name = _name;
            this.species = _species;
            this.sound = _sound;
            this.food = _food;
            this.consumeAmount = _consumeAmount;
        }
        sing() {
            const name = document.getElementById("name");
            name.textContent = this.name;
            const song = document.getElementById("song");
            song.textContent = `On the farm lives a ${this.species} and it makes ${this.sound}.`;
        }
        eat() {
            const food = document.getElementById("food");
            const foodAmount = this.food.storageAmount - this.consumeAmount;
            food.textContent = `${this.food.type}: ${foodAmount}`;
        }
        doSpecialAction() {
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=Animal.js.map