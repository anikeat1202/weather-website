const request=require("request")


const forecast=(longitude=76.69,latitude=30.696627,callback)=>{

const url="http://api.weatherstack.com/current?access_key=a6b9284818f115671c53e1f56826eef5&query="+latitude+","+longitude+"&unites=f"

request({url,json:true},(error,{body}={ })=>{


if(error){
    callback("Unable to connect to internet",undefined)
}

else if(body.error){

    callback("No Such Location Found",undefined)

}
else{

callback(undefined,body.current.weather_descriptions[0])

}


})

}



module.exports=forecast