const request=require("request")
const geocode= (address,callback)=>{

    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYW5pa2VhdDEyMDIiLCJhIjoiY2thMmRjaXZmMDJ3azNucWIxODBiODg0eiJ9.yV7MRpZ8RKtxiUXxMg3fLw'
  request({url:url,json:true},(error,{body}={})=>{

  if(error){
    callback("Unable To Connect To Internet",undefined)
  }
 
  else if(body.features.length==0)
  {
      callback("No Such Location Found",undefined)
  }

  else {

   longitude=body.features[0].center[0],
  latitude=body.features[0].center[1]

const data={
longitude,
latitude
    
}

callback(undefined,data)

  }

   

  })

}

module.exports=geocode

