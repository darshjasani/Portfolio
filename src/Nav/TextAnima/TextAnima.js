import React from 'react'
import { useState, useEffect } from 'react';
import './TextAnima.css'
function TextAnima({ text, delay, infinite }) {
    const [prevText, setDisplayText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        let interval;

        const type = () => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        currentIndex++;

        if (currentIndex === text.length) {
            clearInterval(interval);
            currentIndex = -1;
            //setTimeout(erase, 1000);
            
        }
        };

        const erase = () => {
            setDisplayText((prevText) => prevText.slice(0,currentIndex));
            currentIndex++;
    
            if (-currentIndex === text.length) {
            clearInterval(interval);
            currentIndex = 0;
            setTimeout(type, 1000);
            }
        };

        interval = setInterval(type, 100);

        // Cleanup on component unmount
        return () => clearInterval(interval);
  }, [text]);


  return (
        <span>{prevText + "."}</span>
  )
}

export default TextAnima