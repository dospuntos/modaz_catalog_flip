import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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

const CatalogGrid = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant={"title"}>Grid View</Typography>
    <Typography variant={"body1"}>Lorem ipsum dolor sit amet.</Typography>
  </div>
);

CatalogGrid.propTypes = {};
CatalogGrid.defaultProps = {};

export default withStyles(styles)(CatalogGrid);
