"use strict";
var Farm;
(function (Farm) {
    class Sheep extends Farm.Animal {
        constructor(_name, _species, _sound, _food, _consumeAmount, _angry) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.angry = _angry;
        }
        doSpecialAction() {
            const specialAction = document.getElementById("specialAction");
            if (this.angry) {
                specialAction.textContent = `${this.name} tore down the stable.`;
            }
            else {
                specialAction.textContent = `${this.name} had a spa day.`;
            }
        }
    }
    Farm.Sheep = Sheep;
})(Farm || (Farm = {}));
//# sourceMappingURL=Sheep.js.map