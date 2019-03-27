var express = require("express"),
    app = express();

app.get("/", function(req, res){
    res.send("hello world")
});

function range (first, second, step) {
    var arr = []
    for(let i = first; i <= second; i+=step){
        arr.push(i)
    }
    return arr; 
}
function sum(range){
    var total=0;
    range.forEach(element => {
        total=element+total;
    });
    return total;
}
console.log(sum(range(1,10,2)));

app.listen(8000, () => {
    console.log('Example app listening on port 8000! hi')
});