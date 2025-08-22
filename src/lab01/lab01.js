console.log("Lab 01")

const fullName = "Lê Thanh Thiện"
birthYear = "2004"
isStudent = false

const today = new Date()
const currentYear = today.getFullYear()

const calculatedAge = currentYear - birthYear

console.log(currentYear, typeof currentYear)
if(calculatedAge<22 && calculatedAge > 18){
        isStudent = true
}
console.log(`
Tên: ${fullName}
Tuổi: ${calculatedAge}
Sinh viên: ${isStudent}`)