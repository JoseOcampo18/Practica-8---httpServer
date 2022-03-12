var http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1');

//Al ejecutar node app.js en la terminal aparece una linea en blanco como si se quedara cargando algo, significa que está "escuchando"

//Al abrir localhost en el navegador, aparece el mensaje "Hello world"

//En la sección de headers aparece información que indicamos en el código, en res.writeHead,
// además aparece el request URL, que el método es get, el status de ok, y la dirección ip remota
