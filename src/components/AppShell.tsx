import React, { ReactNode } from "react";
import ToolBar from "./ToolBar";
import Footer from "./Footer";
interface AppShellProps {
  children: ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <ToolBar />
      <div
        style={{
          flexGrow: 1,
          overflowY: "auto",
          display: "flex", // Add flexbox to the main container
          justifyContent: "center", // Center the child horizontally
        }}
      >
        <div style={{ flex: 1 }}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AppShell;
