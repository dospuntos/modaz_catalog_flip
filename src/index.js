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
import ContentForm from "./components/ContentForm";
import ContentEx from "./components/ContentEx";
import FooterEx from "./components/FooterEx";
import CatalogFlip from "./components/CatalogFlip";
import CatalogGrid from "./components/CatalogGrid";
import CatalogList from "./components/CatalogList";
import { getProducts } from "./api/productApi";

/* import "./styles.css"; */

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
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true,
  });
  const [layout, setLayout] = useState("flip");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      console.log(products);
      setLoading(false);
    });
  });

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
                <HeaderEx />
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
              {/* <ContentForm
                preset={preset}
                onChangePreset={(val) => {
                  setLoading(true);
                  setPreset(val);
                  setTimeout(() => setLoading(false), 500);
                }}
                data={data}
                onChangeData={setData}
              /> */}
              {/* {data.content && <ContentEx />} */}
              {layout === "flip" && (
                <CatalogFlip products={products.data.products} />
              )}
              {layout === "grid" && <CatalogGrid />}
              {layout === "list" && <CatalogList />}
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
