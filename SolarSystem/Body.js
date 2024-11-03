"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Body {
        constructor(_name, _color, _size, _velocity, _orbitRadius, _children) {
            this.path = new Path2D;
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
            SolarSystem.crc2.rotate(this.absoluteRotation * Math.PI / 180);
            SolarSystem.crc2.translate(this.orbitRadius, 0);
            SolarSystem.crc2.fillStyle = this.color;
            // crc2.beginPath();
            this.path.ellipse(0, 0, this.size, this.size, 0, 0, Math.PI * 2);
            // crc2.closePath();
            SolarSystem.crc2.fill(this.path);
            for (let child of this.children) {
                SolarSystem.crc2.save();
                child.update(_timeslice);
                SolarSystem.crc2.restore();
            }
            // console.log(this.absoluteRotation);
        }
        showInfo(_mouseX, _mouseY) {
            const bodyName = document.getElementById("bodyName");
            if (SolarSystem.crc2.isPointInPath(this.path, _mouseX, _mouseY)) {
                bodyName.textContent = this.name;
            }
            for (let child of this.children) {
                if (SolarSystem.crc2.isPointInPath(child.path, _mouseX, _mouseY)) {
                    bodyName.textContent = child.name;
                }
            }
        }
    }
    SolarSystem.Body = Body;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Body.js.map