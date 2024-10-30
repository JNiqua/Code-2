# Classes

### Beispiel für eine Klasse
```
class Vector {
    x: number;
    y: number;

    constructor(_x: number, _y: number) {
        this.set(_x, _y);
    }

    scale(_factor: number): void {
        this.x *= _factor;
        this.y *= _factor;
    }

    add(_addend: Vector): void {
        this.x += _addend.x;
        this.y += _addend.y;
    }
}

let vector: Vector = new Vector(5, 7);
```

* Eine Instanz einer Klasse heißt Objekt.
* Funktionen innerhalb von Klassen heißen Methoden.
* Der ```constructor {}``` ist eine besondere Methode, die automatisch aufgerufen wird, wenn mit ```new``` ein neues Objekt erstellt wird und sorgt dafür, dass das Objekt ordentlich gebaut wird.
* Jede Klasse und Subklasse wird in einem eigenen Dokument erstellt, welches den Namen der Klasse trägt. Damit der Compiler alle Dokumente finden kann, müssen sie alle den gleichen ```namespace {}``` haben.

### Beispiel für eine Klasse und deren Subklasse
```
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

        doSpecialAction(): void {
            // const specialAction: HTMLSpanElement = document.getElementById("specialAction")!;
            // specialAction.textContent = "wörk?";
        }
    }
}
```
```
namespace Farm {
    export class Cow extends Animal {
        cool: boolean

        constructor(_name: string, _species: string, _sound: string, _food: Food, _consumeAmount: number, _cool: boolean) {
            super(_name, _species, _sound, _food, _consumeAmount);
            this.cool = _cool;
        }

        doSpecialAction(): void {
            let specialAction: HTMLSpanElement = document.getElementById("specialAction")!;
            if(this.cool) {
                specialAction.textContent = `${this.name} put on shades.`;
            } else {
                specialAction.textContent = `${this.name} ran in a circle.`;
            }
        }
    }
}
```
```extends``` erweitert eine Superklasse um eine Subklasse.
```super(...)``` ruft aus der Subklasse den Constructor der Superklasse auf.
```super.methode(...)``` ruft aus der Subklasse die ```methode``` der Superklasse auf.