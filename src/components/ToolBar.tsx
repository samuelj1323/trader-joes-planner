import { AppBar, Toolbar, Typography, Link } from "@mui/material";

const ToolBar = () => {
  const CustomLink = ({ href, text }: { href: string; text: string }) => (
    <Link
      style={{ marginRight: "10px", textDecoration: "none" }}
      color="inherit"
      href={href}
    >
      <Typography variant="body1">{text}</Typography>
    </Link>
  );
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
        <CustomLink href="/" text="Home" />
        <CustomLink href="/about" text="About" />
        <CustomLink href="/cart" text="Cart" />
      </Toolbar>
    </AppBar>
  );
};

export default ToolBar;
