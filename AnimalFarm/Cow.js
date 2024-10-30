"use strict";
var Farm;
(function (Farm) {
    class Cow extends Farm.Animal {
        constructor(_name, _species, _sound, _food, _consumeAmount, _cool) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.cool = _cool;
        }
        doSpecialAction() {
            const specialAction = document.getElementById("specialAction");
            if (this.cool) {
                specialAction.textContent = `${this.name} put on shades.`;
            }
            else {
                specialAction.textContent = `${this.name} ran in a circle.`;
            }
        }
    }
    Farm.Cow = Cow;
})(Farm || (Farm = {}));
//# sourceMappingURL=Cow.js.map