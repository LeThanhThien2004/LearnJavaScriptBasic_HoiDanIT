console.log("Video 63")

//fetch => raw data (res) => object

const temp = fetch("http://localhost:8000/users")

temp.then(res => res.json())
    .then(data => console.log("data", data))


