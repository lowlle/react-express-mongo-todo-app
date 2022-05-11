import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const AppHeader = () => {
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        TODO APP
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    bgcolor: "background.paper",
                    pt: 8,
                    pb: 6,
                    mb: 5
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
