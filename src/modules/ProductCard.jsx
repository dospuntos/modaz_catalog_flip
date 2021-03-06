import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import VariantsDropdown from "./VariantsDropdown";
import AddToCartButton from "./AddToCartButton";

const useStyles = makeStyles({
  /* root: {
    maxWidth: 345,
  }, */
  media: {
    height: 290,
  },
});

export default function ProductCard({ item }) {
  const classes = useStyles();
  // Default image
  let img = process.env.REACT_APP_PROD_IMG_URL + "default.png";
  // Set image from product if available
  if (typeof item.images[0] !== "undefined") {
    img = process.env.REACT_APP_PROD_IMG_URL + item.images[0].image;
  }

  const [variant, setVariant] = useState(0);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title={item.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <VariantsDropdown
              variants={item.variants}
              value={variant}
              setVariant={setVariant}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Bs. {item.price}
        </Button>
        <AddToCartButton disabled={+variant === 0}/>
      </CardActions>
    </Card>
  );
}
