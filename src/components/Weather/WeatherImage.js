import React from 'react';

const WeatherImage = ({ weatherData, imageShadowClassValue }) => {
    return (
        <div className="absolute -top-24 -right-0 md:-top-36 md:right-3 flex items-center justify-center">
            <img
                src={
                    weatherData.weather[0].main === 'Rain'
                    ? '/rainy.gif?_ignore='
                    : weatherData.weather[0].main === 'Thunderstorm'
                    ? '/heavy-rain.gif?_ignore='
                    : weatherData.weather[0].main === 'Drizzle'
                    ? '/heavy-rain.gif?_ignore='
                    : weatherData.weather[0].main === 'Clouds'
                    ? '/cloudy.gif?_ignore='
                    : '/sunny.gif?_ignore='
                }
                alt="Weather condition"
                className={`${imageShadowClassValue} rounded-full w-40 h-40 md:h-52 md:w-52 lg:w-64 lg:h-64 object-cover shadow-xl`}
            />
        </div>
    );
};

export default WeatherImage;
