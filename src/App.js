import React, { useEffect, useRef, useState } from 'react'
import Form from './components/Header/Form';
import Color from './components/List/Color';
import './App.css'

// Values.js
import Values from 'values.js';

function App() {
  const [list, setList] = useState(new Values('#2e2e2e').all(10));
  const [input, setInput] = useState('');
  const [alert, setAlert] = useState({show: false, msg: '', type: ''})
  const inputRef = useRef();
  
  useEffect(() => {
    inputRef.current.focus();
  },[])

  useEffect(() => {
    const timeout = setTimeout(() => {
      return alertHandler();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert])

  // Submit function
  const submitHandler = (e) => {
    e.preventDefault()
    try {
      if(!input) {
        alertHandler(true, 'Please input value', 'danger')
      }else {
        const color = new Values(input).all(10);
        setList(color)
        alertHandler(true, 'Color generated successfully', 'success')
      }
    } catch (error) {
      alertHandler(true, `Invalid color`, 'danger')
      console.log('Submit: ' + error);
    }
  }

  // Alert function
  const alertHandler = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type })
  }

  return (
    <main>
      <Form input={input} setInput={setInput} submitHandler={submitHandler} alert={alert} inputRef={inputRef}/>
      {/* Color List */}
      <section className="colorlist-container">
        {/* map */}
        {list.map((item, index) => {
          const hexColor = item.hex;
          return (      
              <Color key={index} {...item} hexColor={hexColor} index={index}/>    
          )
        })}
     
      </section>
    </main>
  );
}

export default App;
