import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}
export function formatNumber(num) {
    return new Intl.NumberFormat('it-IT').format(num.toFixed(0));
}
export function AppProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [leadData, setLeadData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    projectSummary: "",
    accept: false,
  });
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (cost, percent, newAnswer) => {
    let newIncrement;
    let newTotal;
    const nextStep = currentStep + 1;

    if (currentStep === 1 || currentStep === 2) {
      newIncrement = cost;
      newTotal = totalCost + cost;
    } else {
      if (percent !== 0) {
        newIncrement = totalCost * percent;
        newTotal = totalCost + newIncrement;
      } else {
        newIncrement = 0;
        newTotal = totalCost;
      }
    }

    setTotalCost(newTotal);

    // Aggiorna la risposta esistente o aggiungine una nuova
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep - 1] = { answer: newAnswer, increment: newIncrement };
    setAnswers(updatedAnswers);

    setCurrentStep(nextStep);
  };

  const goBack = () => {
    if (currentStep > 1) {
      const previousStep = currentStep - 1;
      setCurrentStep(previousStep);

      // Rimuovi l'ultima risposta se si torna indietro
      const updatedAnswers = answers.slice(0, previousStep - 1);
      setAnswers(updatedAnswers);
    }
  };

  const handleRicomincia = () => {
    setAnswers([]);
    setCurrentStep(0);
    setTotalCost(0);
  };

  return (
    <AppContext.Provider value={{ currentStep, totalCost, answers, leadData, setLeadData, handleRicomincia, handleAnswer, goBack, setCurrentStep }}>
      {children}
    </AppContext.Provider>
  );
}
