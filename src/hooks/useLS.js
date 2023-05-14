// import { useEffect, useState } from "react"

// function getSavedValue(key, defaultValue) {
//   const savedValue = localStorage.getItem(key)
//   return savedValue || defaultValue
// }

// export function useLocalStorage(key, initialValue) {
//   const [value, setValue] = useState(getSavedValue(key, initialValue))
//   useEffect(() => localStorage.setItem(key, value), [key, value])
//   return [value, setValue]
// }

import { useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};