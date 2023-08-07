const express = require('express')
// file system
const fs = require('fs');
// directory / 
const path = require('path');
const app = express()


const routesDir = path.join(__dirname, 'routes');
console.log(`Route directory path ${routesDir}` )

app.use(express.json());

fs.readdirSync(routesDir)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file.slice(-3) === '.js' 

)})
  .forEach((file) => {
    const routes = require(path.join(routesDir, file));
    const baseName = file.slice(0, -3); 
    app.use(`/${baseName}`, routes);
  });


app.listen (3000 , ()=>{
    console.log('listening on this port ' )
})
