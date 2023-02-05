const express = require("express");
const path = require("path");
const { pathToFileURL } = require("url");

const publicPath = path.join(__dirname,'Public');

const app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/Views/home.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/Views/CarritoDeCompras.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/Views/DetalleDeProducto.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/Views/FormularioDeLogin.html'));
});

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '/Views/FormularioDeRegistro.html'));
    });


    const port = 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

