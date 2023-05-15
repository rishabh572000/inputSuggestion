import React, { useState, useEffect, useRef } from 'react';
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
  const [isShow, setIsShow] = useState(false)

  const myref = useRef()
  const data=[
    {
      _id:1,
      title:'Lorem sdfa dfsa fdsa dfsa'
    },
    {
      _id:2,
      title:'ram ge dsf dsfa dsa dfsa'
    },
    {
      _id:3,
      title:'qsa fdsa fdas fsa fdsa dfsa'
    },
    {
      _id:4,
      title:'fsaeff fsa fs dfsa fdsa dfsa'
    },
    {
      _id:5,
      title:'dfsa fdsa dfsa'
    }
  ]

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        myref.current &&
        !myref.current.contains(event.target)
      ) {
        // Clicked outside the inner div, call onBlur function
        inputBlur();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);


  const handleSelectOption = (value) => {
    setInputValue(value?.title);
    setSuggestions([])
  };

  const inputFocus = () =>{
    setIsShow(true)
    setSuggestions(data)
  }
  const inputBlur = (e) =>{
    setIsShow(false)
    setSuggestions([])
  }
  
  return (
    <div style={{width:300, alignContent:'center'}} ref={myref}>
      <Form.Control
        type="text"
        placeholder="Type something..."
        onFocus={inputFocus}
        // onBlur={inputBlur}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {isShow && (
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