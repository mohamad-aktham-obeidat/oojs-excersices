class SuperHero {

    /* constructor() {
        //Empty Constructor.
    } */

    constructor(name, suitColor, power1, power2, power3) {
        this.name = name;
        this.suitColor = suitColor;
        this.power1 = power1;
        this.power2 = power2;
        this.power3 = power3;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getSuitColor() {
        return this.suitColor;
    }

    setSuitColor(suitColor) {
        this.suitColor = suitColor;
    }

    getPower1() {
        return this.power1;
    }

    setPower1(power1) {
        this.power1 = power1;
    }

    getPower2() {
        return this.power2;
    }

    setPower2(power2) {
        this.power2 = power2;
    }

    getPower3() {
        return this.power3;
    }

    setPower3(power3) {
        this.power3 = power3;
    }

}

let hero1 = new SuperHero();
hero1.setName('Iron Man');
hero1.setSuitColor('Red & Gold');
hero1.setPower1('Flying');
hero1.setPower2('Fire Guns');
hero1.setPower3('Self Driving Suit')
console.log('HERO 1 INFO: ', hero1);

let hero2 = new SuperHero();
hero2.setName('Hulk');
hero2.setSuitColor('Green');
hero2.setPower1('Hight Distance Jumping');
hero2.setPower2('Smashing Things');
hero2.setPower3('Fast Running')
console.log('HERO 2 INFO: ', hero2);

console.log('__________________________________________________________________________________________________');