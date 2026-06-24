// Mencionando el módulo de express para nuestro proyecto
const express = require('express')

// indicamos que nuestra api tiene un middleware que nos permite recibir datos en formato JSON, esto es necesario para poder recibir datos desde el cliente (por ejemplo desde un formulario)
app.use(express.json())

// Creando nuestro objeto central(global) que se utilizará en nuestro
//proyecto (ruta, funciones y demás)
const app = express()
// Simulando una base de datos con un arreglo de objetos, cada objeto representa un estudiante con sus propiedades (id, nombre, edad, correo)
const estudiantes = [
  { id: 1, nombre: 'Juan Fuentes', edad: 18, correo: 'juan.garcia@example.com' },
  { id: 2, nombre: 'María Linares', edad: 17, correo: 'maria.linares@example.com' },
  { id: 3, nombre: 'Pedro Carcamo', edad: 18, correo: 'pedro.carcamo@example.com' },
  { id: 4, nombre: "Ana García", edad: 18, correo: "ana.garcia@email.com" },
  { id: 5, nombre: "Carlos López", edad: 17, correo: "carlos.lopez@email.com" },
  { id: 6, nombre: "María Pérez", edad: 18, correo: "maria.p@email.com" }
]

// Definiendo el puerto en el que se ejecutará nuestro proyecto servidor=localhost
//puerto=3000 por defecto es el servidor de express, pero podemos cambiarlo a cualquier otro puerto que deseemos

app.listen(3000, () => {
  console.log('Hola! estas utilizando express en el puerto 3000')
})
//const port = 3000;
//comando para ejecutar el servidor (archivo: index.js) en la terminal: node index.js

/** Definiendo una ruta principal para nuestra aplicación, en este caso la ruta raíz ("/") 
  *Petición HTTP: GET: responde a la solicitud del cliente con un mensaje de texto
  *POST:  responde a la solicitud del cliente con un mensaje de texto, pero se utiliza para enviar datos al servidor
  *PUT:  responde a la solicitud del cliente con un mensaje de texto, pero se utiliza para actualizar datos en el servidor
  *PATCH:  responde a la solicitud del cliente con un mensaje de texto, pero se utiliza para actualizar datos en el servidor de manera parcial
  *DELETE:  responde a la solicitud del cliente con un mensaje de texto, pero se utiliza para eliminar datos en el servidor
    *Primer parametro ruta req: request= (necesitamos ciertos parametros por ejemplo datos del usuario (body), headers)
    *segundo parametro res: response = función que se ejecutará cuando se haga una solicitud a esa ruta 
    */
app.get('/', (req, res) => {
  res.send('Hola Mundo desde Express, bienvenidos a mi API Estudiantes')
  //res.send(): envía una respuesta al cliente con el mensaje de texto
})

//Ruta para obtener todos los estudiantes (Segundo endpoint)
app.get('/estudiantes', (req, res) => {
 // codigo
res.status(200).json(estudiantes)
})

// En Node.js/Express, captura el error completo:
app.use((err, req, res, next) => {
    console.error(err.stack);  // muestra dónde falló exactamente
    res.status(500).json({ error: err.message });
});

