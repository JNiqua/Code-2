"use strict";
var Farm;
(function (Farm) {
    class Sheep extends Farm.Animal {
        constructor(_name, _species, _sound, _food, _consumeAmount, _cool) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.cool = _cool;
        }
        doSpecialAction() {
            let specialAction = document.getElementById("specialAction");
            if (this.cool) {
                specialAction.textContent = `${this.name} 2.`;
            }
            else {
                specialAction.textContent = `${this.name} runs in a circle.`;
            }
        }
    }
    Farm.Sheep = Sheep;
})(Farm || (Farm = {}));
//# sourceMappingURL=Sheep.js.map