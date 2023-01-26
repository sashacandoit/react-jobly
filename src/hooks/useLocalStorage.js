import { useState, useEffect } from "react";

const useLocalStorage = (key, firstValue = null) => {
  const INITIAL_VAL = localStorage.getItem(key) || firstValue;

  const [localItem, setLocalItem] = useState(INITIAL_VAL);

  useEffect(function setKeyLocalStorage() {
    if (localItem === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, localItem)
    }
  }, [key, localItem]);

  return [localItem, setLocalItem];
}

export default useLocalStorage;