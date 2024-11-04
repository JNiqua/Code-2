"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var SolarSystem;
(function (SolarSystem) {
    window.addEventListener("load", start);
    let rotationSpeed = 1; //set initial rotation speed
    let speedSlider;
    let sun;
    function start() {
        return __awaiter(this, void 0, void 0, function* () {
            const canvas = document.querySelector("canvas");
            speedSlider = document.getElementById("speedSlider");
            speedSlider.addEventListener("input", hndSliderInput);
            canvas.addEventListener("click", hndMouseInput);
            SolarSystem.crc2 = canvas.getContext("2d");
            SolarSystem.crc2.translate(canvas.width / 2, canvas.height / 2); //translate coordinate system center to center of canvas
            const response = yield fetch("BodyData.json");
            const bodyData = yield response.json();
            sun = createBodies(bodyData);
            requestAnimationFrame(animate);
        });
    }
    function hndSliderInput() {
        const value = Number(speedSlider.value) / 5; //divide slider value (0-100) for smoother input
        rotationSpeed = value;
    }
    function hndMouseInput(_event) {
        const mouseX = _event.clientX;
        const mouseY = _event.clientY;
        sun.showInfo(mouseX, mouseY);
    }
    function animate() {
        SolarSystem.crc2.clearRect(-SolarSystem.crc2.canvas.width / 2, -SolarSystem.crc2.canvas.height / 2, SolarSystem.crc2.canvas.width, SolarSystem.crc2.canvas.height);
        SolarSystem.crc2.fillStyle = "black";
        SolarSystem.crc2.fillRect(-SolarSystem.crc2.canvas.width / 2, -SolarSystem.crc2.canvas.height / 2, SolarSystem.crc2.canvas.width, SolarSystem.crc2.canvas.height);
        sun.update(rotationSpeed);
        requestAnimationFrame(animate);
    }
    function createBodies(_data) {
        const body = new SolarSystem.Body(_data);
        for (const child of _data.children) {
            body.addChild(createBodies(child));
        }
        return body;
    }
    /*
    const planets: Body[] = []; //create arrays for bodies (planets and moons)

    // const MercuryMoons: Body[] = [];
    // const VenusMoons: Body[] = [];
    const earthMoons: Body[] = [];
    const marsMoons: Body[] = [];
    const jupiterMoons: Body[] = [];
    const saturnMoons: Body[] = [];
    const uranusMoons: Body[] = [];
    const neptuneMoons: Body[] = [];

    const empty: Body[] = [];

    const sun: Body = new Body("Sun", "yellow", 30, 0, 0, planets); //create all bodies (sun, planets and moons) and push them in their respective arrays

    const mercury: Body = new Body("Mercury", "gainsboro", 3, 0.26, 55, empty);
    planets.push(mercury);
    const venus: Body = new Body("Venus", "moccasin", 8, 0.23, 80, empty);
    planets.push(venus);
    const earth: Body = new Body("Earth", "dodgerblue", 8, 0.15, 112, earthMoons);
    planets.push(earth);
    const mars: Body = new Body("Mars", "saddlebrown", 5, 0.25, 145, marsMoons);
    planets.push(mars);
    const jupiter: Body = new Body("Jupiter", "sienna", 20, 0.13, 195, jupiterMoons);
    planets.push(jupiter);
    const saturn: Body = new Body("Saturn", "wheat", 18, 0.14, 262, saturnMoons);
    planets.push(saturn);
    const uranus: Body = new Body("Uranus", "paleturquoise", 12, 0.17, 320, uranusMoons);
    planets.push(uranus);
    const neptune: Body = new Body("Neptune", "steelblue", 12, 0.13, 370, neptuneMoons);
    planets.push(neptune);

    const earthMoon: Body = new Body("Günni", "grey", 2, 0.3, 12, empty);
    earthMoons.push(earthMoon);

    const marsMoon1: Body = new Body("Phobos", "grey", 2, 0.2, 8, empty);
    marsMoons.push(marsMoon1);
    const marsMoon2: Body = new Body("Deimos", "grey", 2, 0.4, 11, empty);
    marsMoons.push(marsMoon2);
    
    const jupiterMoon1: Body = new Body("Io", "grey", 2, 0.4, 25, empty);
    jupiterMoons.push(jupiterMoon1);
    const jupiterMoon2: Body = new Body("Europa", "grey", 2, 0.15, 26, empty);
    jupiterMoons.push(jupiterMoon2);
    const jupiterMoon3: Body = new Body("Ganymed", "grey", 2, 0.3, 28, empty);
    jupiterMoons.push(jupiterMoon3);
    const jupiterMoon4: Body = new Body("Kallisto", "grey", 2, 0.1, 32, empty);
    jupiterMoons.push(jupiterMoon4);

    const saturnMoon1: Body = new Body("Mimas", "grey", 2, 0.1, 23, empty);
    saturnMoons.push(saturnMoon1);
    const saturnMoon2: Body = new Body("Enceladus", "grey", 2, 0.5, 23, empty);
    saturnMoons.push(saturnMoon2);
    const saturnMoon3: Body = new Body("Tethys", "grey", 2, 0.3, 24, empty);
    saturnMoons.push(saturnMoon3);
    const saturnMoon4: Body = new Body("Dione", "grey", 2, 0.2, 24, empty);
    saturnMoons.push(saturnMoon4);
    const saturnMoon5: Body = new Body("Rhea", "grey", 2, 0.4, 25, empty);
    saturnMoons.push(saturnMoon5);
    const saturnMoon6: Body = new Body("Titan", "grey", 2, 0.15, 26, empty);
    saturnMoons.push(saturnMoon6);
    const saturnMoon7: Body = new Body("Hyperion", "grey", 2, 0.25, 27, empty);
    saturnMoons.push(saturnMoon7);
    const saturnMoon8: Body = new Body("Iapetus", "grey", 2, 0.35, 28, empty);
    saturnMoons.push(saturnMoon8);

    const uranusMoon1: Body = new Body("Miranda", "grey", 2, 0.4, 16, empty);
    uranusMoons.push(uranusMoon1);
    const uranusMoon2: Body = new Body("Ariel", "grey", 2, 0.5, 16, empty);
    uranusMoons.push(uranusMoon2);
    const uranusMoon3: Body = new Body("Umbriel", "grey", 2, 0.3, 17, empty);
    uranusMoons.push(uranusMoon3);
    const uranusMoon4: Body = new Body("Titania", "grey", 2, 0.2, 18, empty);
    uranusMoons.push(uranusMoon4);
    const uranusMoon5: Body = new Body("Oberon", "grey", 2, 0.35, 20, empty);
    uranusMoons.push(uranusMoon5);

    const neptuneMoon: Body = new Body("Triton", "grey", 2, 0.3, 17, empty);
    neptuneMoons.push(neptuneMoon);

    cosole.log(JSON.stringify(sun));
    */
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Main.js.map