const express = require("express");
const app = express();
const path = require("path");
const { pathToFileURL } = require("url");

const publicPath = path.join(__dirname,'Public');

app.use(express.static(publicPath));

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), console.log(`Server started on http://localhost:${app.get('port')}`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/Views/home.html'));
});

app.get('/CarritoDeCompras', (req, res) => {
    res.sendFile(path.join(__dirname, '/Views/CarritoDeCompras.html'));
});

app.get('/DetalleDeProducto', (req, res) => {
    res.sendFile(path.join(__dirname, '/Views/DetalleDeProducto.html'));
});

app.get('/FormularioDeLogin', (req, res) => {
    res.sendFile(path.join(__dirname, '/Views/FormularioDeLogin.html'));
});

app.get('/FormularioDeRegistro', (req,res)=> {
    res.sendFile(path.join(__dirname, '/Views/FormularioDeRegistro.html'));
});


