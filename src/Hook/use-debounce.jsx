import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  let [debounceValue, setDebounceValue] = useState("");

  const handelDebounce = () => {
    setDebounceValue(value);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      handelDebounce();
    }, [delay]);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debounceValue;
};

export default useDebounce;
