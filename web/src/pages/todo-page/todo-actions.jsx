import { useDeleteTaskMutation } from "../../store/slices/task-slice";
import { useDialog } from "../../hooks/dialog-hooks";
import { useSnackbar } from "../../hooks/snackbar-hooks";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import TodoForm from "./todo-form";

const TodoActions = () => {
    const { showDialog, confirm, onSubmit, onCancel } = useDialog();
    const { showSnackbar } = useSnackbar();
    const [deleteTask, _] = useDeleteTaskMutation();

    return {
        actions: [
            {
                name: "Edit",
                icon: <EditIcon />,
                handler: (value) => {
                    showDialog({
                        title: "Edit Task",
                        children: (
                            <TodoForm
                                data={value}
                                onSubmit={onSubmit}
                                onCancel={onCancel}
                            />
                        ),
                    });
                },
            },
            {
                name: "Delete",
                icon: <DeleteIcon />,
                handler: async ({ _id }) => {
                    const isConfirmed = await confirm({
                        message: "Are you sure you want to proceed?",
                    });
                    if (isConfirmed)
                        deleteTask(_id).then(() => {
                            showSnackbar({
                                message: "Task removed",
                                severity: "success",
                            });
                        });
                },
            },
        ],
    };
};

export default TodoActions;
