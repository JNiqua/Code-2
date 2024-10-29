"use strict";
var Farm;
(function (Farm) {
    class Whale extends Farm.Animal {
        constructor(_name, _species, _sound, _food, _consumeAmount, _cool) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.cool = _cool;
        }
        doSpecialAction() {
            let specialAction = document.getElementById("specialAction");
            if (this.cool) {
                specialAction.textContent = `${this.name} 3.`;
            }
            else {
                specialAction.textContent = `${this.name} runs in a circle.`;
            }
        }
    }
    Farm.Whale = Whale;
})(Farm || (Farm = {}));
//# sourceMappingURL=Whale.js.map