const accountId = 30
let accountEmail = "ayushi@google.com"
var accountPassword = "12345"
accountCity = "Gwalior"
let accountState;

//accountId = 2 //not allowed

accountEmail = "ac@ac.com"
accountPassword = "2121"
accountCity = "bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])