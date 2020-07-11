const axios  = require('axios');


const API_KEY = 'e21529300c9acf4b3df5ea0d18cb74a3'


//get the name and the weather of Rennes daily                                   
var lat1 = 48.0833;
var lon1 = -1.6833;
const request1 = axios.get("https://api.openweathermap.org/data/2.5/weather?q=Rennes&appid="+API_KEY)

const request2 = axios.get('https://api.openweathermap.org/data/2.5/onecall?lat='+lat1+'&lon='+lon1+'&exclude=hourly&appid='+API_KEY)


//get the name and the weather of Paris daily   
var lat2= 48.8534;
var lon2 =2.3488;
const request3 = axios.get("https://api.openweathermap.org/data/2.5/weather?q=Paris&appid="+API_KEY)

const request4 = axios.get('https://api.openweathermap.org/data/2.5/onecall?lat='+lat2+'&lon='+lon2+'&exclude=hourly&appid='+API_KEY)

var lat3= 48.5833;
var lon3 =7.75;

//get the name and the weather of Strasbourg daily
const request5 = axios.get("https://api.openweathermap.org/data/2.5/weather?q=Strasbourg&appid="+API_KEY)

const request6 = axios.get('https://api.openweathermap.org/data/2.5/onecall?lat='+lat3+'&lon='+lon3+'&exclude=hourly&appid='+API_KEY)

axios.all([request1, request2, request3, request4, request5, request6])
     .then(axios.spread((response1, response2, response3, response4, response5, response6) => {
        console.log("city: "+response1.data.name+"\n",response2.data, "city: "+response3.data.name, response4.data, "city: "+response5.data.name, response6.data);
     }))
     .catch(err => {
         console.error('error!!!')
     })