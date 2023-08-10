import React, {useEffect, useRef, useState} from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Input from "@mui/material/Input";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import InputAdornment from "@mui/material/InputAdornment";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import snippets from "./meta/config";

function IntroText() {
    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="h4" textAlign={"center"} gutterBottom>
                Code Snippets
            </Typography>
            <Typography variant="subtitle1" textAlign={"center"} gutterBottom>
                Here is the repository storing some code snippets in different languages.
            </Typography>
            <Typography variant="subtitle1" textAlign={"center"} gutterBottom>
                It shows some usages of the libraries, some code tricks and etc.
            </Typography>
            <Typography variant="subtitle1" textAlign={"center"} gutterBottom>
                Hope this helps you or inspires you.
            </Typography>
            <Typography variant="subtitle1" textAlign={"center"} gutterBottom>
                Link:{" "}
                <Link href={process.env.REACT_APP_DIRECT_LINK} underline="none">
                    {process.env.REACT_APP_DIRECT_LINK}
                </Link>
            </Typography>
        </Box>
    );
}

function Searchbar() {
    const [text, setText] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            console.log("search code in repository...");
        }
    };

    return (
        <Box
            sx={{
                mb: 6,
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Box
                sx={{
                    width: {
                        lg: 0.5,
                        md: 1,
                        sm: 1
                    }
                }}
            >
                <Input
                    fullWidth
                    placeholder="Search in repository"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchRoundedIcon />
                        </InputAdornment>
                    }
                    sx={{
                        pl: 0.5,
                        pb: 0.5,
                        pr: 2
                    }}
                    value={text}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </Box>
        </Box>
    );
}

function CodeSnippets() {
    return (
        <Box
            sx={{
                columnCount: {
                    lg: 3,
                    md: 2,
                    sm: 1
                },
                columnGap: 4
            }}
        >
            {snippets.map((snippet, index) => (
                <Card
                    sx={{
                        width: 1,
                        mb: 4
                    }}
                    key={index}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={snippet.media.alt}
                            src={snippet.media.src}
                            loading="lazy"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {snippet.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {snippet.desc}
                            </Typography>
                        </CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                width: 1,
                                px: 2,
                                pb: 2,
                                "& .MuiChip-root": {
                                    mr: 1
                                }
                            }}
                        >
                            {snippet.tags.map((tag, index) => (
                                <Chip size="small" label={tag} key={index} />
                            ))}
                        </Box>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}

/* Supported by https://tholman.com/github-corners */
function GithubCorner() {
    return (
        <Link
            href="https://github.com/ChenYuTong10/snippets"
            className="github-corner"
            aria-label="View source on GitHub"
        >
            <svg
                width="80"
                height="80"
                viewBox="0 0 250 250"
                style={{
                    fill: "#151513",
                    color: "#fff",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    border: 0
                }}
                aria-hidden="true"
            >
                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                <path
                    d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                    fill="currentColor"
                    style={{ transformOrigin: "130px 106px" }}
                    className="octo-arm"
                ></path>
                <path
                    d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                    fill="currentColor"
                    className="octo-body"
                ></path>
            </svg>
        </Link>
    );
}

function App() {
    return (
        <Container sx={{ py: 3 }}>
            {IntroText()}
            {Searchbar()}
            {CodeSnippets()}
            {GithubCorner()}
        </Container>
    );
}

export default App;
