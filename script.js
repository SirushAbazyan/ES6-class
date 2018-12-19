class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let david = new Person("David", 24);
let ann = new Person("Ann", 45);
let jack = new Person("Jack", 20);
let mary = new Person("Mary", 27);
let arr = [david, ann, jack, mary];

for(let i = 0; i < arr.length; i++) {
  setInterval(function() {
    arr[i].age++;
  }, 1000);
}

function checkAge() {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].age >= 40) {
            arr = arr.slice(0, i).concat(arr.slice(i + 1));
        }
    }
}
setInterval(checkAge, 1000);

function createPerson() {
    let newPerson = new Person();
    newPerson.age = Math.floor((Math.random() * 50) + 1);
    let names = ["Olivia", "Oliver", "Amelia", "Harry", "Isla", "Jack", "Emily", "George", "Ava", "Noah", "Lily", "Charlie", "Mia", "Jacob", "Sophia", "Alfie", "Isabella", "Freddie", "Grace", "Oscar"];
    newPerson.name = names[ Math.floor(Math.random() * names.length) ];
    arr.push(newPerson);
    //console.log(arr);
}
setInterval(createPerson, 2000);