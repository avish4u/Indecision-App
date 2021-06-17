class Person{

     constructor(name = 'Anonymus', age= 0){
         

         this.name = name;
         this.age = age;
     }
     getGreeting(){
        //  return 'Hi i am ' + this.name;
        return `Hi i am ${this.name}`;
     }
     getDescription(){
         return `${this.name} is ${this.age} years old.`
     }
}
class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major
    }
    // hasMajor(){
    //     return !!this.major;
    // }
    getDescription(){
        // return 'testing'
        let description = super.getDescription();
        if(this.major){
            description += ` Their major is ${this.major}.`
        }
        return description;
    }


}
class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    // hasLocation(){
    //     return !!this.homeLocation;
    // }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I am visiting from ${this.homeLocation}`;

        }
        return greeting;

    }
}




const me = new Student('Avish jain',18, 'jaipur');
const other = new Student();
// console.log(other.getGreeting());
// console.log(me.getGreeting());
console.log(me.getDescription());
console.log(other.getDescription());