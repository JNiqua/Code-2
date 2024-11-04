namespace SolarSystem {
    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
    
    const speedSlider: HTMLInputElement = <HTMLInputElement>document.getElementById("speedSlider");
    speedSlider.addEventListener("input", hndSliderInput);
    canvas.addEventListener("click", hndMouseInput);

    let rotationSpeed: number = 1; //set initial rotation speed
    
    crc2.translate(canvas.width/2, canvas.height/2); //translate coordinate system center to center of canvas

    requestAnimationFrame(animate);
    
    function hndSliderInput(): void { //control rotation speed with slider input
        const value: number = Number(speedSlider.value)/5; //divide slider value (0-100) for smoother input
        rotationSpeed = value;
    }

    function hndMouseInput(_event: MouseEvent): void {
        const mouseX: number = _event.clientX;
        const mouseY: number = _event.clientY;
        sun.showInfo(mouseX, mouseY);
    }
    
    function animate(): void {
        crc2.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
        crc2.fillStyle = "black";
        crc2.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
        
        sun.update(rotationSpeed);
        requestAnimationFrame(animate);
    }
    
    const planets: Body[] = []; //create arrays for bodies (planets and moons)

    // const MercuryMoons: Body[] = [];
    // const VenusMoons: Body[] = [];
    const EarthMoons: Body[] = [];
    const MarsMoons: Body[] = [];
    const JupiterMoons: Body[] = [];
    const SaturnMoons: Body[] = [];
    const UranusMoons: Body[] = [];
    const NeptuneMoons: Body[] = [];

    const Empty: Body[] = [];

    const sun: Body = new Body("Sun", "yellow", 30, 0, 0, Planets); //create all bodies (sun, planets and moons) and push them in their respective arrays

    const mercury: Body = new Body("Mercury", "gainsboro", 3, 0.26, 55, Empty);
    Planets.push(mercury);
    const venus: Body = new Body("Venus", "moccasin", 8, 0.23, 80, Empty);
    Planets.push(venus);
    const earth: Body = new Body("Earth", "dodgerblue", 8, 0.15, 112, EarthMoons);
    Planets.push(earth);
    const mars: Body = new Body("Mars", "saddlebrown", 5, 0.25, 145, MarsMoons);
    Planets.push(mars);
    const jupiter: Body = new Body("Jupiter", "sienna", 20, 0.13, 195, JupiterMoons);
    Planets.push(jupiter);
    const saturn: Body = new Body("Saturn", "wheat", 18, 0.14, 262, SaturnMoons);
    Planets.push(saturn);
    const uranus: Body = new Body("Uranus", "paleturquoise", 12, 0.17, 320, UranusMoons);
    Planets.push(uranus);
    const neptune: Body = new Body("Neptune", "steelblue", 12, 0.13, 370, NeptuneMoons);
    Planets.push(neptune);

    const earthMoon: Body = new Body("Günni", "grey", 2, 0.3, 12, Empty);
    EarthMoons.push(earthMoon);

    const marsMoon1: Body = new Body("Phobos", "grey", 2, 0.2, 8, Empty);
    MarsMoons.push(marsMoon1);
    const marsMoon2: Body = new Body("Deimos", "grey", 2, 0.4, 11, Empty);
    MarsMoons.push(marsMoon2);
    
    const jupiterMoon1: Body = new Body("Io", "grey", 2, 0.4, 25, Empty);
    JupiterMoons.push(jupiterMoon1);
    const jupiterMoon2: Body = new Body("Europa", "grey", 2, 0.15, 26, Empty);
    JupiterMoons.push(jupiterMoon2);
    const jupiterMoon3: Body = new Body("Ganymed", "grey", 2, 0.3, 28, Empty);
    JupiterMoons.push(jupiterMoon3);
    const jupiterMoon4: Body = new Body("Kallisto", "grey", 2, 0.1, 32, Empty);
    JupiterMoons.push(jupiterMoon4);

    const saturnMoon1: Body = new Body("Mimas", "grey", 2, 0.1, 23, Empty);
    SaturnMoons.push(saturnMoon1);
    const saturnMoon2: Body = new Body("Enceladus", "grey", 2, 0.5, 23, Empty);
    SaturnMoons.push(saturnMoon2);
    const saturnMoon3: Body = new Body("Tethys", "grey", 2, 0.3, 24, Empty);
    SaturnMoons.push(saturnMoon3);
    const saturnMoon4: Body = new Body("Dione", "grey", 2, 0.2, 24, Empty);
    SaturnMoons.push(saturnMoon4);
    const saturnMoon5: Body = new Body("Rhea", "grey", 2, 0.4, 25, Empty);
    SaturnMoons.push(saturnMoon5);
    const saturnMoon6: Body = new Body("Titan", "grey", 2, 0.15, 26, Empty);
    SaturnMoons.push(saturnMoon6);
    const saturnMoon7: Body = new Body("Hyperion", "grey", 2, 0.25, 27, Empty);
    SaturnMoons.push(saturnMoon7);
    const saturnMoon8: Body = new Body("Iapetus", "grey", 2, 0.35, 28, Empty);
    SaturnMoons.push(saturnMoon8);

    const uranusMoon1: Body = new Body("Miranda", "grey", 2, 0.4, 16, Empty);
    UranusMoons.push(uranusMoon1);
    const uranusMoon2: Body = new Body("Ariel", "grey", 2, 0.5, 16, Empty);
    UranusMoons.push(uranusMoon2);
    const uranusMoon3: Body = new Body("Umbriel", "grey", 2, 0.3, 17, Empty);
    UranusMoons.push(uranusMoon3);
    const uranusMoon4: Body = new Body("Titania", "grey", 2, 0.2, 18, Empty);
    UranusMoons.push(uranusMoon4);
    const uranusMoon5: Body = new Body("Oberon", "grey", 2, 0.35, 20, Empty);
    UranusMoons.push(uranusMoon5);

    const neptuneMoon: Body = new Body("Triton", "grey", 2, 0.3, 17, Empty);
    NeptuneMoons.push(neptuneMoon);
}