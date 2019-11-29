
let age = parseInt(prompt("please input age"))
isNaN(age) ? console.log("Please use number for define age") : (age > +20 && age <= 27) ? console.warn("Выслать повестку") : console.log("lucky asshole")
