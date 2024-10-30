namespace Farm {
    export class Sheep extends Animal {
        angry: boolean;

        constructor(_name: string, _species: string, _sound: string, _food: Food, _consumeAmount: number, _angry: boolean) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.angry = _angry;
        }

        doSpecialAction(): void {
            const specialAction: HTMLSpanElement = document.getElementById("specialAction")!;
            if(this.angry) {
                specialAction.textContent = `${this.name} tore down the stable.`;
            } else {
                specialAction.textContent = `${this.name} had a spa day.`;
            }
        }
    }
}