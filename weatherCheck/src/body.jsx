import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Body = () => {
  const [input, setInput] = useState("");
  const [weatherData,setWeatherData] = useState(null);
  const [error,setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ad8180b364494dbfa6953810242702&q=${input}&days=1&aqi=no&alerts=no`);
        const data = await response.json();
        console.log(data);
        
        if(data.error){
            setWeatherData(null);
            setError(data.error.message)
        }else{
            setWeatherData(data)
            setError(null)
        }
        
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Error fetching data")
        setWeatherData(null)
      }
    };

    // Only fetch data if input is not empty
    if (input.trim() !== "") {
      fetchData();
    }
  }, [input]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="mt-4 text-center box-border">
      <input
        type="text"
        name="searchBar"
        placeholder="Enter location"
        className="border border-black p-4 mx-auto w-2/5 opacity-50 rounded-lg hover:opacity-100"
        onChange={handleInput}
      />
         {
            error&&(
               <Typography variant="h4" color="error" mt={2}>
                {error}
               </Typography>
            )
         }
      {
        weatherData&&(
            <Card className="mt-4 mx-auto shadow-lg " style={{ maxWidth: 400 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom fontWeight="bold">
                {weatherData.location.name},{weatherData.location.country}
              </Typography>
              <img src={weatherData.weatherIconUrl} alt="weather icon"/>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <Typography variant="body1" fontWeight="bold">Temperature:</Typography>
             <Typography variant="body1">{weatherData.current.temp_c}°C</Typography>
             </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <Typography variant="body1" fontWeight="bold">Condition:</Typography>
                <Typography variant="body1">{weatherData.current.condition.text}</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <Typography variant="body1" fontWeight="bold">Humidity:</Typography>
                <Typography variant="body1">{weatherData.current.humidity}%</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" fontWeight="bold">Cloud Coverage:</Typography>
                <Typography variant="body1">{weatherData.current.cloud}%</Typography>
                </div>
              <Typography variant="caption" display="block" mt={2}>
                Last updated: {weatherData.current.last_updated}
              </Typography>
            </CardContent>
          </Card>
        )
      }
    </div>
  );
};

export default Body;
