import { CardActionArea, CardMedia } from "@mui/material";

import { Card } from "@mui/material";

const Carousel = (cards) => {
  return (
    <div>
      {cards.map((card) => (
        <Card>
          <CardMedia></CardMedia>
        </Card>
      ))}
    </div>
  );
};
export default Carousel;
