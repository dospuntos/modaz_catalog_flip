import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
/* import CartContents from "modules/cart/CartContents"; */
import { useCart } from "modules/cartContext";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    right: 25,
    bottom: 25,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function CartButton() {
  const { cart, dispatch } = useCart();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [cartUser, setCartUser] = useState("0");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  function handleSetCartUser(e) {
    setCartUser(e.target.value);
  }

  /* function saveCart(cart, user, type) {
    createOrder(cart, user, type);
    //TODO: Empty cart using cartReducer.
    //handleEmptyCart(false); // Empty cart without confirmation
    dispatch({ type: "empty2" });
    history.push("/orders"); // Redirect to orders
  } */

  function countCartItems() {
    let cartItems = 0;
    cart.map((i) => (cartItems += parseInt(i.order_item_quantity)));
    return cartItems;
  }

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <Badge badgeContent={countCartItems()} color="secondary">
          <ShoppingCart />
        </Badge>
      </Fab>

     {/*  <CartContents
        dispatch={dispatch}
        open={open}
        cart={cart}
        onClose={handleClose}
        users={users}
        cartUser={cartUser}
        handleSetCartUser={handleSetCartUser}
        saveCart={saveCart}
      /> */}
    </div>
  );
}
