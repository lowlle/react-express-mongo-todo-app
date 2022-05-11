import { createContext, useReducer } from "react";

export const DialogContext = createContext();

export const SHOW_DIALOG = "SHOW_DIALOG";
export const HIDE_DIALOG = "HIDE_DIALOG";

const initialState = {
    show: false,
    title: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_DIALOG:
            return {
                ...initialState,
                ...action.payload,
                show: true,
            };
        case HIDE_DIALOG:
            return initialState;
        default:
            return initialState;
    }
};

export const DialogContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DialogContext.Provider value={[state, dispatch]}>
            {children}
        </DialogContext.Provider>
    );
};
