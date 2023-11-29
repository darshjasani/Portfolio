import React from 'react'
import { useState, useEffect } from 'react';
import './TextAnima.css'
function TextAnima({ text, delay, infinite }) {
    const [prevText, setDisplayText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        let interval;

        const type = () => {
            console.log("type : " + currentIndex);
            setDisplayText(prevText => text.slice(0,currentIndex));
            ++currentIndex;

            if (currentIndex === text.length+1) {
                clearInterval(interval);
                currentIndex = -1;
                interval = setInterval(erase, 300);
                
            }
        };

        const erase = () => {
            console.log("erase :" + currentIndex)
            setDisplayText(prevText => text.slice(0,currentIndex));
            --currentIndex;
    
            if (currentIndex + text.length === 0) {
                clearInterval(interval);
                currentIndex = 0;
                interval = setInterval(type, 350);
            }
        };

        interval = setInterval(type, 350);

        // Cleanup on component unmount
        return () => clearInterval(interval);
  }, [text]);


  return (
        <div>{prevText + "."}</div>
  )
}

export default TextAnima