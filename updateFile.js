const fs = require("fs")

const appendTxt = "...Don't Panic"

fs.appendFile("HelloWorld.txt", appendTxt, (err) =>{
    if(err){
        console.log(err);
        return
    }
    console.log("Appended successfully!")
})