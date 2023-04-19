import React from 'react';
import { useWeatherApp } from './components/UseWeatherApp/useWeatherApp';
import { backgroundClass, toggleClass, textFieldClass, buttonbgClass, tempLabelClass, allTextClass, detailClass,
        topSearchClass, midSearchClass, bottomSearchClass, iconButtonClass, imageShadowClass } from './components/CustomClass/customStyle';
import DeleteDialog from './components/Dialog/DeletionDialog';
import ToggleDarkModeFab from './components/ToggleButton/ToggleDarkMode';
import Form from './components/Search/Form';
import CustomAlert from './components/Alert/CustomAlert';
import SearchHistory from './components/History/SearchHistory';
import WeatherDetail from './components/Weather/WeatherDetail';
import WeatherImage from './components/Weather/WeatherImage';
import WeatherInfo from './components/Weather/WeatherInfo';

function WeatherApp() {
    const {
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
      } = useWeatherApp();  
    const backgroundClassValue = backgroundClass(isDarkMode);
    const toggleClassValue = toggleClass(isDarkMode);
    const textFieldClassValue = textFieldClass(isDarkMode);
    const buttonbgClassValue = buttonbgClass(isDarkMode);
    const tempLabelClassValue = tempLabelClass(isDarkMode);
    const allTextClassValue = allTextClass(isDarkMode);
    const detailClassValue = detailClass(isDarkMode);
    const topSearchClassValue = topSearchClass(isDarkMode);
    const midSearchClassValue = midSearchClass(isDarkMode);
    const bottomSearchClassValue = bottomSearchClass(isDarkMode);
    const iconButtonClassValue = iconButtonClass(isDarkMode);
    const imageShadowClassValue = imageShadowClass(isDarkMode);
    const renderAlert = (severity, message, onClose) => (
        <CustomAlert severity={severity} message={message} onClose={onClose} />
    );
    const renderSearchHistory = () => (
        <SearchHistory
            history={history}
            midSearchClassValue={midSearchClassValue}
            bottomSearchClassValue={bottomSearchClassValue}
            iconButtonClassValue={iconButtonClassValue}
            getOpenWeatherData={getOpenWeatherData}
            setSelectedHistoryIndex={setSelectedHistoryIndex}
            setOpenDialog={setOpenDialog}
        />
    );

    // Render weather data and search history
    return (
    <div className={`${backgroundClassValue} min-h-screen flex flex-col items-center justify-start pt-20 gap-6`}>
        {/* Toggle Dark Mode Components */}
        <ToggleDarkModeFab
            toggleClassValue={toggleClassValue}
            isDarkMode={isDarkMode}
            handleToggle={handleToggle}
        />
        {/* Forn Components to input City and Country */}
        <Form
            city={city} setCity={setCity}
            country={country}
            setCountry={setCountry}
            textFieldClassValue={textFieldClassValue}
            buttonbgClassValue={buttonbgClassValue}
            getOpenWeatherData={getOpenWeatherData}
            resetInputs={resetInputs}
        />
        {/* Alert components */}
        {showAlert && renderAlert("warning", "Please enter both city and country.", () => setShowAlert(false))}
        {showError && renderAlert("error", "Unable to find weather data for specified location. Please check the input and try again.", () => setShowAlert(false))}
        {showInfo && renderAlert("info", "The inputs are cleared. Feel free to type again.", () => setShowAlert(false))}
        {showDelete && renderAlert("success", "The selected record is deleted.", () => setShowAlert(false))}

    {weatherData ? (
        // If able to get response data from OpenWeather API
        <div className='p-4 md:p-0 w-full md:w-1/2'>
            <div className={`${allTextClassValue} ${topSearchClassValue} flex flex-col w-full items-center backdrop-filter backdrop-blur-sm rounded-2xl p-5 md:p-8 gap-8 mt-16 md:mt-32`}>
                <div className='flex flex-col bg-transparent gap-4 w-full'>
                    <div className='flex flex-row justify-between relative'>
                        {/* Weather Main Info */}
                        <WeatherInfo weatherData={weatherData} tempLabelClassValue={tempLabelClassValue} />
                        {/* Weather GIF Image */}
                        <WeatherImage weatherData={weatherData} imageShadowClassValue={imageShadowClassValue} />
                    </div>
                    {/* Weather Detail */}
                    {weatherData && <WeatherDetail weatherData={weatherData} detailClassValue={detailClassValue} />}
                </div>
                {/* Search History section */}
                {renderSearchHistory()}
            </div>
        </div>
    ) : (
        // If no response from API
        <div className={`${allTextClassValue} p-4 md:p-0 w-full md:w-1/2`}>
            {renderSearchHistory()}
        </div>
    )}
        {/* Dialog component for deletion */}
        <DeleteDialog open={openDialog} handleCloseDialog={handleCloseDialog} handleDelete={handleDelete} />
    </div>
    );
}

export default WeatherApp;
