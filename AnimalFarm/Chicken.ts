namespace Farm {
    export class Chicken extends Animal {
        constructor(_name: string, _species: string, _sound: string, _food: Food, _consumeAmount: number) {
            super(_name, _species, _sound, _food, _consumeAmount);
        }

        doSpecialAction(): void {
            let specialAction: HTMLSpanElement = document.getElementById("specialAction")!;
            specialAction.textContent = "täst";
        }
    }
}