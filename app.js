const key = '7bf03271313d4720a4171840231809';

const fetchData = async () => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Barbados&aqi=no` ,
        {mode:'cors'}
    )
    const data = await response.json();
        
    const getInfo = () => {
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
    console.log(data);
    console.log(info);
    return info;
}
return getInfo;
}


const get = fetchData();
console.log(get);

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