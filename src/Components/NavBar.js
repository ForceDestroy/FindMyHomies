// React Imports
import * as React from "react";
import { Link } from "react-router-dom";

// MUI Imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { ThemeProvider } from "@mui/material/styles";

// Local Imports
import { RESOURCES } from "../Assets/Resources";
import { THEMESOURCE } from "../Assets/ThemeSource";

export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={THEMESOURCE}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <PeopleOutlineIcon />
            </IconButton>
            <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "row" }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography variant="h6" color="secondary" sx={{ flexGrow: 1 }}>
                  Home
                </Typography>
              </Link>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
              <Button color="inherit">Login</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
