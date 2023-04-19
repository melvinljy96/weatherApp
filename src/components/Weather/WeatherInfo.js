import React from 'react';

const WeatherInfo = ({ weatherData, tempLabelClassValue }) => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-sm md:text-lg'>Today's Weather</p>
      <h2 className={`${tempLabelClassValue} font-bold text-4xl md:text-6xl`}>{Math.round(weatherData.main.temp - 273.15)}°</h2>
      <p className='text-sm md:text-lg'>H: {Math.round(weatherData.main.temp_max - 273.15)}° L: {Math.round(weatherData.main.temp_min - 273.15)}°</p>
    </div>
  );
};

export default WeatherInfo;
