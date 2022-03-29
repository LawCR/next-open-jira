import { Theme } from '@mui/material';
import { FC, useReducer } from 'react';
import { darkTheme } from '../../themes';
import { UIContext, UIReducer } from './';

export interface UIState {
    sidemenuOpen: boolean;
    isAdding: boolean;
    isDragging: boolean,
    mode: boolean, 
}


const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAdding: false,
    isDragging: false,
    mode: true
}


export const UIProvider: FC = ({children}) => {

    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)

    const openSideMenu = () => dispatch({type: 'UI - Open Sidebar'})
    
    const closeSideMenu = () => dispatch({type: 'UI - Close Sidebar'})

    const setIsAddingEntry = (value: boolean) => dispatch({type: 'UI - Show Add Entry', payload: value})
    
    const startDragging = () => dispatch({type: 'UI - Start Dragging'})

    const endDragging = () => dispatch({type: 'UI - End Dragging'})

    const setMode = () => dispatch({type: 'UI - Set Mode'})

    return (
        <UIContext.Provider value={{
            ...state,

            //Methods
            openSideMenu,
            closeSideMenu,

            setIsAddingEntry,
            
            startDragging,
            endDragging,
            setMode
        }}>
            { children }
        </UIContext.Provider>
    )
}
