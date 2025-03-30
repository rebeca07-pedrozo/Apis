const fs = require('fs');

fs.readFile('archivo.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo', err);
    return;
  }
  const jsonData = JSON.parse(data);
  console.log(jsonData);
});
async function consulta() {
    try {
        const response = await fetch('https://www.datos.gov.co/resource/kfsz-ija2.json?departamento=cundinamarca'); 
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        const jsonData = JSON.parse(data);
        console.log(jsonData);
    } catch (error) {
        console.error('Error en la consulta:', error);
    }
}
consulta();
