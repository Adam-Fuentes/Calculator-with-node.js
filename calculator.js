const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({//se necesita esto para poder usar el body parser
    extended: true
}));
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){//con el body parser tenemos ahora el body con los post pasados anteriormente

    var result = Number(req.body.num1) + Number(req.body.num2);

    res.send("El resultado es: " + result);
});
 
app.listen(3000, function(){
    console.log("Server started at port 3000.");
});