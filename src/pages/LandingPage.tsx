import { TextField, Typography, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

const LandingPage = () => {
  const theme = useTheme();

  // TODO Landing page needs to be like exploring the store, adding items to cart.
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: theme.palette.background.paper,
        padding: 10,
      }}
    >
      <div>
        <TextField
          style={{ width: "100%" }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          label="Search"
        />
        <Typography variant="body1">Some content here</Typography>
      </div>
    </div>
  );
};

export default LandingPage;
