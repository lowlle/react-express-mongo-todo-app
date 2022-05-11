import { useContext } from "react";

import { DialogContext, SHOW_DIALOG, HIDE_DIALOG } from "../context/dialog-context"

let resolveCallback;
export const useDialog = () => {
    const [dialogState, dispatch] = useContext(DialogContext);
    const onSubmit = () => {
        closeDialog();
        resolveCallback(true);
    };

    const onCancel = () => {
        closeDialog();
        resolveCallback(false);
    };
    const confirm = ({ title, message }) => {
        dispatch({
            type: SHOW_DIALOG,
            payload: {
                title,
                message,
                type: "confirm"
            },
        });
        return new Promise((res, rej) => {
            resolveCallback = res;
        });
    };

    const showDialog = (payload) => {
        dispatch({
            type: SHOW_DIALOG,
            payload
        });
        resolveCallback = () => {}
    };

    const closeDialog = () => {
        dispatch({
            type: HIDE_DIALOG,
        });
    };

    return { showDialog, confirm, onSubmit, onCancel, dialogState };
};
