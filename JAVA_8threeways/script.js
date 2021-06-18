//Function Declaration

function CalculateSquare1(number1, number2) {
    const multiply = ((number1 * number1) + (number2 * number2));
    console.log(multiply * multiply);
}
CalculateSquare1(2, 2);

//Function Expression

const CalculateSquare2 = function (_number1, _number2) {
    const multiply = ((_number1 * _number1) + (_number2 * _number2));
    console.log(multiply * multiply);
};
CalculateSquare2(2, 2);


//Arrow Function

const CalculateSquare3 = (_number1, _number2) => {
    const multiply = ((_number1 * _number1) + (_number2 * _number2));
    console.log(multiply * multiply);
};
CalculateSquare3(2, 2);

//?? met underscore voor je argumentnaam, kan je deze meerdere keren gebruiken?