import { useContext } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { ConfirmContext, SHOW_CONFIRM, HIDE_CONFIRM } from "../context/confirm-context"

let resolveCallback;
export const useConfirm = () => {
    const [confirmState, dispatch] = useContext(ConfirmContext);
    const onConfirm = () => {
        closeConfirm();
        resolveCallback(true);
    };

    const onCancel = () => {
        closeConfirm();
        resolveCallback(false);
    };
    const confirm = ({ title, message }) => {
        dispatch({
            type: SHOW_CONFIRM,
            payload: {
                title,
                message,
            },
        });
        return new Promise((res, rej) => {
            resolveCallback = res;
        });
    };

    const closeConfirm = () => {
        dispatch({
            type: HIDE_CONFIRM,
        });
    };

    return { confirm, onConfirm, onCancel, confirmState };
};

export const ConfirmDialog = () => {
    const { onConfirm, onCancel, confirmState } = useConfirm();

    return (
        <Dialog open={confirmState.show} onClose={onCancel}>
            <DialogTitle>{confirmState.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{confirmState.message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onConfirm} autoFocus>
                    Continue
                </Button>
                <Button onClick={onCancel}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
};
