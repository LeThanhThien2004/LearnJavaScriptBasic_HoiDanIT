console.log("Lab 04")

const username = document.getElementById("username")

const password = document.getElementById("password")

const submitBtn = document.getElementById("submitBtn")



submitBtn.addEventListener("click", () => {
    const usernameCurrent = username.value
    const passwordCurrent = password.value
        if (usernameCurrent === "thienlethanh2210@gmail.com"
                && passwordCurrent === "123456")
        {
            alert("Đăng nhập thành công!")
            window.location.href = "success.html"
        }else {
            alert("Tài khoản hoặc mật khẩu sai")
            username.style.borderColor = "red"
            password.style.borderColor = "red"
        }
})