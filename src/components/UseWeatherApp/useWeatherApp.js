import axios from 'axios';
import { useState } from 'react';

export const useWeatherApp = () => {
  // City and country state
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  // Weather data state
  const [weatherData, setWeatherData] = useState(null); 

  // Search history state
  const [history, setHistory] = useState([]);

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Error, alert, and info message states
  const [showError, setShowError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // Delete dialog states
  const [showDelete, setShowDelete] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(null);

  // Event handlers
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getOpenWeatherData = async (city, country) => {
    // Check if both city and country have inputs
    if (!city || !country) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return;
    }

    // Please insert API Key before proceeding
    const API_KEY = '';
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

  const handleDelete = () => {
    const newHistory = [...history];
    newHistory.splice(selectedHistoryIndex, 1);
    setHistory(newHistory);
    setSelectedHistoryIndex(null);
    setShowDelete(true);
    setTimeout(() => setShowDelete(false), 5000);
    setOpenDialog(false);
  };

  const handleCloseDialog = () => {
    setSelectedHistoryIndex(null);
    setOpenDialog(false);
  };

  const resetInputs = () => {
    setCity('');
    setCountry('');
    setShowInfo(true);
    setTimeout(() => setShowInfo(false), 5000);
  };

  // Return state objects and event handlers as an object
  return {
    city,
    setCity,
    country,
    setCountry,
    weatherData,
    history,
    isDarkMode,
    showError,
    showAlert,
    setShowAlert,
    showInfo,
    showDelete,
    openDialog,
    setOpenDialog,
    setSelectedHistoryIndex,
    handleToggle,
    handleDelete,
    handleCloseDialog,
    resetInputs,
    getOpenWeatherData
  };
};
