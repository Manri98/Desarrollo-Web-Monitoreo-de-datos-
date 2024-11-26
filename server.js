const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 8000;

// Lee los datos desde el archivo JSON
const rawData = fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(rawData);

// Función para obtener un índice aleatorio
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// Servir archivos estáticos del directorio "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de la API
app.get('/api/data', (req, res) => {
    const responseData = {
        temperature: data.temperatura[getRandomIndex(data.temperatura.length)],
        current: data.corriente[getRandomIndex(data.corriente.length)],
        voltage: data.voltaje[getRandomIndex(data.voltaje.length)]
    };

    res.json(responseData);
});

// Iniciar el servidor en el puerto 8000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
