export class GemBox{
    public gemNumber: number

    constructor(gemNumber: number) {
        this.gemNumber = gemNumber
    }

    addGem(number: number) {
        this.gemNumber += number
    }

    remove(number: number) {
        this.gemNumber -= number
    }

    getReport() {
        return this.gemNumber.toString();
    }
    
}