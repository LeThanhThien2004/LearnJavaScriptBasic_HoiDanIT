console.log("Video 52 ")

const myBtn = document.getElementById("myBtn")
const backBtn = document.getElementById("backBtn")

const myText = document.getElementById("myText")


myBtn.addEventListener("click" , () => {
    console.log("you click my button")
    // myText.innerText = "lÈEEEEEEEEE"
    myText.innerHTML="<strong>Chào bạn,</strong> <em>học lập trình với hoidanit!</em>"

})

backBtn.addEventListener("click" , () => {
    console.log("you click BACK button")
    myText.innerText = "Video 52"
    
})