const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

interface Cannon {
    x: number,
    y: number,
    angle: number,
    power: number,
    player: boolean
}

const cannonsArray: Cannon[] = [];

function createCannons(): void {
    let cannon1: Cannon = {
        x: 200,
        y: Math.random()*100,
        angle: 0,
        power: 0,
        player: true
    }
    cannonsArray.push(cannon1);

    let cannon2: Cannon = {
        x: 1200,
        y: Math.random()*100,
        angle: 0,
        power: 0,
        player: false
    }
    cannonsArray.push(cannon2);
}

function drawCannon(_cannon: Cannon):void {
    const path: Path2D = new Path2D();

    path.rect(_cannon.x, _cannon.y, 20, 40);
    ctx.fillStyle = "black";
    ctx.fill(path);
}

function drawCannons(): void {
    for(let i: number = 0; i<cannonsArray.length; i++) {
        const cannon = cannonsArray[i];
        drawCannon(cannon);
    }
}

interface Ball {
    x: number,
    y: number,
    flying: boolean
}

function drawMountain(): void {
    const mntnWidth: number = Math.random()*200+200;
    const mntnHeight: number = Math.random()*250+250;
    const mntnX: number = canvas.width/2;
    const mntnY: number = canvas.height;
    
    const path: Path2D = new Path2D();
    path.ellipse(mntnX, mntnY, mntnWidth, mntnHeight, 0, 0, 7);
    ctx.fillStyle = "black";
    ctx.fill(path);
}





/*
function drawLandscape() {

}
*/

function drawPlayground(): void {
    createCannons();
    drawCannons();
    drawMountain();
}

drawPlayground();