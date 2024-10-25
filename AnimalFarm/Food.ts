namespace Farm {
    export class Food {
        type: string;
        storageAmount: number;
    
        constructor(_type: string, _storageAmount: number) {
            this.set(_type, _storageAmount);
        }
    
        set(_type: string, _storageAmount: number): void {
            this.type = _type;
            this.storageAmount = _storageAmount;
        }
    }
}