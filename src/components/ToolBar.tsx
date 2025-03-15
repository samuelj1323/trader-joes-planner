import { AppBar, Toolbar, Typography } from "@mui/material";
import NavLink from "../components/NavLink"; // Import the NavLink component

const ToolBar = () => {
  return (
    <AppBar
      position="sticky"
      style={{
        boxShadow: "none",
        width: "100%",
        backgroundColor: "tan",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Trader Joes's Planner
        </Typography>
        <NavLink to="/" text="Home" />
        <NavLink to="/about" text="About" />
        <NavLink to="/cart" text="Cart" />
      </Toolbar>
    </AppBar>
  );
};

export default ToolBar;
