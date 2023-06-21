import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setHistory(prevHistory => replace
      ? [...prevHistory.slice(0, prevHistory.length - 1), newMode]
      : [...prevHistory, newMode]
    );
  }
  function back() {
    setHistory(prev => prev.length > 1 ? [...prev.slice(0, prev.length - 1)] : prev);
  }

  return { mode: history[history.length - 1], transition, back };
}