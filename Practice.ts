console.log("hello world")

let arr: number[] = [1, 2, 3, 4, 5]

arr.push(8)
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(0)
console.log(arr)
arr.shift()
console.log(arr)
arr.splice(2,1)
console.log(arr)

// Set
let mySet = new Set<string>()
mySet.add("Shyam")
mySet.add("Kumar")
mySet.add("Shyam")
console.log(mySet)
