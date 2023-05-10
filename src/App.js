import logo from './logo.svg';
import './App.css';
import { useState, useEffect  } from 'react';
import Suggestion from './Suggestion';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Make an API call to fetch suggestions based on the current input value
    // Replace this with your own implementation to fetch suggestions
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
  return (
    <div className="App">  
      {/* <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>{suggestion.title}</li>
        ))}
      </ul> */}

      <Suggestion />
      dfsasfd
    </div>
  );
}

export default App;
