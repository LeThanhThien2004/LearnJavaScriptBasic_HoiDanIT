console.log("Video 38")

const names = ["Thiện","Kindness","Ti"]


console.log(names[0])
console.log(names[2])
names[2] = "update name"

console.log("before",names)

names.push(true,123)
names.unshift(null)

names.pop()
names.shift()
console.log("after",names)