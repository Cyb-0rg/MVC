const express = require("express")
const app = express();
const port = 5500;

const userRoute  = require('./users/router/userRouter');
app.use('/getUsers', userRoute);

app.get('/useMe', (req, res) =>{
    res.send("use me here");
}) // just for checking...

app.listen(port, ()=>{
    console.log(`app running at port ${port}`);
})