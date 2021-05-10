import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
} from "@mui-treasury/layout";
import {
  getDefaultScheme,
  getStandardScheme,
  getFixedScheme,
  getContentBasedScheme,
  getCozyScheme,
  getMuiTreasuryScheme,
} from "@mui-treasury/layout/presets";

import NavContentEx from "./components/NavContentEx";
import NavHeaderEx from "./components/NavHeaderEx";
import HeaderEx from "./components/HeaderEx";
import FooterEx from "./components/FooterEx";
import CatalogFlip from "./components/CatalogFlip";
import CatalogGrid from "./components/CatalogGrid";
import CatalogList from "./components/CatalogList";
import { getProducts } from "./api/productApi";

import "index.scss";

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const presets = {
  createDefaultLayout: getDefaultScheme(),
  createStandardLayout: getStandardScheme(),
  createFixedLayout: getFixedScheme(),
  createContentBasedLayout: getContentBasedScheme(),
  createCozyLayout: getCozyScheme(),
  createMuiTreasuryLayout: getMuiTreasuryScheme(),
};

function App() {
  const [loading, setLoading] = useState(true);
  const [preset, setPreset] = useState("createStandardLayout");
  const [layout, setLayout] = useState("flip");
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getProducts().then((products) => {
      console.log("Products: ", products);
      if (typeof products !== "undefined") {
        setProducts(products);
        setLoading(false);
      }
    });
  }, []);

  let filteredProducts = products;

  if (typeof products.data !== "undefined") {
    // Filter products by search and send filtered products to display components.
    filteredProducts = products.data.products;

    /* Filter by search */
    filteredProducts = filteredProducts.filter((eachItem) =>
      eachItem["name"].toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return loading ? (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant={"h2"}>Cargando...</Typography>
    </div>
  ) : (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Root scheme={presets[preset]}>
        {({ state: { sidebar } }) => (
          <>
            <Header>
              <Toolbar>
                <SidebarTrigger sidebarId="primarySidebar" />
                <HeaderEx
                  searchText={searchText}
                  setSearchText={setSearchText}
                />
              </Toolbar>
            </Header>
            <DrawerSidebar sidebarId="primarySidebar">
              <SidebarContent>
                <NavHeaderEx collapsed={sidebar.primarySidebar.collapsed} />
                <NavContentEx setLayout={setLayout} layout={layout} />
              </SidebarContent>
              <CollapseBtn />
            </DrawerSidebar>
            <Content>
              {layout === "flip" && <CatalogFlip products={filteredProducts} />}
              {layout === "grid" && <CatalogGrid products={filteredProducts} />}
              {layout === "list" && <CatalogList products={filteredProducts} />}
            </Content>
            <Footer>
              <FooterEx />
            </Footer>
          </>
        )}
      </Root>
    </StylesProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
