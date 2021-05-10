import React, {useState} from "react";
import HTMLFlipBook from 'react-pageflip';

const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });

  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <h2 className="page-header">{props.header}</h2>
          <div className="page-image"><img src={process.env.REACT_APP_PROD_IMG_URL + props.image} alt="" /></div>
          <div className="page-text">{props.children}</div>
          <div className="page-footer">{props.price}</div>
        </div>
      </div>
    );
  });


  function DemoBook2({products}) {

    return (
        <div style={{overflow:"hidden"}}>
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
          {products.slice(0,60).map((item, index) => {
              let image = (typeof item.images[0] === "undefined") ? "default.png" : item.images[0].image;
              return <Page key={index} header={item.name} image={image}>{item.name}</Page>
          })}
          <PageCover>THE END</PageCover>

        </HTMLFlipBook>


      </div>
    );
}

export default DemoBook2