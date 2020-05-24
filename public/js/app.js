const weatherForm = document.querySelector("form")
const search = document.querySelector("input")

const msg1=document.querySelector("#msg1")

const msg2= document.querySelector("#msg2")

const msg3 =document.querySelector("#msg3")

weatherForm.addEventListener("submit",(e)=>{

e.preventDefault()


const location = search.value
msg1.textContent="Loading"
msg2.textContent="...."

fetch("/weather?address="+location).then((response)=>{

response.json().then((data)=>{


if(data.error)
{  
  msg1.textContent=data.error
  msg2.textContent=""
  
}

else{
  msg1.textContent="Location Entered: "+data.Location
  msg2.textContent="Forecast: "+data.Forecast
   msg3.textContent="Humidity: "+data.Humidity
}

})
})



})