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
    const response = await fetch (`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=Barbados&days=3&aqi=no&alerts=no` ,
    {mode:'cors'}
    );

    const data = await response.json();

    return data;
}

const fetchSearchData = async (location) => {
    const response = await fetch (`http://api.weatherapi.com/v1/search.json?key=${key}&q=${location}
    ` ,
    {mode:'cors'}
    );

    const data = await response.json();
    console.log(data);
    return data;
}

/* async function getSearchQuery() { */
    
    form.addEventListener('submit' , (e) => {
        e.preventDefault();
        new FormData(form); //FormData is an inbuilt prototype

        let fd = new FormData(form); //fd formdata

        const obj = Object.fromEntries(fd); //returns js object from data passed in
        const json = JSON.stringify(obj);

        fetchSearchData(search.value);
        console.log(search.value);
        console.log(obj);
    })




const getForecastInfo = async () => {

    const data = await fetchForecastData();
    return console.log(data);
    
    const info = {
        
    }
}

const getCurrentInfo = async () => {

    const data = await fetchCurrentData();

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

fetchCurrentData();

getForecastInfo();

getCurrentInfo().then((info) => {
    /* console.log(info.condition); */
});

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