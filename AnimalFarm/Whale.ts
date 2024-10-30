namespace Farm {
    export class Whale extends Animal {
        sad: boolean

        constructor(_name: string, _species: string, _sound: string, _food: Food, _consumeAmount: number, _sad: boolean) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.sad = _sad;
        }

        doSpecialAction(): void {
            const specialAction: HTMLSpanElement = document.getElementById("specialAction")!;
            if(this.sad) {
                specialAction.textContent = `${this.name} got depressed.`;
            } else {
                specialAction.textContent = `${this.name} threw a party.`;
            }
        }
    }
}