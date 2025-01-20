import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LandingPage = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
        height: "100%",
      }}
    >
      <Typography variant="h3">Landing page</Typography>
      <div>
        <Typography variant="body1">Some content here</Typography>
      </div>
    </div>
  );
};

export default LandingPage;
