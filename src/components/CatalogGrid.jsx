import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ProductCard from "modules/ProductCard";
import Grid from "@material-ui/core/Grid";

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

const CatalogGrid = ({ classes,products }) => (
  <Paper className={classes.root}>
    <Typography variant={"h3"}>Productos</Typography>
      <Grid container spacing={3}>
        {/* Trim products for testing */}
        {products.slice(0,90).map((item, n) =>  <Grid item xs={12} md={3}><ProductCard key={n} item={item}/></Grid>)}
      </Grid>
  </Paper>
);

CatalogGrid.propTypes = {};
CatalogGrid.defaultProps = {};

export default withStyles(styles)(CatalogGrid);
