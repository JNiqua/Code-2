namespace SolarSystem {
    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
    
    
    crc2.translate(canvas.width/2, canvas.height/2);

    let Planets: Body[] = [];

    let MercuryMoons: Body[] = [];
    let VenusMoons: Body[] = [];
    let EarthMoons: Body[] = [];
    let MarsMoons: Body[] = [];
    let JupiterMoons: Body[] = [];
    let SaturnMoons: Body[] = [];
    let UranusMoons: Body[] = [];
    let NeptuneMoons: Body[] = [];

    let Empty: Body[] = [];

    let sun: Body = new Body("Sun", "yellow", 70, 0, 0, Planets);

    let mercury: Body = new Body("Jupiter", "red", 30, 1, 150, MercuryMoons);
    Planets.push(mercury);
    let venus: Body = new Body("Jupiter", "red", 30, 1.5, 220, VenusMoons);
    Planets.push(venus);
    // let earth: Body = new Body("Jupiter", "red", 30, 5, 150, EarthMoons);
    // Planets.push(earth);
    // let mars: Body = new Body("Jupiter", "red", 30, 5, 150, MarsMoons);
    // Planets.push(mars);
    // let jupiter: Body = new Body("Jupiter", "red", 30, 5, 150, JupiterMoons);
    // Planets.push(jupiter);
    // let saturn: Body = new Body("Jupiter", "red", 30, 5, 150, SaturnMoons);
    // Planets.push(saturn);
    // let uranus: Body = new Body("Jupiter", "red", 30, 5, 150, UranusMoons);
    // Planets.push(uranus);
    // let neptune: Body = new Body("Jupiter", "red", 30, 5, 150, NeptuneMoons);
    // Planets.push(neptune);

    let mercMoon1: Body = new Body("Günni", "blue", 10, 5, 60, Empty);
    MercuryMoons.push(mercMoon1);
    let venMoon1: Body = new Body("Günni", "blue", 10, 5, 60, Empty);
    VenusMoons.push(venMoon1);
    
    requestAnimationFrame(update);
    
    function update() {
        crc2.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
        crc2.fillStyle = "black";
        crc2.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
        // crc2.save();
        sun.update(1);
        // crc2.restore();
        // jupiter.update(1);

        requestAnimationFrame(update);
    }

}
