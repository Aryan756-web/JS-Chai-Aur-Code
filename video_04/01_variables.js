const accountId = 144553
let accountEmail = "aryan2312@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //this way is not preferrable
let accountState;

// accountId = 2 not allowed

accountEmail = "yash@gmail.com"
accountPassword = "212121"
accountCity = "Benguluru"

console.log(accountId);

/*
Never use var Datatype 
because of block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

