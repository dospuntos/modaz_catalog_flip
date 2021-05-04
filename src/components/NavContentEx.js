import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

const list = [
  {
    primaryText: "Catálogo",
    icon: "menu_book",
    view: "flip",
  },
  {
    primaryText: "Rejilla",
    icon: "view_module",
    view: "grid",
  },
  {
    primaryText: "Lista",
    icon: "list",
    view: "list",
  },
];
const NavContentEx = ({ layout, setLayout }) => (
  <List>
    {list.map(({ primaryText, icon, view }, i) => (
      <ListItem
        key={primaryText}
        selected={view === layout}
        button
        onClick={() => setLayout(view)}
      >
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText
          primary={primaryText}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
    ))}
    <Divider style={{ margin: "12px 0" }} />
    <ListItem button>
      <ListItemIcon>
        <Icon>settings</Icon>
      </ListItemIcon>
      <ListItemText
        primary={"Mi Cuenta"}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>email</Icon>
      </ListItemIcon>
      <ListItemText
        primary={"Contacto"}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>help_outline</Icon>
      </ListItemIcon>
      <ListItemText
        primary={"Ayuda"}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
  </List>
);

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;
