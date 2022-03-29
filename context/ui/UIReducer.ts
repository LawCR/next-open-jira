import { UIState } from './';

type UIActionType = 
| {type: 'UI - Open Sidebar' }
| {type: 'UI - Close Sidebar' }
| {type: 'UI - Show Add Entry', payload: boolean }
| {type: 'UI - Start Dragging' }
| {type: 'UI - End Dragging' }
| {type: 'UI - Set Mode' }


export const UIReducer = (state: UIState, action: UIActionType): UIState => {
    switch (action.type) {
        case 'UI - Open Sidebar':
            return {
                ...state,
                sidemenuOpen: true
            }
        case 'UI - Close Sidebar':
            return {
                ...state,
                sidemenuOpen: false
            }
        case 'UI - Show Add Entry':
            return {
                ...state,
                isAdding: action.payload
            }
        case 'UI - Start Dragging':
            return {
                ...state,
                isDragging: true
            }
        case 'UI - End Dragging':
            return {
                ...state,
                isDragging: false
            }
        case 'UI - Set Mode':
            return {
                ...state,
                mode: !state.mode
            }

        default:
            return state;
    }
}
