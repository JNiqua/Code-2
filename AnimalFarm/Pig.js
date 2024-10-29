"use strict";
var Farm;
(function (Farm) {
    class Pig extends Farm.Animal {
        constructor(_name, _species, _sound, _food, _consumeAmount, _cool) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.cool = _cool;
        }
        doSpecialAction() {
            let specialAction = document.getElementById("specialAction");
            if (this.cool) {
                specialAction.textContent = `${this.name} 1.`;
            }
            else {
                specialAction.textContent = `${this.name} runs in a circle.`;
            }
        }
    }
    Farm.Pig = Pig;
})(Farm || (Farm = {}));
//# sourceMappingURL=Pig.js.map