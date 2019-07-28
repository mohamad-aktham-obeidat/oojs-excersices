class cat {

    constructor(tiredness, hunger, loneliness, happiness) {
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.loneliness = loneliness;
        this.happiness = happiness;
    }

    getTiredness() {
        return this.tiredness;
    }

    setTiredness(tiredness) {
        this.tiredness = tiredness;
    }

    getHunger() {
        return this.hunger;
    }

    setHunger(hunger) {
        this.hunger = hunger;
    }

    getLoneliness() {
        return this.loneliness;
    }

    setLoneliness(loneliness) {
        this.loneliness = loneliness;
    }

    getHappiness() {
        return this.happiness;
    }

    setHappiness(happiness) {
        this.happiness = happiness;
    }

    
}

let cat1 = new cat(50, 50, 50, 50);