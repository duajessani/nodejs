class Animal{
    #name; //private 
    #color;
    #food;
    constructor(name,color,food){
        this.#name = name;
        this.#color = color;
        this.#food = food;
        
    }

    getName(){
        return this.#name
    }

    getColor(){
        return this.#color
    }

    getFood(){
        return this.#food
    }

    canRun(){
        return `It's a ${this.#name}. It's color is ${this.#color}. It can run fast.`;
    }
    speed(){
        return this.canRun()
    }
}

class Herbivores extends Animal {

    constructor(name, color) {
        super(name, color, "plants"); 
      }

    canEat(){
        return `
        ${this.getName()} is a herbivourous animal. It can eat ${this.getFood()}
        `
    }
}

class Omnivores extends Animal {

    constructor(name, color) {
        super(name, color, "plants and meat"); 
      }

    canEat(){
        return `
        ${this.getName()} is a Omnivores animal. It can eat ${this.getFood()}
        `
    }
}

const goat = new Herbivores('goat','white');
console.log(goat.speed())
console.log(goat.canEat());

const bear = new Omnivores('bear','brown');
console.log(bear.speed())
console.log(bear.canEat());