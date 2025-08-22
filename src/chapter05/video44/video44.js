console.log("Video 44")

const sv1 = {
    username : "Thiện",
    score : 9
}
const sv2 = {
    username : "Tú",
    score : 8
}
const sv3 = {
    username : "Phúc",
    score : 7
}

const sinhvien = [sv1,sv2,sv3]

console.log(">>> Check sinh vien : ", sinhvien)

// sinhvien.forEach((item,index) => {
//     console.log(">>> index = ", index , " name = ", item.username)
// })

const person = {
    email: "12@gmail.com",
    age : 25,
    address : "VN"
}
// for (let key in person) { 
//  console.log(key, person[key]); 
// } 


// for (let value of Object.values(person)) { 
//  console.log(value); 
// } 

for (let [key,value] of Object.entries(person)) { 
 console.log(key,value); 
} 