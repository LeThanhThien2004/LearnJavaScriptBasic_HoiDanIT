console.log("Video 41")

const ages = [24,12,26,75,65]

const agesX2 = ages.map((item,index) => item*2  )

const agesGreatThan18 = ages.filter((item,index) => item>18 )

console.log("original: ",ages)
console.log("agesX2: ",agesX2)

console.log(" agesGreatThan18 ",agesGreatThan18)