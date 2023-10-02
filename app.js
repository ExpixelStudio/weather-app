const key = '7bf03271313d4720a4171840231809';
const form = document.getElementById('search-form');
const search = document.getElementById('search');

const fetchCurrentData = async () => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Barbados&aqi=no` ,
        {mode:'cors'}
    );
    const data = await response.json();
        
    return data;
}

const fetchForecastData = async (location) => {
    
    const response = await fetch (`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3&aqi=no&alerts=no` ,
        {mode:'cors'}
        );
    
        const data = await response.json();
        /* console.log({data}); */
        return data;
   
}

const fetchSearchData = async (location) => {
    const response = await fetch (`http://api.weatherapi.com/v1/search.json?key=${key}&q=${location}
    ` ,
    {mode:'cors'}
    );

    const data = await response.json();
    /* console.log(data); */
    return data;
}


    
    form.addEventListener('submit' , async (e) => {
        e.preventDefault();
        /* new FormData(form); */ //FormData is an inbuilt prototype

        let fd = new FormData(form); //fd formdata

        const obj = Object.fromEntries(fd); //returns js object from data passed in
        const json = JSON.stringify(obj);

        fetchForecastData(json);
        fetchSearchData(search.value);

        console.log(json);

        getCurrentInfo(json);
        const forecastInfo = await getForecastInfo(json);
        
        const forecastDay = forecastInfo(1);
        console.log(forecastDay);
        
       

    })




const getForecastInfo = async (location) => {

    const data = await fetchForecastData(location);

   
        const forecastDay = (i) => {

            const info = {
            date : `${data.forecast.forecastday[i].date}`,
            avgTemp_cel : `${data.forecast.forecastday[i].day.avgtemp_c}`,
            avgTemp_fah : `${data.forecast.forecastday[i].day.avgtemp_f}`,
            condition : `${data.forecast.forecastday[i].day.condition.text}`,
            }

            console.log(info);
            return info;
        };

        return forecastDay;
        
    //}
}

const getCurrentInfo = async (location) => {

    const data = await fetchForecastData(location);

    const info = {
        condition : `${data.current.condition.text}`,
        location : `${data.location.country}`,
        time : `${data.location.localtime}`,
        temp_cel : `${data.current.temp_c}`,
        temp_fah : `${data.current.temp_f}`,
        feels_cel : `${data.current.feelslike_c}`,
        feels_fah : `${data.current.feelslike_f}`,
        wind_speed : `${data.current.gust_kph}`,
        humidity : `${data.current.humidity}`,
    };
    console.log({data});
    console.log({info});
    return info;
}



fetchForecastData('Barbados');

/* getForecastInfo(); */

/* getCurrentInfo().then((info) => {
    
}); */

/* const fetchData = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Barbados&aqi=no` ,
        {mode:'cors'}
    )
    .then(function(response){
        
        return response.json();
    })
    .then(function(response){
            const info = {
            condition : `${response.current.condition.text}`,
            location : `${response.location.country}`,
            time : `${response.location.localtime}`,
            temp_cel : `${response.current.temp_c}`,
            temp_fah : `${response.current.temp_f}`,
            feels_cel : `${response.current.feelslike_c}`,
            feels_fah : `${response.current.feelslike_f}`,
            wind_speed : `${response.current.gust_kph}`,
            humidity : `${response.current.humidity}`,
        }
        console.log(response);
        console.log(info);
        return info;
    });
} */