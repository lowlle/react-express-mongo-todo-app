import { useDialog } from "../hooks/dialog-hooks";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AppModal = ({ open, title, children, onCancel }) => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        maxWidth: 400,
        bgcolor: "background.paper",
        // boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    return (
        <Modal open={open} onClose={onCancel}>
            <Box sx={style}>
                <h2>{title}</h2>
                {children}
            </Box>
        </Modal>
    );
};

const ConfirmDialog = ({ open, title, message, onSubmit, onCancel }) => {
    return (
        <Dialog open={open} onClose={onCancel}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onSubmit} autoFocus>
                    Continue
                </Button>
                <Button onClick={onCancel}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

const AppDialog = () => {
    const { onSubmit, onCancel, dialogState } = useDialog();
    const {
        type,
        show,
        title,
        message,
        children
    } = dialogState
    return (
        <>
            {type === "confirm" ? (
                <ConfirmDialog
                    open={show}
                    title={title}
                    message={message}
                    onSubmit={onSubmit}
                    onCancel={onCancel}
                />
            ) : (
                <AppModal
                    open={show}
                    title={title}
                    onCancel={onCancel}
                >
                    {children}
                </AppModal>
            )}
        </>
    );
};

export default AppDialog;
