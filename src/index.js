import express from 'express';
import path from 'path';
import google from './server/parsers/google';
import dockdockgo from './server/parsers/dockdockgo';

const app = express();
app.use(express.static(__dirname + '/dist'))

app.get('/test/', (request, response) => {
    response.send("TEST TEST");
})


app.get('/topresult/', (request, response) => {
    Promise.all([
        dockdockgo(),
        google()
    ]).then(retr => response.send(retr))
})

app.get('/', ( request, response ) => {
    response.sendFile(path.resolve(__dirname, '/dist', 'index.html'))
})

app.listen(8080)
console.log("server started on port 8080")

