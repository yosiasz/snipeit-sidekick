import express from "express";
import cors from 'cors';
var app = express();


let port = process.env.PORT || 4100;
let environment = process.env.NODE_ENV;

//APP USE
app.use(express.urlencoded({extended: true}));
app.use(express.json());

var whitelist = [
  'http://localhost:4200'
];


var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors());
app.options('*', cors(corsOptions));

//routes
app.use('/' , require('./routes/index.ts'));

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
});