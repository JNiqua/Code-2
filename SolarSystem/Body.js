"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Body {
        constructor(_name, _color, _size, _velocity, _orbitRadius, _children) {
            // move(_timeslice: number): void {
            //     crc2.save();
            //     crc2.rotate(_timeslice*this.velocity);
            //     crc2.translate(this.orbitRadius, 0);
            //     crc2.restore();
            //     for(let child of this.children) {
            //         child.move(_timeslice);
            //     }
            // }
            // draw(): void {
            //     crc2.fillStyle = this.color;
            //     crc2.ellipse(0, 0, this.size, this.size, 0, 0, Math.PI*2);
            //     crc2.fill();
            //     for(let child of this.children) {
            //         child.draw();
            //         // crc2.fillStyle = child.color;
            //     }
            // }
            this.absoluteRotation = 0;
            this.name = _name;
            this.color = _color;
            this.size = _size;
            this.velocity = _velocity;
            this.orbitRadius = _orbitRadius;
            this.children = _children;
        }
        update(_timeslice) {
            let relativeRotation = _timeslice * this.velocity;
            this.absoluteRotation = this.absoluteRotation + relativeRotation;
            // crc2.restore();
            SolarSystem.crc2.rotate(this.absoluteRotation * Math.PI / 180);
            // crc2.save();
            SolarSystem.crc2.translate(this.orbitRadius, 0);
            SolarSystem.crc2.fillStyle = this.color;
            SolarSystem.crc2.beginPath();
            SolarSystem.crc2.ellipse(0, 0, this.size, this.size, 0, 0, 5);
            SolarSystem.crc2.closePath();
            SolarSystem.crc2.fill();
            for (let child of this.children) {
                SolarSystem.crc2.save();
                child.update(_timeslice);
                SolarSystem.crc2.restore();
            }
        }
        showInfo() {
        }
    }
    SolarSystem.Body = Body;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Body.js.map