import React, { useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import DeleteIcon from '@mui/icons-material/Delete';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const API_KEY = '3b2d39d12dc0243e2dd088436a6b59b4';

function WeatherApp() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [weatherData, setWeatherData] = useState(null); 
    const [history, setHistory] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [showError, setShowError] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };
    const backgroundClass = classNames({
        'bg-dark': !isDarkMode,
        'bg-light': isDarkMode,
    });
    const toggleClass = classNames({
        'bg-blue-950 text-blue-100': !isDarkMode,
        'bg-blue-100 text-blue-950': isDarkMode,
    });
    const textFieldClass = classNames({
        'shadow-firstlight-mode/50 text-white': !isDarkMode,
        'shadow-not-dark-purple/50 text-black': isDarkMode,
    });
    const buttonbgClass = classNames({
        'bg-darker-purple': !isDarkMode,
        'bg-normal-purple': isDarkMode,
    });
    const tempLabelClass = classNames({
        'text-white': !isDarkMode,
        'text-normal-purple': isDarkMode,
    });
    const allTextClass = classNames({
        'text-white': !isDarkMode,
        'text-black': isDarkMode,
    });
    const detailClass = classNames({
        'text-white': !isDarkMode,
        'text-gray-500': isDarkMode,
    });
    const topSearchClass = classNames({
        'bg-not-dark-purple/90': !isDarkMode,
        'bg-firstlight-mode/90': isDarkMode,
    });
    const midSearchClass = classNames({
        'bg-dark-purple/90': !isDarkMode,
        'bg-secondlight-mode/90': isDarkMode,
    });
    const bottomSearchClass = classNames({
        'bg-darker-purple/90': !isDarkMode,
        'bg-thirdlight-mode/90': isDarkMode,
    });
    const iconButtonClass = classNames({
        'bg-transparent': !isDarkMode,
        'bg-white': isDarkMode,
    });
    const imageShadowClass = classNames({
        'shadow-firstlight-mode/50': !isDarkMode,
        'shadow-not-dark-purple/50': isDarkMode,
    });

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(null);      

  // Get the data from OpenWeather API
  const getOpenWeatherData = async (city, country) => {
    // Check if both city and country have inputs
    if (!city || !country) {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);

      // Add search history records
      const search = {
        city,
        country,
        datetime: new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore' })
      };
      setHistory([...history, search]);

      // Clear input fields
      setCity('');
      setCountry('');
    } catch (error) {
      console.error(error);
      setWeatherData(null);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
        return;
    }
  };

    // Delete a search history record
    const handleDelete = () => {
        const newHistory = [...history];
        newHistory.splice(selectedHistoryIndex, 1);
        setHistory(newHistory);
        setSelectedHistoryIndex(null);
        setShowDelete(true);
        setTimeout(() => {
            setShowDelete(false);
        }, 5000);
        setOpenDialog(false);
    };

    //Deletion Dialog 
    const handleCloseDialog = () => {
        setSelectedHistoryIndex(null);
        setOpenDialog(false);
    };

    // Reset input fields for city and country
    const resetInputs = () => {
        setCity('');
        setCountry('');
        setShowInfo(true);
        setTimeout(() => {
            setShowInfo(false);
        }, 5000);
    };

  // Render weather data and search history
  return (
    <div className={`${backgroundClass} min-h-screen flex flex-col items-center justify-start pt-20 gap-6`}>
        <Fab className={`${toggleClass} fixed bottom-0 right-0 m-3`} onClick={handleToggle}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </Fab>
        <div className="flex flex-col md:flex-row gap-4 w-full p-4 md:w-1/2 md:p-0">
            <div className='w-full'>
                <TextField
                    fullWidth 
                    id="city"
                    label="City"
                    variant="filled"
                    size="small"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    InputProps={{ className: `${textFieldClass} rounded-lg` }}
                />
            </div>
            <div className='w-full'>
                <TextField
                    fullWidth 
                    id="country"
                    label="Country"
                    variant="filled"
                    size="small"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    InputProps={{ style: { color: 'white' }, className: `${textFieldClass} rounded-lg` }}
                />
            </div>
            <div className="flex flex-row gap-2 justify-center">
                <div className={`${buttonbgClass} flex rounded-2xl w-12 h-12 items-center text-center justify-center`}>
                    <IconButton aria-label="search" onClick={() => getOpenWeatherData(city, country)} style={{ color: 'white' }}>
                        <SearchOutlinedIcon />
                    </IconButton>
                </div>
                <div className={`${buttonbgClass} flex rounded-2xl w-12 h-12 items-center text-center justify-center`}>
                    <IconButton aria-label="reset" onClick={resetInputs} style={{ color: 'white' }}>
                        <RotateLeftIcon />
                    </IconButton>
                </div>
            </div>

            {/* Alert componrnts */}
            {showAlert && (
                 <Alert
                    severity="warning"
                    className="absolute top-0 right-0 m-2 transform transition-all duration-500"
                    onClose={() => setShowAlert(false)}
                >
                    Please enter both city and country.
                </Alert>
            )}
            {showError && (
                 <Alert
                    severity="error"
                    className="absolute top-0 right-0 m-2 transform transition-all duration-500"
                    onClose={() => setShowAlert(false)}
                >
                    Unable to find weather data for specified location. Please check the input and try again.
                </Alert>
            )}
            {showInfo && (
                 <Alert
                    severity="info"
                    className="absolute top-0 right-0 m-2 transform transition-all duration-500"
                    onClose={() => setShowInfo(false)}
                >
                    The inputs are cleared. Feel free to type again.
                </Alert>
            )}
            {showDelete && (
                <Alert
                    severity="success"
                    className="absolute top-0 right-0 m-2 transform transition-all duration-500"
                    onClose={() => setShowDelete(false)}
                >
                    The selected record is deleted.
                </Alert>
            )}
        </div>
        {weatherData ? (
            // If able to get response data from OpenWeather API
            <div className='p-4 md:p-0 w-full md:w-1/2'>
                <div className={`${allTextClass} ${topSearchClass} flex flex-col w-full items-center backdrop-filter backdrop-blur-sm rounded-2xl p-5 md:p-8 gap-8 mt-16 md:mt-32`}>
                    <div className='flex flex-col bg-transparent gap-4 w-full'>
                        <div className='flex flex-row justify-between relative'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm md:text-lg'>Today's Weather</p>
                                <h2 className={`${tempLabelClass} font-bold text-4xl md:text-6xl`}>{Math.round(weatherData.main.temp - 273.15)}°</h2>
                                <p className='text-sm md:text-lg'>H: {Math.round(weatherData.main.temp_max - 273.15)}° L: {Math.round(weatherData.main.temp_min - 273.15)}°</p>
                            </div>
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
                                    className={`${imageShadowClass} rounded-full w-40 h-40 md:h-52 md:w-52 lg:w-64 lg:h-64 object-cover shadow-xl`}
                                />
                            </div>
                        </div>
                        <div className={`${detailClass} flex flex-row justify-between text-sm md:text-base lg:text-lg w-full gap-2`}>
                            <div className='w-2/6 md:w-1/6 font-bold text-left'>{weatherData.name}, {weatherData.sys.country}</div>
                            <div className="w-4/6 flex md:w-5/6 flex-col md:flex-row gap-2 text-right">
                                <div className='w-full order-last md:order-first'>{new Date(weatherData.dt * 1000).toLocaleString('en-US', { timeZone: 'Asia/Singapore' })}</div>
                                <div className='w-full'>Humidity: {weatherData.main.humidity}%</div>
                                <div className='w-full order-first md:order-last'>{weatherData.weather[0].main}</div>
                            </div>
                        </div>
                    </div>
                    {/* Search History section */}
                    <div className={`${midSearchClass} flex flex-col gap-4 w-full p-2 md:p-4 rounded-2xl`}>
                        <h2 className='font-semibold'>Search History</h2>
                        {history.length > 0 ? (
                            <List>
                                {history.map((search, index) => (
                                    <ListItem key={index} className='p-1'>
                                        <div className={`${bottomSearchClass} flex flex-row justify-between p-2 rounded-2xl items-center w-full gap-4`}>
                                            <div className='flex flex-col md:flex-row justify-between w-full gap-1 text-xs md:text-base'>
                                                <div>{`${search.city}, ${search.country}`}</div>
                                                <div>{`${search.datetime}`}</div>
                                            </div>
                                            <div className='flex flex-row justify-end gap-2'>
                                                <IconButton aria-label="search" size ="small" onClick={() => getOpenWeatherData(search.city, search.country)} className={`${iconButtonClass}`} style={{ color: 'grey' }}>
                                                    <SearchOutlinedIcon />
                                                </IconButton>
                                                <IconButton aria-label="search" size ="small" onClick={() => { setSelectedHistoryIndex(index); setOpenDialog(true); }} className={`${iconButtonClass}`} style={{ color: 'grey' }}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <div className="text-center w-full">No weather record found.</div>
                        )}
                    </div>
                </div>
            </div>
            ) : (
                // If no response from API
                <div className='p-4 md:p-0 w-full md:w-1/2'>
                    <div className={`${allTextClass} ${midSearchClass} flex flex-col gap-4 w-full p-4 rounded-xl`}>
                        <h2 className='font-semibold'>Search History</h2>
                        {history.length > 0 ? (
                            <List>
                                {history.map((search, index) => (
                                    <ListItem key={index} className='p-1'>
                                        <div className={`${bottomSearchClass} flex flex-row justify-between p-2 rounded-2xl items-center w-full gap-4`}>
                                            <div className='flex flex-col md:flex-row justify-between w-full gap-1 text-sm md:text-base'>
                                                <div>{`${search.city}, ${search.country}`}</div>
                                                <div>{`${search.datetime}`}</div>
                                            </div>
                                            <div className='flex flex-row justify-end gap-2'>
                                                <IconButton aria-label="search" size ="small" onClick={() => getOpenWeatherData(search.city, search.country)} className={`${iconButtonClass}`} style={{ color: 'grey' }}>
                                                    <SearchOutlinedIcon />
                                                </IconButton>
                                                <IconButton aria-label="search" size ="small" onClick={() => { setSelectedHistoryIndex(index); setOpenDialog(true); }} className={`${iconButtonClass}`} style={{ color: 'grey' }}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <div className="text-center w-full">No weather record found.</div>
                        )}
                    </div>
                </div>
        )}

        {/* Dialog component for deletion */}
        <Dialog open={openDialog} onClose={handleCloseDialog} className='rounded-2xl'>
            <DialogTitle>Confirm deletion</DialogTitle>
            <DialogContent>
                <div>Are you sure you want to delete this history record?</div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialog} color="primary" shape="rounded">
                    Cancel
                </Button>
                <Button onClick={handleDelete} color="warning">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}

export default WeatherApp;
