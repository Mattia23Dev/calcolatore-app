import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}
export function formatNumber(num) {
    return new Intl.NumberFormat('it-IT').format(num);
}
export function AppProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [answers, setAnswers] = useState([{
    answer: '',
    increment: 0,
  }]);

  const handleAnswer = (cost, percent, newAnswer) => {
    let newIncrement;
    if (currentStep === 1 || currentStep === 2){
        newIncrement = cost;
        const newTotal = totalCost + cost;
        setTotalCost(newTotal);
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);   
        setAnswers([...answers, { answer: newAnswer, increment: newIncrement }]);    
    } else {
        if (percent !== 0){
            const newPercent = totalCost * percent;
            const newTotal = totalCost + newPercent;
            newIncrement = newPercent;
            setTotalCost(newTotal);
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep)
            setAnswers([...answers, { answer: newAnswer, increment: newIncrement }]); 
        } else {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            newIncrement = 0;
            setAnswers([...answers, { answer: newAnswer, increment: newIncrement }]);
        }
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      if (answers.length > 0) {
        const lastAnswer = answers.pop();
  
        const newTotal = totalCost - lastAnswer.increment;
        setTotalCost(newTotal);
  
        setAnswers([...answers]);
      }
  
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRicomincia = () => {
    setAnswers([])
    setCurrentStep(0)
  }

  return (
    <AppContext.Provider value={{ currentStep, totalCost, answers, handleRicomincia, handleAnswer, goBack, setCurrentStep }}>
      {children}
    </AppContext.Provider>
  );
}
