import React, { createContext, useContext, useEffect, useState } from "react";

type State = {
  highContrast: boolean;
  largeText: boolean;
  reduceMotion: boolean;
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleReduceMotion: () => void;
};

const defaultState: State = {
  highContrast: false,
  largeText: false,
  reduceMotion: false,
  toggleHighContrast: () => {},
  toggleLargeText: () => {},
  toggleReduceMotion: () => {},
};

const AccessibilityContext = createContext<State>(defaultState);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [highContrast, setHighContrast] = useState<boolean>(() => localStorage.getItem("highContrast")==="true");
  const [largeText, setLargeText] = useState<boolean>(() => localStorage.getItem("largeText")==="true");
  const [reduceMotion, setReduceMotion] = useState<boolean>(() => localStorage.getItem("reduceMotion")==="true");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("high-contrast", highContrast);
    root.classList.toggle("large-font", largeText);
    root.classList.toggle("reduce-motion", reduceMotion);
    localStorage.setItem("highContrast", String(highContrast));
    localStorage.setItem("largeText", String(largeText));
    localStorage.setItem("reduceMotion", String(reduceMotion));
  }, [highContrast, largeText, reduceMotion]);

  const value: State = {
    highContrast,
    largeText,
    reduceMotion,
    toggleHighContrast: () => setHighContrast(prev => !prev),
    toggleLargeText: () => setLargeText(prev => !prev),
    toggleReduceMotion: () => setReduceMotion(prev => !prev),
  };

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
};

export const useAccessibility = () => useContext(AccessibilityContext);
