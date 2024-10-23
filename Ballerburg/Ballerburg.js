"use strict";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const p1AngleSlider = document.getElementById("p1Angle");
let p1Angle = Number(p1AngleSlider.value);
const p1PowderSlider = document.querySelector(".POWAH");
let p1Powder = Number(p1PowderSlider.value);
const p2AngleSlider = document.getElementById("p2Angle");
let p2Angle = Number(p2AngleSlider.value);
const p2PowderSlider = document.getElementById("p2Powder");
let p2Powder = Number(p2PowderSlider.value);
p1AngleSlider.oninput = function () {
    p1Angle = Number(p1AngleSlider.value);
    console.log(p1Angle);
};
p1PowderSlider.oninput = function () {
    p1Powder = Number(p1PowderSlider.value);
    console.log(p1Powder);
};
p2AngleSlider.oninput = function () {
    p2Angle = Number(p2AngleSlider.value);
    console.log(p2Angle);
};
p2PowderSlider.oninput = function () {
    p2Powder = Number(p2PowderSlider.value);
    console.log(p2Powder);
};
const cannonsArray = [];
function createCannons() {
    let cannon1 = {
        x: 200,
        y: Math.random() * 100,
        angle: 0,
        power: 0,
        player: true
    };
    cannonsArray.push(cannon1);
    let cannon2 = {
        x: 1200,
        y: Math.random() * 100,
        angle: 0,
        power: 0,
        player: false
    };
    cannonsArray.push(cannon2);
}
function drawCannon(_cannon) {
    const path = new Path2D();
    path.rect(_cannon.x, _cannon.y, 20, 40);
    ctx.fillStyle = "black";
    ctx.fill(path);
}
function drawCannons() {
    for (let i = 0; i < cannonsArray.length; i++) {
        const cannon = cannonsArray[i];
        drawCannon(cannon);
    }
}
function drawMountain() {
    const mntnWidth = Math.random() * 200 + 200;
    const mntnHeight = Math.random() * 250 + 250;
    const mntnX = canvas.width / 2;
    const mntnY = canvas.height;
    const path = new Path2D();
    path.ellipse(mntnX, mntnY, mntnWidth, mntnHeight, 0, 0, 7);
    ctx.fillStyle = "black";
    ctx.fill(path);
}
/*
function drawLandscape() {

}
*/
function drawPlayground() {
    createCannons();
    drawMountain();
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
}
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData);
    drawCannons();
    requestAnimationFrame(gameLoop);
}
drawPlayground();
requestAnimationFrame(gameLoop);
//# sourceMappingURL=Ballerburg.js.map