function reverseNumber (a) {
    return a.toString().split("").reverse().join("")
}
console.log(reverseNumber(851));

function divPar2 (b) {
    switch (b % 2) {
        case 0:
            return console.log(`Le num ${b} est divisible par 2 ${number}:2 = ${number/2}`);
        default:
            return console.log("Ce nombre n'est pas divisible par 2");
    }
}
divPar2(7);


function logIn () {
    let mdp;
    while (mdp != "mdp") {
        mdp = "Ton mot de passe :"
    }
    alert("T'es bien co gg")
}
