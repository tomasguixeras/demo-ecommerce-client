import { useState } from "react";

export default function useLocalStorage(key: string, initValue?: any) {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initValue;
    } catch (error) {
      console.log(error);
    }
  });

  const setValue = (value: any) => {
    try {
      setStorageValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  return [storageValue, setValue];
}
