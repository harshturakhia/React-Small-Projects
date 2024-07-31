import React, { useState, useCallback, useEffect } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '50px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px',
  margin: 'auto',
  marginTop: '50px',
  backgroundColor: '#eaf4f4',
};

const inputContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginBottom: '20px',
};

const inputStyle = {
  flex: '1',
  padding: '1rem',
  marginRight: '10px',
  border: '1px solid #b3e0ff',
  borderRadius: '4px',
  fontSize: '16px',
  textAlign: 'center',
  boxSizing: 'border-box',
  backgroundColor: '#ffffff',
  color: '#333',
};

const buttonStyle = {
  padding: '17px 25px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#66b3ff',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#3399ff',
};

const optionsContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Centers content horizontally
  width: '100%',
  flexWrap: 'wrap', // Allows wrapping if content overflows
  marginBottom: '20px',
};

const rangeContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '0 20px',
  fontSize: '24px', // Larger font size for the range label
};

const rangeStyle = {
  width: '200px', // Fixed width for the range input
  marginBottom: '10px',
};

const optionStyle = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '30px',
  fontSize: '24px', // Larger font size for checkboxes and labels
};

const checkboxStyle = {
  marginRight: '10px',
};

const PasswordGenerator = (props) => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [highlight, setHighlight] = useState(false);
  const [copyButton, setCopyButton] = useState('Copy');

  // As soon as the page load, we want to generate password automatically
  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += '!@#$%^&*()_+'
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  const handleCopy = () => {
    setCopyButton(() => 'Copied')

    navigator.clipboard.writeText(password).then(
      () => {
        console.log(`Copied Password : ${password}`);
      },
      (err) => {
        console.log(`Error : ${err}`);
      }
    );

    setTimeout(() => {
      setCopyButton(() => 'Copy')
    }, 2000)
  };

  return (
    <div style={containerStyle}>
      <div style={inputContainerStyle}>
        <input
          type="text"
          id='password'
          value={password}
          readOnly
          placeholder='Password'
          style={inputStyle}
        />
        <button
          style={buttonStyle} onClick={handleCopy}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
        >
          {copyButton}
        </button>
      </div>

      <div style={optionsContainerStyle}>
        <div style={rangeContainerStyle}>
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            style={rangeStyle}
          />
          Length: {length}
        </div>

        <div style={optionStyle}>
          <input
            type="checkbox"
            id="numbers"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            style={checkboxStyle}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>

        <div style={optionStyle}>
          <input
            type="checkbox"
            id="characters"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            style={checkboxStyle}
          />
          <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
