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

        move(_timeslice: number): void {
            crc2.rotate(_timeslice*this.velocity);
            crc2.translate(this.orbitRadius, 0);

            for(let child of this.children) {
                child.move(_timeslice);
            }
        }

        draw(): void {
            crc2.ellipse(0, 0, this.size, this.size, 0, 0, Math.PI*2);
            crc2.fillStyle = this.color;
            crc2.fill();

            for(let child of this.children) {
                child.draw();
            }
        }

        showInfo() {

        }
    }
}