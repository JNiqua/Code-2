namespace Farm {
    export class Chicken extends Animal {
        tired: boolean;

        constructor(_name: string, _species: string, _sound: string, _food: Food, _consumeAmount: number, _tired: boolean) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.tired = _tired;
        }

        public doSpecialAction(): void {
            let specialAction: HTMLSpanElement = document.getElementById("specialAction")!;
            if(this.tired) {
                specialAction.textContent = `${this.name} slept all day.`;
            } else {
                specialAction.textContent = `${this.name} tried to fly away.`;
            }
        }
    }
}