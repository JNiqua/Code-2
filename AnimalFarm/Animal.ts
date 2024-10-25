namespace Farm {
    export class Animal {
        name: string;
        species: string;
        sound: string;
        food: Food;
        consumeAmount: number;
    
        constructor(_name: string, _species: string, _sound: string, _food: Food, _consumeAmount: number) {
            this.set(_name, _species, _sound, _food, _consumeAmount);
        }
    
        set(_name: string, _species: string, _sound: string, _food: Food, _consumeAmount: number): void {
            this.name = _name;
            this.species = _species;
            this.sound = _sound;
            this.food = _food;
            this.consumeAmount = _consumeAmount;
        }
    
        sing(): void {
            const name: HTMLSpanElement = document.getElementById("name")!;
            name.textContent = this.name;
    
            const song: HTMLSpanElement = document.getElementById("song")!;
            song.textContent = `On the farm lives a ${this.species} and it makes ${this.sound}.`;
        }
    
        eat(): void {
            const food: HTMLSpanElement = document.getElementById("food")!;
            const foodAmount: number = this.food.storageAmount - this.consumeAmount;
            // food.innerText = fouod.toString();
            food.textContent = `${this.food.type}: ${foodAmount}`;
        }
    }
}




