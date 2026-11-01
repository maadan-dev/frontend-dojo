import React, { createContext, useContext, useState } from 'react';

/**
 * Master Solution: Drill 02 — Global State with Context API & Custom Provider
 */

const AgentConfigContext = createContext(null);

export function AgentConfigProvider({
  children,
  initialModel = 'gemini-3.8-flash',
  initialTemp = 0.7,
}) {
  const [model, setModel] = useState(initialModel);
  const [temperature, setTemperature] = useState(initialTemp);

  const value = {
    model,
    setModel,
    temperature,
    setTemperature,
  };

  return (
    <AgentConfigContext.Provider value={value}>
      {children}
    </AgentConfigContext.Provider>
  );
}

export function useAgentConfig() {
  const context = useContext(AgentConfigContext);
  if (!context) {
    throw new Error('useAgentConfig must be used within an AgentConfigProvider');
  }
  return context;
}
