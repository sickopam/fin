import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
import './App.css';
import Main from './Pages/Main';
// import $ from 'jquery'

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2700)
  }, [])

  return (
    <div>
      {
        loading ?
        <div className='loadwrap text-3xl text-white text-3xl font-extralight'>
          <div className='loader'>
            <h1>naufal abiyyu</h1>
          </div>
          <div className='loader2'>
            <h1>cs ugm '21</h1>
          </div>
        </div>
        :
          <Main/>

      }
    </div>
  );
}

export default App;
