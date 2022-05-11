import { useDeleteTaskMutation } from "../../store/slices/task-slice";
import { useDialog } from "../../hooks/dialog-hooks";
import { useSnackbar } from "../../hooks/snackbar-hooks";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
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
                icon: <ThumbUpIcon />,
                handler: async ({ _id }) => {
                    const isConfirmed = await confirm({
                        title: "Task completed?",
                        message: "This will remove the task. Are you sure you want to proceed?",
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
