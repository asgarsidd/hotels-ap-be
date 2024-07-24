const express = require('express')
require('dotenv').config();
const db = require('./db')
const bodyParser = require('body-parser') // for extracting data from http request and convert it into javascript object
const app = express() //server create at port 3000

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json()) // convert to object from json and stored in req.body


app.get('/', (req, res) => {
   res.send('Welcome to Node Js and MongoDB Tutorial!')
})

// Middleware to catch JSON parsing errors
app.use((err, req, res, next) => {
   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
     console.error('Bad JSON:', err);
     return res.status(400).send({ message: 'Invalid JSON payload' });
   }
   next();
 });

//Import routers files for Menu
const menuItemRoutes = require('./routes/menuItemRoutes')
// Use the routes
app.use('/menu', menuItemRoutes);
// Import the router files 
const personRoutes = require('./routes/personRoutes')
// Use the routers
app.use('/person', personRoutes)



app.listen(PORT, () => console.log('Server listening on port 3000!'))