
//While loop

const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
let tekst = " ";
while (colors[i]) {
    tekst = colors[i];
    i++;
    console.log(tekst);
}


//For loop

const colors1 = ["yellow", "blue", "red", "orange"];

for (let i = 0; i < colors1.length; i++) {
    console.log(colors1[i])
}



// ForEach

const colors2 = ["yellow", "blue", "red", "orange"];
colors2.forEach(element => console.log(element));

// 1. While Loop heeft 8 regels nodig, For loop heeft 4 regels nodig.
// 2. for Each heeft 2 regels nodig.
// 3. forEach is overzichtelijker en daarom deze is makkelijker leesbaar.
// 4. je kan geen Array methode gebruiken op een object.

// 5. Loop van een object:

const person = {        //define object
    firstname: 'John',
    lastname: 'Smits',
    gender: 'male',
    age: 19,
    country: 'Holland',
    Occupation: 'Student'
}

// wijzig het object in een array ==> 3 manieren om een array te maken van het object:
const keys = Object.keys(person); // array van de key words
console.log(keys);                //log array [ 'firstname', 'lastname', 'gender', 'age', 'country', 'Occupation' ]

const values = Object.values(person); //array van de waardes
console.log(values);                  //log array [ 'John', 'Smits', 'male', 19, 'Holland', 'Student' ]

const entries = Object.entries(person); //array van keywords met de waardes
console.log(entries);

//maak een loop:
const entries1 = Object.entries(person);
for (const list of entries1) {
    console.log(list);
};


