"use strict";
const canvas = document.querySelector("canvas");
const crc2 = canvas.getContext("2d");
crc2.translate(canvas.width / 2, canvas.height / 2);
crc2.rotate(230 * Math.PI / 180);
crc2.ellipse(0, 0, 50, 50, 0, 0, 5);
crc2.fillStyle = "red";
crc2.fill();
//# sourceMappingURL=SolSys.js.map