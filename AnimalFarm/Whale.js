"use strict";
var Farm;
(function (Farm) {
    class Whale extends Farm.Animal {
        constructor(_name, _species, _sound, _food, _consumeAmount, _sad) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.sad = _sad;
        }
        doSpecialAction() {
            let specialAction = document.getElementById("specialAction");
            if (this.sad) {
                specialAction.textContent = `${this.name} got depressed.`;
            }
            else {
                specialAction.textContent = `${this.name} threw a party.`;
            }
        }
    }
    Farm.Whale = Whale;
})(Farm || (Farm = {}));
//# sourceMappingURL=Whale.js.map