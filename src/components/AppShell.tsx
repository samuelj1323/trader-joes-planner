import React, { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import ToolBar from "./ToolBar";
import Footer from "./Footer";
interface AppShellProps {
  children: ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
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
