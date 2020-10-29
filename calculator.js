const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({//se necesita esto para poder usar el body parser
    extended: true
}));
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//esucha y si se pasa algo por / en post salta
app.post("/", function(req, res){//con el body parser tenemos ahora el body con los post pasados anteriormente

    var result = Number(req.body.num1) + Number(req.body.num2);

    res.send("El resultado es: " + result);
});

app.get('/bmicalculator', function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("Tu IMC es: " + bmi);
})
 
app.listen(3000, function(){
    console.log("Server started at port 3000.");
});