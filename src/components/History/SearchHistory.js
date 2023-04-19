import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const SearchHistory = ({ history, midSearchClassValue, bottomSearchClassValue, iconButtonClassValue, getOpenWeatherData, setSelectedHistoryIndex, setOpenDialog }) => {
  return (
    <div className={`${midSearchClassValue} custom-history`}>
      <h2 className='font-semibold'>Search History</h2>
      {history.length > 0 ? (
        <List>
          {history.map((search, index) => (
            <ListItem key={index} className='p-0 py-1'>
              <div className={`${bottomSearchClassValue} custom-history-listitem`}>
                <div className='custom-history-description'>
                  <div>{`${search.city}, ${search.country}`}</div>
                  <div>{`${search.datetime}`}</div>
                </div>
                <div className='custom-history-iconbutton'>
                  <IconButton aria-label="search" size ="small" onClick={() => getOpenWeatherData(search.city, search.country)} className={`${iconButtonClassValue}`} style={{ color: 'grey' }}>
                    <SearchOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="search" size ="small" onClick={() => { setSelectedHistoryIndex(index); setOpenDialog(true); }} className={`${iconButtonClassValue}`} style={{ color: 'grey' }}>
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
  );
};

export default SearchHistory;
