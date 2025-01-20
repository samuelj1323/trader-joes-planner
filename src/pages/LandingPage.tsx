import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LandingPage = () => {
  const theme = useTheme();
  // TODO Landing page needs to be like exploring the store, adding items to cart.
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
