const url = require("url");

const myurl = new URL("http://mywebsite.com/hello.html?100&status=active");

//serialize URl
console.log(myurl.href);
console.log(myurl.toString());
//host root domain
console.log(myurl.host);
//hostname
console.log(myurl.hostname);
//pathname
console.log(myurl.pathname);
//serialized query
console.log(myurl.search);
//params object
console.log(myurl.searchParams);
//add params
myurl.searchParams.append("abc", "123");
console.log(myurl.searchParams);
//loop theough params
myurl.searchParams.forEach((value, name) => console.log(`$(name): $(value)`));
