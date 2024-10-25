import React, { createContext, useState } from "react";

type FormContextType = {
  name: string;
  updateName: (name: string) => void;
  email: string;
  updateEmail: (email: string) => void;
  phoneNumber: string;
  updatePhoneNumber: (phoneNumber: string) => void;
  scores: { [question: string]: number };
  setScore: (question: string, score: number) => void;
};

export const FormContext = createContext<FormContextType>({
  name: "",
  updateName: () => {},
  email: "",
  updateEmail: () => {},
  phoneNumber: "",
  updatePhoneNumber: () => {},
  scores: {},
  setScore: () => {},
});

interface ScoreProviderProps {
  children: React.ReactNode;
}

export const ScoreProvider: React.FC<ScoreProviderProps> = ({ children }) => {
  const [scores, setScores] = useState<{ [question: string]: number }>({});
  const [name, setName] = useState<string>(localStorage.getItem("name") || "");
  const [email, setEmail] = useState<string>(localStorage.getItem("email") || "");
  const [phoneNumber, setPhoneNumber] = useState<string>(localStorage.getItem("phoneNumber") || "");

  const updateName = (name: string) => {
    setName(name);
  };

  const updatePhoneNumber = (phoneNumber: string) => {
    const value = phoneNumber.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  const updateEmail = (email: string) => {
    setEmail(email);
  };

  const setScore = (question: string, score: number) => {
    setScores((prevScores) => ({
      ...prevScores,
      [question]: score,
    }));
  };

  return (
    <FormContext.Provider
      value={{
        scores,
        setScore,
        name,
        updateName,
        email,
        updateEmail,
        phoneNumber,
        updatePhoneNumber,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
