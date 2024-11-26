// URL base de la API (relativa al mismo servidor)
const API_URL = '/api/data';

// Función para obtener datos desde la API
async function fetchData() {
    try {
        const response = await fetch(API_URL); // Usar la misma ruta base
        if (!response.ok) throw new Error('Error al obtener los datos de la API');
        return await response.json();
    } catch (error) {
        console.error(error);
        return { temperatura: 0, corriente: 0, voltage: 0 }; // Valores por defecto en caso de error
    }
}

// Función para manejar la actualización de valores
async function updateValue(type) {
    const data = await fetchData(); // Obtener los datos de la API
    const tiempoElement = document.getElementById('tiempo');
    const now = new Date();

    // Actualizar valores según el tipo
    if (type === 'temperatura') {
        document.getElementById('temperatura').textContent = `${data.temperature} °C`;
    } else if (type === 'corriente') {
        document.getElementById('corriente').textContent = `${data.current} A`;
    } else if (type === 'tension') {
        document.getElementById('tension').textContent = `${data.voltage} V`;
    }

    // Mostrar hora y fecha exacta
    tiempoElement.textContent = `Última actualización: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
}
