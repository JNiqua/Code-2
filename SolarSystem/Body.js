"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Body {
        constructor(_name, _color, _size, _velocity, _orbitRadius, _children) {
            this.name = _name;
            this.color = _color;
            this.size = _size;
            this.velocity = _velocity;
            this.orbitRadius = _orbitRadius;
            this.children = _children;
        }
        move(_timeslice) {
            SolarSystem.crc2.rotate(_timeslice * this.velocity);
            SolarSystem.crc2.translate(this.orbitRadius, 0);
            for (let child of this.children) {
                child.move(_timeslice);
            }
        }
        draw() {
            SolarSystem.crc2.ellipse(0, 0, this.size, this.size, 0, 0, Math.PI * 2);
            SolarSystem.crc2.fillStyle = this.color;
            SolarSystem.crc2.fill();
            for (let child of this.children) {
                child.draw();
            }
        }
        showInfo() {
        }
    }
    SolarSystem.Body = Body;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Body.js.map