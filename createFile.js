const fs = require("fs");

let content = "Hello, World!"

fs.writeFile("HelloWorld.txt", content, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("successfully wrote file!")
});