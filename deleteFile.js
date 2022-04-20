const fs = require("fs")

fs.unlink("HelloWorld.txt", (err) => {
    if(err){
        console.log(err)
        return;
    }
    console.log("Successfully deleted file")
})