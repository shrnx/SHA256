import React from "react";
import { useState, useCallback, useEffect } from "react";
import SHA256 from "crypto-js/sha256";

function App() {
  const [hash, setHash] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const hashGenerator = useCallback((event) => {
    // const crypto = require('crypto');
    // //npm install crypto-js       to run this line

    // const finalHash = crypto.createHash('sha256').update(event.target.value).digest('hex');

    // const finalHash = SHA256(event.target.value).toString();  //used chatgpt here to get optimizations for no string
    const finalHash = event.target.value
      ? SHA256(event.target.value).toString()
      : ""; //if there is any value in input field then only show output
    //Ternary Operator
    setHash(finalHash);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if(darkMode) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [darkMode]);

  return (
      <div className="flex min-h-screen items-center content-center">
        <button className={`absolute top-4 right-4 bg-teal-500 rounded-3xl px-3 py-1 ${darkMode ? "text-white" : "text-black"}`} onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <div className="w-full max-w-3xl mx-auto my-auto shadow-md rounded-3xl bg-gray-700 px-4 py-6 text-purple-700">
          <h1 className="text-center text-white my-3 text-2xl">
            SHA256 Hash Generator
          </h1>
          <div className="grid grid-cols-1 gap-4">
            <h3 className="w-full max-w-full text-white text-center">Input</h3>
            <input
              type="text"
              placeholder="Enter here..."
              maxLength={80}
              aria-label="Input text to generate SHA256 hash"
              onChange={hashGenerator}
              className="shadow-lg rounded-2xl text-center h-20 sm:h-16 md:h-14 lg:h-12 text-lg text-wrap 
            focus:ring focus:ring-green-700 focus:ring-offset-2 focus:border-blue-500 focus:bg-teal-100" //used chatgpt for responsiveness data
            />
            <h3 className="w-full max-w-full text-white text-center mt-5">
              Output
            </h3>
            <input
              type="text"
              className="shadow-lg rounded-2xl text-center bg-white h-20 sm:h-16 md:h-14 lg:h-12 text-black text-lg"
              disabled
              placeholder="Hash output will appear here"
              value={hash}
            />
          </div>
        </div>
      </div>
  );
}

export default App;
