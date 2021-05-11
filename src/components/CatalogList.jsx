import {useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import ProductImages from "modules/ProductImages";
import VariantsDropdown from "modules/VariantsDropdown";

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

const columns = [
  { id: "icon", label: "", minWidth: 50 },
  { id: "name", label: "Nombre", minWidth: 180 },
  {
    id: "username",
    label: "Talla/Color",
    minWidth: 170,
  },
  {
    id: "price",
    label: "Precio"
  },
];

function CatalogList({ classes, products }) {

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  /* Filter by search */
  let filteredProducts = products;
  filteredProducts = filteredProducts.filter((eachItem) => {
    return (
      eachItem["name"].toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const [variant, setVariant] = useState(0);

  return (
  <div className={classes.root}>
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography variant="h3">Productos</Typography>
          <Typography variant="subtitle2" gutterBottom>
            Mostrando {filteredProducts.length} de {products.length} items.
          </Typography>
        </Grid>

        <Grid item xs={6} style={{ textAlign: "right" }}>
          <TextField
            label="Buscar..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell>
                        {/* <Gravatar email={row.email} /> */}
                      <ProductImages img={row.images} maxWidth={100} />
                      </TableCell>
                      <TableCell>
                          {row.name}
                      </TableCell>
                      <TableCell>
                      <VariantsDropdown variants={row.variants} value={variant} setVariant={setVariant}/>
                      </TableCell>
                      <TableCell>
                        Bs. {row.price}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredProducts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  </div>)
};

CatalogList.propTypes = {};
CatalogList.defaultProps = {};

export default withStyles(styles)(CatalogList);
