"use strict";
var SolarSystem;
(function (SolarSystem) {
    const canvas = document.querySelector("canvas");
    SolarSystem.crc2 = canvas.getContext("2d");
    const speedSlider = document.getElementById("speedSlider");
    speedSlider.addEventListener("input", hndSliderInput);
    canvas.addEventListener("click", hndMouseInput);
    let rotationSpeed = 1; //set initial rotation speed
    SolarSystem.crc2.translate(canvas.width / 2, canvas.height / 2); //translate coordinate system center to center of canvas
    requestAnimationFrame(animate);
    function hndSliderInput() {
        const value = Number(speedSlider.value) / 5; //divide slider value (0-100) for smoother input
        rotationSpeed = value;
    }
    function hndMouseInput(_event) {
        let mouseX = _event.clientX;
        let mouseY = _event.clientY;
        sun.showInfo(mouseX, mouseY);
    }
    function animate() {
        SolarSystem.crc2.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        SolarSystem.crc2.fillStyle = "black";
        SolarSystem.crc2.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        sun.update(rotationSpeed);
        requestAnimationFrame(animate);
    }
    let Planets = []; //create arrays for bodies (planets and moons)
    // let MercuryMoons: Body[] = [];
    // let VenusMoons: Body[] = [];
    let EarthMoons = [];
    let MarsMoons = [];
    let JupiterMoons = [];
    let SaturnMoons = [];
    let UranusMoons = [];
    let NeptuneMoons = [];
    let Empty = [];
    let sun = new SolarSystem.Body("Sun", "yellow", 30, 0, 0, Planets); //create all bodies (sun, planets and moons) and push them in their respective arrays
    let mercury = new SolarSystem.Body("Mercury", "gainsboro", 3, 0.26, 55, Empty);
    Planets.push(mercury);
    let venus = new SolarSystem.Body("Venus", "moccasin", 8, 0.23, 80, Empty);
    Planets.push(venus);
    let earth = new SolarSystem.Body("Earth", "dodgerblue", 8, 0.15, 112, EarthMoons);
    Planets.push(earth);
    let mars = new SolarSystem.Body("Mars", "saddlebrown", 5, 0.25, 145, MarsMoons);
    Planets.push(mars);
    let jupiter = new SolarSystem.Body("Jupiter", "sienna", 20, 0.13, 195, JupiterMoons);
    Planets.push(jupiter);
    let saturn = new SolarSystem.Body("Saturn", "wheat", 18, 0.14, 262, SaturnMoons);
    Planets.push(saturn);
    let uranus = new SolarSystem.Body("Uranus", "paleturquoise", 12, 0.17, 320, UranusMoons);
    Planets.push(uranus);
    let neptune = new SolarSystem.Body("Neptune", "steelblue", 12, 0.13, 370, NeptuneMoons);
    Planets.push(neptune);
    let earthMoon = new SolarSystem.Body("Günni", "grey", 2, 0.3, 12, Empty);
    EarthMoons.push(earthMoon);
    let marsMoon1 = new SolarSystem.Body("Phobos", "grey", 2, 0.2, 8, Empty);
    MarsMoons.push(marsMoon1);
    let marsMoon2 = new SolarSystem.Body("Deimos", "grey", 2, 0.4, 11, Empty);
    MarsMoons.push(marsMoon2);
    let jupiterMoon1 = new SolarSystem.Body("Io", "grey", 2, 0.4, 25, Empty);
    JupiterMoons.push(jupiterMoon1);
    let jupiterMoon2 = new SolarSystem.Body("Europa", "grey", 2, 0.15, 26, Empty);
    JupiterMoons.push(jupiterMoon2);
    let jupiterMoon3 = new SolarSystem.Body("Ganymed", "grey", 2, 0.3, 28, Empty);
    JupiterMoons.push(jupiterMoon3);
    let jupiterMoon4 = new SolarSystem.Body("Kallisto", "grey", 2, 0.1, 32, Empty);
    JupiterMoons.push(jupiterMoon4);
    let saturnMoon1 = new SolarSystem.Body("Mimas", "grey", 2, 0.1, 23, Empty);
    SaturnMoons.push(saturnMoon1);
    let saturnMoon2 = new SolarSystem.Body("Enceladus", "grey", 2, 0.5, 23, Empty);
    SaturnMoons.push(saturnMoon2);
    let saturnMoon3 = new SolarSystem.Body("Tethys", "grey", 2, 0.3, 24, Empty);
    SaturnMoons.push(saturnMoon3);
    let saturnMoon4 = new SolarSystem.Body("Dione", "grey", 2, 0.2, 24, Empty);
    SaturnMoons.push(saturnMoon4);
    let saturnMoon5 = new SolarSystem.Body("Rhea", "grey", 2, 0.4, 25, Empty);
    SaturnMoons.push(saturnMoon5);
    let saturnMoon6 = new SolarSystem.Body("Titan", "grey", 2, 0.15, 26, Empty);
    SaturnMoons.push(saturnMoon6);
    let saturnMoon7 = new SolarSystem.Body("Hyperion", "grey", 2, 0.25, 27, Empty);
    SaturnMoons.push(saturnMoon7);
    let saturnMoon8 = new SolarSystem.Body("Iapetus", "grey", 2, 0.35, 28, Empty);
    SaturnMoons.push(saturnMoon8);
    let uranusMoon1 = new SolarSystem.Body("Miranda", "grey", 2, 0.4, 16, Empty);
    UranusMoons.push(uranusMoon1);
    let uranusMoon2 = new SolarSystem.Body("Ariel", "grey", 2, 0.5, 16, Empty);
    UranusMoons.push(uranusMoon2);
    let uranusMoon3 = new SolarSystem.Body("Umbriel", "grey", 2, 0.3, 17, Empty);
    UranusMoons.push(uranusMoon3);
    let uranusMoon4 = new SolarSystem.Body("Titania", "grey", 2, 0.2, 18, Empty);
    UranusMoons.push(uranusMoon4);
    let uranusMoon5 = new SolarSystem.Body("Oberon", "grey", 2, 0.35, 20, Empty);
    UranusMoons.push(uranusMoon5);
    let neptuneMoon = new SolarSystem.Body("Triton", "grey", 2, 0.3, 17, Empty);
    NeptuneMoons.push(neptuneMoon);
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Main.js.map