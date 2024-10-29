"use strict";
var Farm;
(function (Farm) {
    class Chicken extends Farm.Animal {
        constructor(_name, _species, _sound, _food, _consumeAmount, _tired) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.tired = _tired;
        }
        doSpecialAction() {
            let specialAction = document.getElementById("specialAction");
            if (this.tired) {
                specialAction.textContent = `${this.name} slept all day.`;
            }
            else {
                specialAction.textContent = `${this.name} tried to fly away.`;
            }
        }
    }
    Farm.Chicken = Chicken;
})(Farm || (Farm = {}));
//# sourceMappingURL=Chicken.js.map