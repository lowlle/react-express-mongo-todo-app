import { useEffect, useState } from "react";
import { useFetchTasksQuery } from "../../store/slices/task-slice";

import { useDialog } from "../../hooks/dialog-hooks";
import { DateModule } from "../../hooks/date-hooks";

import TodoForm from "./todo-form";
import { columns } from "./columns";
import useTodoActions from "./todo-actions";

import DataTable from "../../components/DataTable";
import PageSpinner from "../../components/PageSpinner";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateTodo = () => {
    const { showDialog, onSubmit, onCancel } = useDialog();
    const initialState = {
        _id: "",
        task: "",
        date_schedule: DateModule(),
    };
    const handleAddTask = () => {
        showDialog({
            title: "Add New Task",
            children: (
                <TodoForm
                    data={initialState}
                    onSubmit={onSubmit}
                    onCancel={onCancel}
                />
            ),
        });
    };
    return (
        <Box
            sx={{
                pb: 3,
                textAlign: "right",
            }}
        >
            <Button
                startIcon={<AddIcon />}
                variant="contained"
                onClick={handleAddTask}
            >
                {" "}
                Add New Task
            </Button>
        </Box>
    );
};

function TodoPage({}) {
    const [tasks, setTasks] = useState([]);
    const { data = [], isFetching } = useFetchTasksQuery();

    const { actions } = useTodoActions();

    useEffect(() => {
        setTasks(data);
    }, [isFetching]);

    return (
        <Container maxWidth="md">
            {isFetching ? (
                <PageSpinner />
            ) : (
                <Box sx={{ pb: 5 }}>
                    <CreateTodo />
                    <DataTable
                        columns={columns}
                        rows={tasks}
                        actions={actions}
                    />
                </Box>
            )}
        </Container>
    );
}

export default TodoPage;
