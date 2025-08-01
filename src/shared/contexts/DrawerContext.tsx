import React, {createContext, useCallback, useContext, useState,} from 'react';

interface IDrawerOption {
  icon: string;
  path: string;
  label: string;
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOption[];
  toggleDrawerOpen: () => void;
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

interface IAppDrawerProviderProps {
  children: React.ReactNode
}

export const DrawerProvider: React.FC<IAppDrawerProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen
    );
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[])=>{
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions ,toggleDrawerOpen, setDrawerOptions:handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};
