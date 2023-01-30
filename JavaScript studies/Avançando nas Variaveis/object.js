const profile = {
    firstName: "Bilbo",
    lastName: "Bolseiro",
    height: 1.30,
    age: 33,
    city: "Bolsão",
    numberTelephone: 01051981997982
};

console.log(`${JSON.stringify(profile)}`);
console.table(profile);

/*
 Podemos manipular um object
 trocando um valor
*/

// O valor do primeiro nomo será reedefinido
profile.firstName = "Legolas";
console.log(profile.firstName = "Legolas")
