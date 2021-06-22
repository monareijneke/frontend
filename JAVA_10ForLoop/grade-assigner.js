function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 84) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else if (score > 59) {
        return 'E';
    } else {
        return 'F';
    }
}
for (score = 60; score <= 100; score++) {
    const grade = assignGrade(score);
    console.log("Voor " + score + " punten, krijg je een " + grade);
}

console.log(assignGrade(91)); //dit returned alleen een A. 
                            // het is mij niet gelukt om de zin met de score te returnen
                            //zonder dat je de hele zin uitschrijft in de code.......
