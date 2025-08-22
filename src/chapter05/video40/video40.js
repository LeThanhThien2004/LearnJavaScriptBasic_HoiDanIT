console.log("Video 40")

const score = [10,8,5,7,9];

// read data
// score.forEach((value,index) => {
//     console.log("index = ",index, " value = ", value)
// })


// modify data
const scorex2 = score.map((value,index) => {  
    return value * 2;
})

const otherScorex2 = score.map((value,index) => value * 2)
console.log(score)
console.log(scorex2)
console.log(otherScorex2)