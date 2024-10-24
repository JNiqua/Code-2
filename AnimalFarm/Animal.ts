class Animal {
    name: string;
    species: string;
    sound: string;
    food: string;
    consumeAmount: number;

    constructor(_name: string, _species: string, _sound: string, _food: string, _consumeAmount: number) {
        this.set(_name, _species, _sound, _food, _consumeAmount);
    }
    
    set(_name: string, _species: string, _sound: string, _food: string, _consumeAmount: number): void {
        this.name = _name;
        this.species = _species;
        this.sound = _sound;
        this.food = _food;
        this.consumeAmount = _consumeAmount;
    }

    sing(): void {
        
    }
}