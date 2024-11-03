namespace SolarSystem {
    export class Body {
        name: string;
        color: string;
        size: number;
        velocity: number;
        orbitRadius: number;
        children: Body[];

        constructor(_name: string, _color: string, _size: number, _velocity: number, _orbitRadius: number, _children: Body[]) {
            this.name = _name;
            this.color = _color;
            this.size = _size;
            this.velocity = _velocity;
            this.orbitRadius = _orbitRadius;
            this.children = _children;
        }
        
        
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
        absoluteRotation: number = 0;
        
        update(_timeslice: number): void {
            let relativeRotation: number = _timeslice*this.velocity;
            this.absoluteRotation = this.absoluteRotation + relativeRotation;
            // crc2.restore();
            crc2.rotate(this.absoluteRotation * Math.PI/180);
            // crc2.save();
            crc2.translate(this.orbitRadius, 0);
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.ellipse(0, 0, this.size, this.size, 0, 0, 5);
            crc2.closePath();
            crc2.fill();
            
            for(let child of this.children) {
                crc2.save();
                child.update(_timeslice);
                crc2.restore();
            }
        }
        
        showInfo() {

        }
    }
}