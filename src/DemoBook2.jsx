import React from "react";
import HTMLFlipBook from "react-pageflip";
import "book.scss";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <img
          src="https://modaz.net/images/ZWS-Dist-Logo-PINK.png"
          alt="Moda Z"
          className="logo-img"
        />
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

function handleClick(e) {
  e.stopPropagation();
  console.log("Clicked");
}

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">{props.header}</h2>
        {props.pageItems.map((item, index) => {
          return <PageItem key={index} items={item} />;
        })}
        {/* <div className="page-image" onClick={(e)=>handleClick(e)}><img src={process.env.REACT_APP_PROD_IMG_URL + props.image} alt="" /></div> */}
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number}</div>
      </div>
    </div>
  );
});

const PageItem = React.forwardRef((props, ref) => {
  let image =
    typeof props.items.images[0] === "undefined"
      ? "default.png"
      : props.items.images[0].image;
  return (
    <div className="item-block" ref={ref}>
      <div
        onClick={(e) => handleClick(e)}
        className="image-container"
        style={{
          background:
            "#fff url(" +
            process.env.REACT_APP_PROD_IMG_URL +
            image +
            ") center center / contain no-repeat",
        }}
      ></div>
      <div
        className="description-container"
        style={{
          float: "left",
          maxWidth: "50%"
        }}
      >
        <h3>{props.items.name}</h3>
      </div>
    </div>
  );
});

const partitionArray = (array, size) =>
  array
    .map((e, i) => (i % size === 0 ? array.slice(i, i + size) : null))
    .filter((e) => e);

function DemoBook2({ products }) {
  let groupedProducts = partitionArray(products, 3);
  return (
    <div style={{ overflow: "hidden" }}>
      <HTMLFlipBook
        width={900}
        height={900}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1000}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="demo-book"
        ref={(el) => (window.flipBook = el)}
      >
        <PageCover>NUESTROS PRODUCTOS</PageCover>
        {groupedProducts.map((pageItems, index) => {
          /* let image =
            typeof item.images[0] === "undefined"
              ? "default.png"
              : item.images[0].image; */
          return <Page key={index} number={index} pageItems={pageItems}></Page>;
        })}
        <PageCover>THE END</PageCover>
      </HTMLFlipBook>
    </div>
  );
}

export default DemoBook2;
