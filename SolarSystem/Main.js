"use strict";
var SolarSystem;
(function (SolarSystem) {
    const canvas = document.querySelector("canvas");
    SolarSystem.crc2 = canvas.getContext("2d");
    let Planets = [];
    let jupiterMoons = [];
    let jupiter = new SolarSystem.Body("Jupiter", "red", 30, 5, 100, jupiterMoons);
    function update() {
    }
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Main.js.map