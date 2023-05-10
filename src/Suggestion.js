import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

function Suggestion() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {

    const fetchSuggestions = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${inputValue}`);
      const data = await response.json();
      setSuggestions(data);
    };

    if (inputValue.length > 0) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);


  const handleSelectOption = (value) => {
    setInputValue(value?.title);
    setSuggestions([]);
  };


  return (
    <div style={{width:300, alignContent:'center'}}>
      <Form.Control
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ListGroup className="suggestions-list">
          {suggestions.slice(0, 5).map((option) => (
            <ListGroup.Item key={option.value} onClick={() => handleSelectOption(option)}>
              {option.title}
            </ListGroup.Item>
          ))}
        
        </ListGroup>
      )}
    </div>
  );
}

export default Suggestion;