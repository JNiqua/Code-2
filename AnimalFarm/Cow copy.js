"use strict";
var Farm;
(function (Farm) {
    class Cow extends Farm.Animal {
        constructor(_name, _species, _sound, _food, _consumeAmount, _cool) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.cool = _cool;
        }
        doSpecialAction() {
            let specialAction = document.getElementById("specialAction");
            if (this.cool) {
                specialAction.textContent = `${this.name} puts on shades.`;
            }
            else {
                specialAction.textContent = `${this.name} runs in a circle.`;
            }
        }
    }
    Farm.Cow = Cow;
})(Farm || (Farm = {}));
//# sourceMappingURL=Cow%20copy.js.map