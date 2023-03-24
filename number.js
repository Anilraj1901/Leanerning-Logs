//Number Methods
console.log("Number Methods")
var x = 10.45
// toString()
let y =x.toString()
console.log(typeof y)
console.log("------------------------------")

// toExponential()
console.log(x.toExponential())
console.log(typeof x.toExponential())
console.log("------------------------------")

// toFixed()
console.log(x.toFixed(1))
console.log(typeof x.toFixed(1))
console.log("------------------------------")

// toPrecision()
console.log(x.toPrecision(6))
console.log(typeof x.toPrecision(6))
console.log("------------------------------")

// isFinite()
console.log(isFinite(1 / 0))
console.log(isFinite(10 / 5))
console.log("------------------------------")

// isInteger()
console.log(Number.isInteger(10 / 5))
console.log(Number.isInteger(10 / 11))
console.log("------------------------------")

//isNaN()
console.log(isNaN(100));
console.log(isNaN("anil"));
console.log("------------------------------")

// parseFloat()
let a=10
let b=5
console.log(parseFloat(b/a))
console.log("------------------------------")

// parseInt()
console.log(parseInt(b/a))
console.log(parseInt(a/b))
console.log("------------------------------")

// parseFloat().toExponential()
let c =a/b
console.log(parseFloat(c).toExponential())
console.log(typeof parseFloat(c).toExponential())
console.log("------------------------------")

// valueOf()
console.log(a.valueOf())
console.log("------------------------------")
console.log("         ")


// bigInt
// valueOf()
let y1 = 5n
console.log(y1.valueOf())

// toString()
console.log(y1.toString())
