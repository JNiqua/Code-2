"use strict";
var Farm;
(function (Farm) {
    class Pig extends Farm.Animal {
        constructor(_name, _species, _sound, _food, _consumeAmount, _crazy) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.crazy = _crazy;
        }
        doSpecialAction() {
            let specialAction = document.getElementById("specialAction");
            if (this.crazy) {
                specialAction.textContent = `${this.name} tried to revive its food.`;
            }
            else {
                specialAction.textContent = `${this.name} enjoyed its meal.`;
            }
        }
    }
    Farm.Pig = Pig;
})(Farm || (Farm = {}));
//# sourceMappingURL=Pig.js.map