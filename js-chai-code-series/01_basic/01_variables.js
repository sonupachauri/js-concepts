const accountID = 12345
let accoutnEmail = "sonu@gmail.com"
var accountPassword = "123456"
accountCity = "etah"
let accountState;

// accountID=45 not allowed

accoutnEmail = "hc@gmail.com"
accountPassword="567876"
accountCity="agra"

console.log(accountID);

/*
prefer no to use var because of issue in block and functional scope
*/
console.table([accountID,accoutnEmail,accountPassword,accountCity,accountState]);