import { useDateHumanize } from "../../hooks/date-hooks";

export const columns = [
    { field: "task", headerName: "Task", style: { width: "auto" } },
    {
        field: "date_schedule",
        headerName: "Date Schedule",
        style: { width: "15%" },
        formatter: (value) => useDateHumanize(value),
    },
];
