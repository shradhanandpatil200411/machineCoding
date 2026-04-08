import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Throttle = (fn, delay) => {
  let lastCall = 0;
  return function (...arg) {
    let now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    fn(...arg);
  };
};

function GoogleSearch() {
  const [suggestionData, setSuggestionData] = useState([]);
  const [cache, setCache] = useState({});
  const [inputText, setInputText] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchSearchSuggestion = async () => {
      if (cache[inputText]) {
        setSuggestionData(cache[inputText]);
      } else {
        try {
          const response = await fetch(
            "https://www.google.com/complete/search?client=firefox&q=" +
              inputText,
          );
          const data = await response.json();
          setCache((prev) => ({ ...prev, [inputText]: data[1] }));

          setSuggestionData(data[1]);
        } catch {
          console.log("Something wrong");
        }
      }
    };
    const st = setTimeout(() => {
      fetchSearchSuggestion();
    }, 300);
    return () => {
      clearTimeout(st);
    };
  }, [inputText]);

  const sendMessage = (mes) => {
    console.log(mes);
    setChatMessages((prev) => [...prev, mes]);
    setMessage("");
  };

  const handelMessageDelay = useRef(Throttle((mes) => sendMessage(mes), 1000));

  return (
    <>
      <div className='mx-auto flex flex-col gap-20 w-1/2 my-10 h-screen'>
        <div className='text-center'>
          <h1 className='text-9xl font-bold'>Google</h1>
        </div>
        <div className='w-full '>
          <div className='flex items-center mx-auto w-full  justify-center'>
            <input
              type='text'
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              className='border border-gray-500 w-10/12 py-2 px-4 rounded-l-full outline-none bg-gray-700'
            />
            <CiSearch className='text-3xl px-2 cursor-pointer border-gray-500 w-10 h-10 rounded-r-full border bg-gray-700' />
          </div>
          {suggestionData.length > 0 && showSuggestion && (
            <ul className='border border-gray-500 bg-gray-700 -rounded-t-2xl rounded-b-2xl w-10/12 mx-auto'>
              {suggestionData.map((suggestion, index) => (
                <li
                  className='text-lg font-semibold cursor-pointer hover:bg-gray-600 px-2'
                  key={index}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className='mx-auto w-1/2  h-screen text-center'>
        <h1 className='text-9xl font-bold '>Throttle</h1>
        {chatMessages.length > 0 && (
          <div className='mt-10 border flex gap-2 text-left p-10 '>
            {chatMessages?.map((message, index) => {
              return (
                <div
                  className='mt-2 p-2 rounded-2xl w-fit bg-gray-700'
                  key={index}>
                  <h1>{message}</h1>
                </div>
              );
            })}
          </div>
        )}
        <form className='w-full mt-10'>
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='border border-gray-500 w-10/12 py-2 px-4 rounded-full outline-none bg-gray-700'
          />
          <button
            className='bg-gray-700 rounded-2xl text-white font-semibold px-4 py-2 mx-2'
            onClick={(e) => {
              e.preventDefault();
              handelMessageDelay.current(message);
            }}>
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default GoogleSearch;
