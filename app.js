let friends = ["John", "Jack", "Irving", "Steve", "Bradford"];

let button = document.querySelector('button');
button.addEventListener("click", singSong);

function singSong() {
    for (let i = 0; i < friends.length; i++) {
        let div = document.createElement('div');
        div.className = "friend";
        let name = document.createElement('h3');
        name.textContent = friends[i];
        div.appendChild(name);
        listLyrics(friends[i], div);
        document.body.appendChild(div);
    }
}


function listLyrics(friend, div) {
    for (let j = 99; j > 0; j--) {
        let p = document.createElement('p');
        let plural = "s";
        let linesleft = (j - 1) + " lines";
        if (j == 1) {
            plural = "";
            linesleft = "no more lines";
        } else if (j == 2) {
            linesleft = "1 more line";
        }
        let text = j + " line" + plural + " of code in the file, " + j + " line" + plural + " of code; " + friend + " strikes one out, clears it all out, " + linesleft + " of code in the file";
        p.textContent = text;
        div.appendChild(p);
    }
}