console.log("Video 43")

const person =  {
    name1 : "Thiện",
    age : 21
}

console.log("person before : ",person)

//get data
console.log("age : ", person.age)
console.log("age : ", person["name1"])

//set data
person.address = "TPHCM"
person["language"] = "vietnamese"

delete person.address

console.log("person after : ",person)
