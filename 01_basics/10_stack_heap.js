//stack (primitve), Heap(Non-primitve)
let myYoutubename = "vikramsingh"

let anothername = myYoutubename
anothername = "rajawatvikram"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "vikram@google.com"
console.log(userOne.email);
console.log(userTwo.email);