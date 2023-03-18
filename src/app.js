const express = require ("express");
const path = require ('path');
const hbs = require ('hbs');
const app = express();
const port = process.env.PORT || 8000 ;



//public static path

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");



app.set('view engine', 'hbs');
app.set('views', template_path);


app.use(express.static(static_path));


// routing
app.get("", (req , res) =>{
  res.render('index');
})

app.get("/about", (req , res) =>{
  res.render('about');
})
app.get("/service", (req , res) =>{
  res.render('service');
})
app.get("/contact", (req , res) =>{
  res.render('contact');
})


app.listen(port , () =>{
  console.log(`server is listening at the port ${port}`);
})