import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalization } from '@/hooks/useLocalization';

const LocalizationContext = createContext<ReturnType<typeof useLocalization> | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const localization = useLocalization();

  return (
    <LocalizationContext.Provider value={localization}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalizationContext = () => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalizationContext must be used within a LocalizationProvider');
  }
  return context;
}; 