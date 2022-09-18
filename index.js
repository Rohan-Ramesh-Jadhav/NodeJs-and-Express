// import the module express using require
const express = require('express');
const path = require('path');

//take a variable to assign express()
const app = express();
const PORT = process.env.PORT || 8080;


//this is the middleware code 
const middlewareVar = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.use(middlewareVar);
app.use(express.json());

// now we can create the endpoints to the same and even listen the port
app.use('/api',require('./routs/api'));


//static folder 
app.use(express.static(path.join(__dirname,'webpage')));

//above code is replacement for the below commented code to send the file

// app.get('/webpage',(req,res)=>{
//     //we have to use sendFile insted of send 
//     //utilize join function to path variable to bind the file
//     res.sendFile(path.join(__dirname,'webpage','simplePage.html'));
// })

app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
});
