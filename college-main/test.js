const express=require('express');
const app=express();

app.use(express.static("./"));

// const port = process.env.PORT || 4000;
app.listen(3000, () => {  
      console.log('server started')
 });
