// Mencionando el módulo de express para nuestro proyecto
const express = require('express');

// Creando nuestro objeto central(gñobal) que se utilizará en nuestro
//proyecto (ruta, funciones y demás)
const app = express();

// Definiendo el puerto en el que se ejecutará nuestro proyecto servidor=localhost
//puerto=3000 por defecto es el servidor de express, pero podemos cambiarlo a cualquier otro puerto que deseemos

app.listen(3000, () => {
  console.log('Hola! estas utilizando express en el puerto 3000');
});
//const port = 3000;

