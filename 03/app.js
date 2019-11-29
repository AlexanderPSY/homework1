
let a = 5, b = 6, c = 3;
a !== b ? a !== c ? b !== c ? a < b ? a < c ? console.log("min a " + a) : console.log("min c " + c) : b < c ? console.log("min b " + b) : console.log("min c " + c) : console.log("b=c please change input data") : console.log("a=c please change input data") : console.log("a=b please change input data");
