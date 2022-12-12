const readLine = require("readline");

const iF = readLine.createInterface({
    input:process.stdin,
    output:process.stdout,
})

iF.question("Please enter your name: ",input=>{
    console.log(`Hello ${input}`);
    iF.close();
});