const Person = require('../problems/personClass.js');
const chai = require('chai');
const expect = chai.expect

describe('Person', () => {
    let name = 'James'
    let age = 26
    let person;
    let otherPerson;
    let otherName = 'Brandon'
    let otherAge = 28

    beforeEach(() => {
        person = new Person(name, age);
        otherPerson = new Person(otherName, otherAge)
    })

    describe('Person constructor Function', () => {
        it('should have a "name" and "age" properties', () => {
            expect(person).to.have.a.property('name');
            expect(person).to.have.a.property('age');
        });
    });

    describe('prototype.sayHello()', () => {
        it('should say Hello and a name', () => {
            expect(person.sayHello()).to.equal(`Hello, ${name}`)
        });
    });

    describe('prototype.visit(otherPerson)()', () => {
        it('should say Hello and a name', () => {
            expect(person.visit(otherPerson)).to.equal(`${name} visited ${otherName}`)
        });
    });

    describe('prototype.switchVisit(otherPerson)()', () => {
        it('should say Hello and a name', () => {
            expect(person.switchVisit(otherPerson)).to.equal(`${otherName} visited ${name}`)
        });
    });

    describe('prototype.update(obj)', () => {
        context('If object is valid', () => {
            it("should update the instance variables", () => {
                person3 = new Person('Ted', 64);
                person.update(person3);
                expect(person.name).to.equal(person3.name);
                expect(person.age).to.equal(person3.age);
            });
        });
        context('If object is not valid', () => {
            it('should throw a TypeError with a message', () => {
                let notAnObj = `I'm not an object`;
                expect(() => person.object(notAnObj)).to.throw(TypeError());
            });
        });
    });

    describe('prototype.tryUpdate(obj)', () => {
        context('If updated was successful', () => {
            it("should return true", () => {
                person3 = new Person('Ted', 64);
                expect(person.tryUpdate(person3)).to.be(true);
            });
        });
        context('If update was not successful', () => {
            it('should return false', () => {
                let notAnObj = `I'm not an object`;
                expect(person.tryUpdate(notAnObj)).to.be(false);
            });
        });
    });

    describe('greetAll(obj)', () => {
        it('should take in an array of Person instances', () => {
            expect(() => Person.greetAll(`I'm not an array`)).to.Throw(TypeError);
        });
        it('Should return an array of string greetings for each instance passed in', () => {
            let personArr = [person, otherPerson]
            expect(Person.greetAll(personArr)).to.deep.equal([person.sayHello(), otherPerson.sayHello()])
        })
    })

});
