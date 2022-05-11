import { createContext, useReducer } from "react";

export const ConfirmContext = createContext();

export const SHOW_CONFIRM = "SHOW_CONFIRM";
export const HIDE_CONFIRM = "HIDE_CONFIRM";

const initialState = {
    show: false,
    title: "Alert!",
    message: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CONFIRM:
            const { title, message } = action.payload;
            return {
                show: true,
                title: title ? title : initialState.title,
                message: message,
            };
        case HIDE_CONFIRM:
            return initialState;
        default:
            return initialState;
    }
};

export const ConfirmContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ConfirmContext.Provider value={[state, dispatch]}>
            {children}
        </ConfirmContext.Provider>
    );
};
