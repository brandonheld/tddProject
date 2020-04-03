class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hello, ${this.name}`
    }

    visit(otherPerson) {
        return `${this.name} visited ${otherPerson.name}`
    }

    switchVisit(otherPerson) {
        return `${otherPerson.name} visited ${this.name}`
    }

    update(personObj) {
        if (typeof personObj !== 'object') {
            throw new TypeError(
        }

        this.name = personObj.name;
        this.age = personObj.age;
        return true;
    }

    tryUpdate(personObj) {
        return this.update(personObj);

    }

    static greetAll(obj) {
        let arr = [];

        return obj.map(ele => ele.sayHello());
    }
}

module.exports = Person;
