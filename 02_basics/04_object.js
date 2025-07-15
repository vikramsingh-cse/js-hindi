// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    emial:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"vikram",
            lastname:"singh"

        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}

// const obj3 = { obj1, obj2}
//const obj3 = Object.assign({},obj1 , obj2, obj4);

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"vikram@google.com"
    },
    {
        id:12,
        email:"vikram@microsoft.com"
    }
]
users[1].emial
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "vikram"
}

//course.courseInstructor

const {courseInstructor:instructor} = course
// console.log( courseInstructor);
console.log(instructor);

// {
//     "name": "vikram",
//     "coursename": "js in hindi",
//     "price":"free"
// }


[
{},
{},
{}
]