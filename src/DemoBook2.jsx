import React from "react";
import HTMLFlipBook from 'react-pageflip';
import "book.scss";

const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        <div className="page-content">
          <img src="https://modaz.net/images/ZWS-Dist-Logo-PINK.png" alt="Moda Z" className="logo-img" />
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
          <PageItem src={process.env.REACT_APP_PROD_IMG_URL + props.image}/>
          {/* <div className="page-image" onClick={(e)=>handleClick(e)}><img src={process.env.REACT_APP_PROD_IMG_URL + props.image} alt="" /></div> */}
          <div className="page-text">{props.children}</div>
          <div className="page-footer">{props.number}</div>
        </div>
      </div>
    );
  });

  const PageItem = React.forwardRef((props, ref) => {
    return (
      <div className="item-block">
        <div onClick={(e)=>handleClick(e)} className="image-container" style={{background:'#fff url(' + props.src + ') center center / contain no-repeat'}}>

        </div>
        <div className="image-container" style={{backgroundColor:'red',width:200,heigh:200, float:"right"}}>
          IMAGE
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
              return <Page key={index} number={index} header={item.name} image={image}>{item.name}</Page>
          })}
          <PageCover>THE END</PageCover>

        </HTMLFlipBook>


      </div>
    );
}

export default DemoBook2