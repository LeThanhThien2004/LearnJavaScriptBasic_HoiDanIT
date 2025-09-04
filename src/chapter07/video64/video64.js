console.log("Video 64")


const doSomething = () => {

const a = 10, b=1


if (b === 0) {
    throw new Error("Thực hiện chia cho 0")
}

        return a/b  
}
try{
    doSomething()
} catch (error){
    console.log("Lỗi", error)
} finally {
    console.log("run finally")
}
