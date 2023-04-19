import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

const Form = ({ city, setCity, country, setCountry, textFieldClassValue, buttonbgClassValue, getOpenWeatherData, resetInputs }) => {
    return (
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
                    InputProps={{ className: `${textFieldClassValue} rounded-lg` }}
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
                    InputProps={{ className: `${textFieldClassValue} rounded-lg` }}
                />
            </div>
            <div className="flex flex-row gap-2 justify-center">
                <div className={`${buttonbgClassValue} custom-search-reset-button`}>
                    <IconButton aria-label="search" onClick={() => getOpenWeatherData(city, country)} style={{ color: 'white' }}>
                        <SearchOutlinedIcon />
                    </IconButton>
                </div>
                <div className={`${buttonbgClassValue} custom-search-reset-button`}>
                    <IconButton aria-label="reset" onClick={resetInputs} style={{ color: 'white' }}>
                        <RotateLeftIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Form;
