import * as React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

const TableActions = (actions, data) => {
    if (actions && actions.length) {
        return (
            <TableCell>
                <Stack direction="row" spacing={2} justifyContent="center">
                    {actions.map((action, i) => (
                        <IconButton
                            key={i}
                            aria-label={action.name}
                            onClick={() => action.handler(data)}
                        >
                            {action.icon}
                        </IconButton>
                    ))}
                </Stack>
            </TableCell>
        );
    }
};

export default function DataTable({ rows, columns, actions }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="data-table">
                <TableHead>
                    <TableRow>
                        {columns.map(({ headerName, align, style }, i) => (
                            <TableCell
                                key={i}
                                align={align || "left"}
                                style={style}
                            >
                                {headerName}
                            </TableCell>
                        ))}
                        {actions && actions.length ? (
                            <TableCell
                                style={{ width: "15%", textAlign: "center" }}
                            >
                                Action
                            </TableCell>
                        ) : (
                            ""
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row._id || Math.random()}>
                            {columns.map(({ field, formatter }, i) => (
                                <React.Fragment key={i}>
                                    <TableCell>
                                        {formatter
                                            ? formatter(row[field])
                                            : row[field]}
                                    </TableCell>
                                </React.Fragment>
                            ))}
                            {TableActions(actions, row)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
