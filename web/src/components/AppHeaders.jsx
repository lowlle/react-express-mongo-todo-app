import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

const AppHeader = () => {
    const navigate = useNavigate();

    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            color="inherit"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            TODO APP
                        </Typography>
                    </Box>
                    <Button color="inherit" onClick={() => navigate("/about")}>
                        About
                    </Button>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    bgcolor: "background.paper",
                    pt: 8,
                    pb: 6,
                    mb: 5,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        To Do App using React
                    </Typography>
                    <Typography
                        variant="p"
                        align="center"
                        color="text.secondary"
                        paragraph
                    >
                        This is created using the following stack
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center">
                        <Chip label="ReactJS" />
                        <Chip label="Redux" />
                        <Chip label="Express.js" />
                        <Chip label="MongoDB" />
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default AppHeader;
