import { createContext, useState } from "react";

interface History {
  history: string[];
  setHistory: (value: string[]) => void;
}

interface HistoryContextProps {
  children: React.ReactNode;
}

export const HistoryContext = createContext({} as History);

export const HistoryContextProvider = ({ children }: HistoryContextProps) => {
  const [history, setHistory] = useState<string[]>([]);

  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
