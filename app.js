const express = require('express');
const ideaRoutes = require('./routes/ideaRoutes');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.use(express.json()); 
app.use('/ideas', ideaRoutes);

module.exports = app;
