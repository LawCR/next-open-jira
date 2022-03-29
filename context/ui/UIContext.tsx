import { Theme } from '@mui/material';
import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean;
    isAdding: boolean;
    isDragging: boolean,
    mode: boolean, 
    
    openSideMenu: () => void;
    closeSideMenu: () => void;

    setIsAddingEntry: (value: boolean) => void;
    
    startDragging: () => void;
    endDragging: () => void
    setMode: () => void
}


export const UIContext = createContext({} as ContextProps)
