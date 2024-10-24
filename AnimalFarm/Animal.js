"use strict";
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
    }
}
//# sourceMappingURL=Animal.js.map