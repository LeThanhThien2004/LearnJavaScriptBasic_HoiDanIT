console.log("Video 53")

const myBtn = document.getElementById("myBtn")

const myText = document.getElementById("myText")

const backBtn = document.getElementById("backBtn")

myBtn.addEventListener("click", () => {
    console.log("click me")
    myText.style.color = "red";
    myText.style.backgroundColor = "yellow";
    myText.classList.add("Kindness")
})

backBtn.addEventListener("click", () => {
    console.log("click me")
    myText.style.color = "black";
    myText.style.backgroundColor = "unset";
    myText.classList.remove("Kindness")
})