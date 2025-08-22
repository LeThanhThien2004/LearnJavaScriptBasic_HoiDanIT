console.log("Video 27")

//score => A,B,C,D,F. Gioi ,khá , trung bình,yếu

const score = 8
switch (true) {
    case (score >= 8 && score <=10): // true === 8 (sai)
        console.log("Gioi")         // true === true (đúng)
        break;
    case (score >=6 && score < 8):
        console.log("Kha")
        break;
    case (score >= 4 && score <6):
        console.log("Trung Binh")
        break;
    default :
    console.log("Yeu")

}