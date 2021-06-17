// ** Return statements with log inside function

const CalculateNumber = function (numbers) {
    if (numbers > 100) {
        return console.log(numbers + " is bigger than 100");
    }
    return console.log(numbers + " is smaller than 100");
};

CalculateNumber(150);
CalculateNumber(90);

//  **with log outside function

const CalculateNumber1 = function (numbers) {
    if (numbers > 100) {
        return numbers + " is bigger than 100";
    }
    return numbers + " is lower than 100";
};

const result = CalculateNumber1(65);
console.log(result);

//  **Brenda

const brenda = function (age, amount) {
    if (age < 21) {
        return "This is a club for Adults only";
    }
    else if (amount > 250) {
        return "it's too busy now, please come back later";
    }
    return "Come in!";
};
//Come In
const result1 = brenda(21, 150);
console.log(result1);

//too busy
const result2 = brenda(21, 350);
console.log(result2);

//too young
const result3 = brenda(20, 150);
console.log(result3);


// ** Average calculation (deze vond ik wel even pittig)

const AverageAge = function (hans, piet, kees, peter, nico) {
    const sum = hans + piet + kees + peter + nico;
    const total = AverageAge.length;
    const average = sum / total;
    const roundedAverage = Math.round(average);
    return roundedAverage;
};

const result4 = AverageAge(20, 19, 25, 21, 30);
console.log(result4);  //afgerond resultaat is 23

const result5 = AverageAge(20, 19, 25, 18, 30);
console.log(result5);  //afgerond resultaat is 22

const result6 = AverageAge(7, 34, 88, 45, 11);
console.log(result6);  //resultaat is precies 37

//results doorgeteld, om alle logs tegelijkertijd te callen