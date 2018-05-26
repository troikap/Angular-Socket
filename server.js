const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist/')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/Angular-Socket/index.html'));
    //Angular-Socket/
});

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', (socket) => {

    console.log('Nuevo Usuario Conectado');

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    })
})

server.listen(port, () => {
    console.log(`Server corriendo sobre el puerto ${port}`);
});