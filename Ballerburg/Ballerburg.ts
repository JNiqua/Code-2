const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

const p1AngleSlider: HTMLInputElement = document.getElementById("p1Angle") as HTMLInputElement;
let p1Angle: number = Number(p1AngleSlider.value);
const p1PowderSlider: HTMLInputElement = document.querySelector(".POWAH")!;
let p1Powder: number = Number(p1PowderSlider.value);
const p2AngleSlider: HTMLInputElement = <HTMLInputElement>document.getElementById("p2Angle")!;
let p2Angle: number = Number(p2AngleSlider.value);
const p2PowderSlider: HTMLInputElement = document.getElementById("p2Powder")!;
let p2Powder: number = Number(p2PowderSlider.value);

p1AngleSlider.oninput = function(): void {
    p1Angle = Number(p1AngleSlider.value);
    console.log(p1Angle);
}

p1PowderSlider.oninput = function(): void {
    p1Powder = Number(p1PowderSlider.value);
    console.log(p1Powder);
}

p2AngleSlider.oninput = function(): void {
    p2Angle = Number(p2AngleSlider.value);
    console.log(p2Angle);
}

p2PowderSlider.oninput = function(): void {
    p2Powder = Number(p2PowderSlider.value);
    console.log(p2Powder);
}

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
    drawMountain();
    const imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function gameLoop(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData)!!!!!
    drawCannons();


    requestAnimationFrame(gameLoop);
}

drawPlayground();
requestAnimationFrame(gameLoop);