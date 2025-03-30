async function consulta() { 

  try { 

      const response = await fetch('https://www.datos.gov.co/resource/fvq4-wwtz.json');  

      if (!response.ok) { 

          throw new Error(`Error: ${response.status} ${response.statusText}`); 

      } 

      const data = await response.json(); 

      console.log(data);  

  } catch (error) { 

      console.error('Error en la consulta:', error); 

  } 

} 

consulta(); 