function Animal(specie, size) {
    this.specie = specie;
    this.size = size;
}

Animal.prototype.move = function () {

    console.log('To zwierzę się porusza');

}

function Human(race, sex) {
    this.race = race;
    this.sex = sex;
}

Human.prototype.work = function () {

    console.log('Ten człowiek pracuje');

}

Human.prototype = Object.create(Animal);

function Student(age, height) {
    this.age = age;
    this.height = height;
}

Student.prototype.learn = function () {
    console.log('Ten student się uczy');
}

Student.prototype = Object.create(Human);

Student.work();