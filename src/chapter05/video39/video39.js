console.log("Video 39")

const myClass = ["Thiện","Tú","Phúc","Sơn","Luân"]

console.log(myClass, myClass.length)

for(let i = 0; i < myClass.length; i++){
    console.log("i = ",i," and value = ",myClass[i])
}

//for-each

myClass.forEach(function(value,index){
    console.log("value = ", value, " index = ",index)
})
console.log("========================")
myClass.forEach((value,index) => {
        console.log("value = ", value, " index = ",index)
})