"use strict";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
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
    drawCannons();
    drawMountain();
}
drawPlayground();
