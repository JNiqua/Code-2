namespace Farm {
    export class Cow extends Animal {
        cool: boolean

        constructor(_name: string, _species: string, _sound: string, _food: Food, _consumeAmount: number, _cool: boolean) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.cool = _cool;
        }

        public doSpecialAction() {
            let specialAction: HTMLSpanElement = document.getElementById("specialAction")!;
            if(this.cool) {
                specialAction.textContent = `${this.name} puts on shades.`;
            } else {
                specialAction.textContent = `${this.name} runs in a circle.`;
            }
        }
    }
}