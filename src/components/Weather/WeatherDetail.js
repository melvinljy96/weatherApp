import React from 'react';

const WeatherDetail = ({ weatherData, detailClassValue }) => {
  return (
    <div className={`${detailClassValue} flex flex-row justify-between text-sm md:text-base lg:text-lg w-full gap-2`}>
      <div className='w-2/6 md:w-1/6 font-bold text-left'>{weatherData.name}, {weatherData.sys.country}</div>
      <div className="w-4/6 flex md:w-5/6 flex-col md:flex-row gap-2 text-right">
        <div className='w-full order-last md:order-first'>{new Date(weatherData.dt * 1000).toLocaleString('en-US', { timeZone: 'Asia/Singapore' })}</div>
        <div className='w-full'>Humidity: {weatherData.main.humidity}%</div>
        <div className='w-full order-first md:order-last'>{weatherData.weather[0].main}</div>
      </div>
    </div>
  );
}
export default WeatherDetail;
