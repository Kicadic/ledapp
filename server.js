var Gpio = require('onoff').Gpio; //require onoff to control GPIO
var LEDRed = new Gpio(21, 'out'); //declare GPIO21 an output
var LEDYellow = new Gpio(20, 'out'); //declare GPIO20 an output
var LEDGreen = new Gpio(16, 'out'); //declare GPIO16 an output

var fs = require('fs'); //require filesystem to read html files
var http = require('http').createServer(function handler(req, res) { //create server
  fs.readFile(__dirname + '/src/app/led-page/led-page.component.html', function (err, data) { //read html file
    if (err) {
      res.writeHead(500);
      return res.end('Error loading socket.io.html');
    }

    res.writeHead(200);
    res.end(data);
  });
});

var io = require('socket.io')(http) //require socket.io module and pass the http object

http.listen(8080); //listen to port 8080

io.sockets.on('connection', function (socket) {// WebSocket Connection

  var buttonStateRed = 0; //variable to store button state
var buttonStateYellow = 0; //variable to store button state
var buttonStateGreen = 0; //variable to store button state


  socket.on('stateRed', function (data) { //get button state from client
    buttonStateRed = data;
    if (buttonStateRed != LEDRed.readSync()) { //Change LED state if button state is changed
      LEDRed.writeSync(buttonStateRed); //turn LED on or off
    }
  });
 socket.on('stateYellow', function (data) { //get button state from client
    buttonStateYellow = data;
    if (buttonStateYellow != LEDYellow.readSync()) { //Change LED state if button state is changed
      LEDYellow.writeSync(buttonStateYellow); //turn LED on or off
    }
  });
 socket.on('stateGreen', function (data) { //get button state from client
    buttonStateGreen = data;
    if (buttonStateGreen != LEDGreen.readSync()) { //Change LED state if button state is changed
      LEDGreen.writeSync(buttonStateGreen); //turn LED on or off
    }
  });
});