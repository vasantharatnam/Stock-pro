import React, { useState } from "react";

const Autocomplete = ({sotiSearchText}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const allOptions = ['AMRN', 
  'AAPL',	'GOOGL',	'INTC',	'AXP','CRBP','MARA','V','BTC-USD',	'NFLX','SAVE','APPF',	'ACON',	'DHR','COIN',	'PYPL',	'BAH','IVP','ABNB',	'PBLA',	'GLXY.TO','RIOT','PFFV','VLD','RR','MC.PA',	'DXCM',	'KLAC',	'TELL',	'CL','FICO','COF',	'BITF'	]

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    // Filter suggestions based on input value
    const filteredSuggestions = allOptions.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
    );
    
    setSuggestions(filteredSuggestions);
};

const handleSuggestionClick = (selectedOption) => {
    setInputValue(selectedOption);
    sotiSearchText(selectedOption);
    setSuggestions([]); // Clear suggestions when an option is selected
  };

  return (
    <div>
      <label style={{color:"white", fontSize:"20px",fontStyle:"italic",fontWeight:"bold"}}>Search Companies: </label>
      <input type="text" style={{borderRadius: '5px'}}  value={inputValue} onChange={handleInputChange} />

      {/* Suggestions Dropdown */}
      <ul>
        {suggestions.map((option, index) => (
          <li style={{color:"white"}} key={index} onClick={() => handleSuggestionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
