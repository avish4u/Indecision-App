//argument object is no longer bound

const add = (a,b) => {
    // console.log(arguments); arguments not defined in es6 arrow function
    return a+b;
}
console.log(add(55,1,1001));




//This keyword is no longer bound!

const user = {
    name: 'Avish',
    cities: ['Tonk', 'jaipur', 'Kota'],
    printPlacesLived() {

       return this.cities.map((city) => 
        this.name + ' has lived in '+ city);
   }
};
    //     console.log(this.name);
    //    console.log(this.cities);
    // const that = this;

    //    this.cities.forEach((city) => {
    //        console.log(this.name + ' has lived in '+ city);

//     //    });
//     // }
// };
console.log(user.printPlacesLived());
const multiplier ={

    numbers: [1,6,7],
    multiplyBy: 2,
    multiply() {

        return this.numbers.map((num) => num*(this.multiplyBy)
        );

    }

};
console.log(multiplier.multiply());