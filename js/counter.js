import {Server} from '../server'

var server = new Server();
server.readFile('input.txt', function(err, data){
    if(err){
        console.log(err)
    } else{
        console.log(data.toString)
    }
});

var data = fs.readFileSync("input.txt");
console.log(data.toString)
console.log("error222322")