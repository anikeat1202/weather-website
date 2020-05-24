const geocode =require("./utils/geocode.js")
const forecast =require("./utils/forecast.js")
const path=require("path")
const express=require("express")

const hbs=require("hbs")


const partialspath= path.join(__dirname,"../template/partials")


const app=express()

const port = process.env.PORT || 3000

//Define Paths For express configuration
const publicdirectory=path.join(__dirname,"../public")
const viewspath= path.join(__dirname,"../template/views")

//setup handlebars engine and views location
app.set("view engine","hbs")
app.set("views",viewspath)
hbs.registerPartials(partialspath)



//setup static directory to serve
app.use(express.static(publicdirectory))



app.get("",(req,res)=>{

   res.render("index",{
     title:"Weather App",
     name:"Anikeat"
   })

})



app.get("/about",(req,res)=>{


    res.render("about",{
   title:"About Page",
   name:"Anikeat"
  

    })



})



app.get("/weather",(req,res)=>{

  if(!req.query.address)
  {
    return res.send({
      error:"Location Not Provided"
    })   
 

  }
  
  else{
  geocode(req.query.address,(error,{longitude,latitude} = { })=>{
  if(error){
      res.send({
        error:error
      })
      return 
  }
  
  
  forecast(longitude, latitude, (error, dataf) => {
    
    if(error)
    {
    res.send({
      error:error
    })
    return 
  }
    
   res.send({
    Location: req.query.address,
    Latitude:latitude,
    Longitude:longitude,
    Forecast:dataf 
   })

  })
  
  
  
  })
  
  }



  











       



  })



app.get("/products",(req,res)=>{
  if(!req.query.search){

   return res.send({
 error:"You Must Provide A Search Term"

    })

  }
  
console.log(req.query.search)
res.send({
  products : [],
})
  

})



app.get("/help",(req,res)=>{

  res.render("help",{
    title:"Help Page",
    name:"Anikeat",
  
  })

})




app.get("/help/*",(req,res)=>{

res.render("404page",{
errorMessage:"Help Article Not Found!!! ERROR 404"

})


})




app.get("*",(req,res)=>{


  res.render("404page",{


    errorMessage:"Page Not Found"
  })


})

app.listen(port, ()=>{

console.log("Server Is UP On port 3000"+port)

})

