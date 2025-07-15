// singleton
//object.create


//object literals

const mySym = Symbol("key1")
const JsUser = {
    [mySym]: "mykey1",
    "full name": "vikram singh",
    name: "vikram",
    age: 19,
    location: "jaipur",
    email: "vikram@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "vikram@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "vikram@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");

}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());