import { withStyles } from "@material-ui/core/styles";
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
      maxWidth: "100%",
    },
  },
});

const CatalogFlip = ({ classes, products }) => (
  <div className={classes.root}>
    <DemoBook2 products={products}/>
  </div>
);

CatalogFlip.propTypes = {};
CatalogFlip.defaultProps = {};

export default withStyles(styles)(CatalogFlip);
