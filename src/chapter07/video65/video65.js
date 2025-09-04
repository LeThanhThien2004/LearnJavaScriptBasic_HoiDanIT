

console.log("Video 65");

const greeting = (name,callback) => {
    console.log(`Hello ${name}`);
    callback();
}

const hello  = () => {
    console.log("Learn callback....");
}

greeting("Kindness", hello);