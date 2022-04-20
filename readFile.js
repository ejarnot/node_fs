const fs = require("fs")

fs.readFile("HelloWorld.txt", (err) =>{
    if(err){
        console.log(err)
        return
    }
    console.log("Read Successfully")
})