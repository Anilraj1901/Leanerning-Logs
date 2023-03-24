// String Length
var text = "Hello World...";
console.log(text.length)
console.log("------------------------------")

// slice(start, end)
console.log(text.slice(6, 13))
console.log(text.slice(-14))
console.log("------------------------------")

// substring(start, end)
console.log(text.substring(6, 13))
console.log(text.substring(-14))
console.log("------------------------------")

// substr(start, length)
console.log(text.substr(7, 6))
console.log(text.substr(-8))
console.log("------------------------------")

// replace()
let str = "Hello world...HELLO WORLD..."
console.log(str.replace("HELLO", "hai"))
console.log("------------------------------")

// ReplaceAll()
let txt1 = "I love cats. Cats are very easy to love. cats are very popular."
console.log(txt1.replaceAll("cats","dogs"))
console.log("------------------------------")

// toUpperCase()
console.log(str.toLowerCase())
console.log("------------------------------")

// toUpperCase()
console.log(str.toUpperCase())
console.log("------------------------------")

// concat()
console.log(text.concat(" ", str))
console.log("------------------------------")

// trim()
txt ="        Hello World!!!!!!!!!          "
console.log(txt.trim())
console.log(txt.trimStart())
console.log(txt.trimEnd())
console.log("------------------------------")

// charAt(position)
console.log(text.charAt(0))
console.log("------------------------------")

// charCodeAt()
console.log(text.charCodeAt(0))
console.log("------------------------------")

// Property Access
console.log(text[0])
console.log("------------------------------")

// split()
console.log(text.split(""))
console.log(text.split(" "))
console.log(text.split(","))
console.log("------------------------------")

// indexOf()
console.log(text.indexOf("Hello"))
console.log("------------------------------")

// lastIndexOf()
console.log(txt1.lastIndexOf("cats"))
console.log("------------------------------")

// search()
console.log(txt1.search("cats"))
console.log("------------------------------")

// match()
console.log(txt1.match(/cats/))
console.log(txt1.match(/cats/g))
console.log(txt1.match(/cats/gi))
console.log("------------------------------")

// Boolean
// includes()
console.log(text.includes("World",1))
console.log(text.includes("World"))
console.log("------------------------------")

// startsWith()
console.log(text.startsWith("Hello"))
console.log(text.startsWith("Hello",0))
console.log("------------------------------")

// endsWith()
console.log(text.endsWith("Hello"))
console.log(text.endsWith("."))
console.log("------------------------------")









