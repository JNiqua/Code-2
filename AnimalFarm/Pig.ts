namespace Farm {
    export class Pig extends Animal {
        crazy: boolean;

        constructor(_name: string, _species: string, _sound: string, _food: Food, _consumeAmount: number, _crazy: boolean) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.crazy = _crazy;
        }

        public doSpecialAction() {
            let specialAction: HTMLSpanElement = document.getElementById("specialAction")!;
            if(this.crazy) {
                specialAction.textContent = `${this.name} tried to revive its food.`;
            } else {
                specialAction.textContent = `${this.name} enjoyed its meal.`;
            }
        }
    }
}