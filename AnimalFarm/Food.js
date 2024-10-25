"use strict";
var Farm;
(function (Farm) {
    class Food {
        constructor(_type, _storageAmount) {
            this.set(_type, _storageAmount);
        }
        set(_type, _storageAmount) {
            this.type = _type;
            this.storageAmount = _storageAmount;
        }
    }
    Farm.Food = Food;
})(Farm || (Farm = {}));
//# sourceMappingURL=Food.js.map