import React, { useState } from "react";
import { useCreateTaskMutation } from "../../store/slices/task-slice";
import { useSnackbar } from "../../hooks/snackbar-hooks";

import TextField from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const TodoForm = ({ data, onSubmit, onCancel }) => {
    const { showSnackbar } = useSnackbar();
    const [createTask, _] = useCreateTaskMutation();

    const [id, setId] = useState(data._id)
    const [task, setTask] = useState(data.task);
    const [dateSchedule, setDateSchedule] = useState(data.date_schedule);
    const handleSubmit = () => {

        createTask({
            _id: id,
            task,
            date_schedule: dateSchedule,
        })
            .then(() =>
                showSnackbar({
                    message: "Saved",
                    severity: "success",
                })
            )
            .then(onSubmit);
    };
    return (
        <Stack spacing={2}>
            <TextField
                label="Task"
                multiline
                rows={4}
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <DateTimePicker
                label="Schedule"
                value={dateSchedule}
                onChange={(e) => setDateSchedule(e.format())}
                renderInput={(params) => <TextField {...params} />}
            />
            <Stack direction="row" spacing={2}>
                <Button
                    onClick={handleSubmit}
                    autoFocus
                >
                    Continue
                </Button>
                <Button onClick={onCancel}>Cancel</Button>
            </Stack>
        </Stack>
    );
};

export default TodoForm;
