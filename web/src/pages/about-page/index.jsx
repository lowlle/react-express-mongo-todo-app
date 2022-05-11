import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Stack } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutPage = () => {
    return (
        <Stack direction="row" spacing={1} justifyContent="center">
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }}>
                            L
                        </Avatar>
                    }
                    title="Lowell Ed Llames"
                    subheader="Developer and student of the game"
                />
                <CardMedia
                    component="img"
                    height="200"
                    image="https://drive.google.com/uc?id=18aArV5dBTRFKSiCbRV1K4ENU8rb3cQWt"
                    alt="Lowell Ed Llames"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        I am currently a Full Stack Engineer and also a student
                        who is exploring different libraries and frameworkds to
                        improve my technical skills.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton onClick={(e) => window.open("https://www.linkedin.com/in/lowell-ed-llames")}>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton onClick={(e) => window.open("https://github.com/lowlle")}>
                        <GitHubIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Stack>
    );
};

export default AboutPage;
