import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

function GoogleSearch() {
  const [suggestionData, setSuggestionData] = useState([]);
  const [cache, setCache] = useState({});
  const [inputText, setInputText] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
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
          cache[inputText] = data[1];
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
  return (
    <>
      <div className='mx-auto flex flex-col gap-20  w-1/2 my-10 h-screen'>
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
    </>
  );
}

export default GoogleSearch;
