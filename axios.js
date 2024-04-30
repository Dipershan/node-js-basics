const axios  =  require("axios");



const getMyWeather = async (url) => {
    const{
        data :{hourly},

    }  =  await axios.get(url);
    const {time  , temperature_2n} =  hourly;
    const now  =  new Date().toISOString().split(":")[0].split("T");


    console.log(result);

};

getMyWeather(
    "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"

);

/**
 * use package called moment to get the currentTIme as required(2024-04- 29T11:00)
 * Get data sunrise and sunset
 * convert this into module
 */

