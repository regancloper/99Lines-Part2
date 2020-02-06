let friends = ["John", "Jack", "Irving", "Steve", "Bradford"];

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].toUpperCase() + ":");
    for (let j = 99; j > 0; j--) {
        let plural = "s";
        let linesleft = (j - 1) + " lines";
        if (j == 1) {
            plural = "";
            linesleft = "no more lines";
        } else if (j == 2) {
            linesleft = "1 more line";
        }
        console.log(j + " line" + plural + " of code in the file, " + j + " line" + plural + " of code; " + friends[i] + " strikes one out, clears it all out, " + linesleft + " of code in the file");
    }
}