import { Typography, Link } from "@mui/material";
import { useNavigate } from "react-router";

const NavLink = ({ to, text }: { to: string; text: string }) => {
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault(); // Prevent default <a> tag behavior
    navigate(to);
  };

  return (
    <Link
      style={{ marginRight: "10px", textDecoration: "none", cursor: "pointer" }}
      color="inherit"
      onClick={handleClick}
    >
      <Typography variant="body1">{text}</Typography>
    </Link>
  );
};
export default NavLink;
