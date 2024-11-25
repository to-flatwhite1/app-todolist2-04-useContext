"use client";

import { createContext, useContext } from "react";

const themes = {
  light: {
    background: "bg-white",
    text: "text-black",
    btn: 'bg-gray-800',
    input: 'bg-gray-800',
    white: 'white',
    black: 'gray-800',
  },
  dark: {
    background: "bg-gray-800",
    text: "text-white",
    btn: 'bg-gray-200',
  },
}

// 생성
const ThemeContext = createContext(themes.light)

// 공급
export const ThemeProvider = ({children}) => {
  return (
    <ThemeContext.Provider value={themes.light}>
      {children}
    </ThemeContext.Provider>
  )
}

// 사용
export const useTheme = () => {
  return useContext(ThemeContext)
}