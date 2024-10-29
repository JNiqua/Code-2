"use strict";
var Farm;
(function (Farm) {
    class Chicken extends Farm.Animal {
        constructor(_name, _species, _sound, _food, _consumeAmount) {
            super(_name, _species, _sound, _food, _consumeAmount);
        }
        doSpecialAction() {
            let specialAction = document.getElementById("specialAction");
            specialAction.textContent = "täst";
        }
    }
    Farm.Chicken = Chicken;
})(Farm || (Farm = {}));
//# sourceMappingURL=Chicken.js.map