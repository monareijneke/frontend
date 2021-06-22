//alleen tafel van 9
for (i = 1; i <= 10; i++) {
    let x = i * 9;
    console.log(i + " x 9 = " + x);
}

//Nested loop alle tafels t/m 10  BONUS
for (i = 1; i <= 10; i++) {

    for (y = 1; y <= 10; y++) {
        let x = i * y;
        console.log(i + " x " + y + " = " + x);
    }
}

