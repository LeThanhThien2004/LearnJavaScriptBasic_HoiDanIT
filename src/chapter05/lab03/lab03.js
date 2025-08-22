console.log("Lab 03")

const sp1 = { 
        name: "T-shirt", 
        price: 200, 
        inStock: true 
} 
const sp2 = { 
        name: "Sneaker", 
        price: 500, 
        inStock: true 
} 

const sp3 = { 
        name: "Pants", 
        price: 300, 
        inStock: true 
} 

const sp4 = { 
        name: "Tie", 
        price: 50, 
        inStock: false 
} 

const sp5 = { 
        name: "Trousers", 
        price: 250, 
        inStock: false 
} 

const sanpham = [sp1,sp2,sp3,sp4,sp5]

const sanphamdautien = sanpham[0]
console.log("Tên sản phẩm đầu tiên : ",sanphamdautien.name)

const sanpham2 = [sp1,{
    name : sp2.name,
    price : 150,
    inStock : sp2.inStock
},sp3,sp4,sp5]

console.log("Update Sản phẩm thứ 2 : ",sanpham2)

const sp6 = {
    name : "headphone",
    price : 380,
    inStock : true
}

sanpham.push(sp6)

console.log("Danh sách tất cả sản phẩm : ",sanpham)

sanpham.pop()

sanpham.forEach((item, index) => {
    console.log(" Tên SP = ", item.name )
})

const giaSP = sanpham.map((item,index) => {
    return item.price
})

console.log("Gía toàn bộ sản phấm : ",giaSP)

const cacSPSanCo = sanpham.filter((item,index) => {
    return item.inStock === true ;
})

console.log("Các sản phẩn còn hàng : ",cacSPSanCo)

for (const key in sp1) {
    console.log(key,sp1[key])
}