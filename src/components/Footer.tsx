import { Box, Typography } from "@mui/material";

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

export default Footer;
