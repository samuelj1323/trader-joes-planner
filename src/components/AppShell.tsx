import React, { ReactNode } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Link,
} from "@mui/material";

interface AppShellProps {
  children: ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const ToolBar = () => (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Trader Joes's Planner
        </Typography>
        <Link style={{ marginRight: "10px" }} color="inherit" href="#">
          <Typography variant="body1">Home</Typography>
        </Link>
        <Link color="inherit" href="#">
          <Typography variant="body1">About</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );

  const Footer = () => (
    <Box
      component="footer"
      sx={{
        p: 2,
        mt: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <ToolBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          overflowY: "auto",
          display: "flex", // Add flexbox to the main container
          justifyContent: "center", // Center the child horizontally
        }}
      >
        <Container maxWidth="lg" sx={{ flex: 1 }}>
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default AppShell;
