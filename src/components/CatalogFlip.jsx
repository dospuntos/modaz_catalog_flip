import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DemoBook2 from "DemoBook2";
import '../index.scss';

const styles = ({ breakpoints }) => ({
  root: {
    padding: 16,
    [breakpoints.up("sm")]: {
      padding: 24,
      maxWidth: 500,
      margin: "auto",
    },
    [breakpoints.up("md")]: {
      maxWidth: 700,
    },
  },
});

const CatalogFlip = ({ classes, products }) => (
  <div className={classes.root}>
    <Typography variant={"title"}>FLIPBOOK</Typography>
    <Typography variant={"body1"}>Lorem ipsum dolor sit amet.</Typography>
    {/* {products.map((item) => {
      return <p>{item.name}</p>;
    })} */}
    <DemoBook2 products={products}/>
  </div>
);

CatalogFlip.propTypes = {};
CatalogFlip.defaultProps = {};

export default withStyles(styles)(CatalogFlip);
