namespace SolarSystem {
    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
    
    let Planets: Body[] = [];

    let jupiterMoons: Body[] = [];
    let jupiter: Body = new Body("Jupiter", "red", 30, 5, 100, jupiterMoons)
    
    
    
    function update() {

    }

}
