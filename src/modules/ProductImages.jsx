import TinySlider from "tiny-slider-react";

const settings = {
  lazyload: false,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false
};

export default function ProductImages({img, maxWidth}) {
    if (typeof img[0] === "undefined") {
        return (
            <div className="product-img" style={{maxWidth}}>
                <img src={process.env.REACT_APP_PROD_IMG_URL + "default.png"} alt="" />
            </div>
        )
    }
    if (img.length > 1) {
    return (
        <div className="product-img" style={{maxWidth}}>
            <TinySlider settings={settings}>
                {img.map((el, index) => (
                <div key={index} style={{ position: "relative" }}>
                    <img
                    className={`tns-lazy-img`}
                    src={process.env.REACT_APP_PROD_IMG_URL + el.image}
                    data-src={el}
                    alt=""
                    style={{maxWidth}}
                    />
                </div>
                ))}
            </TinySlider>
        </div>
    )
    } else {
        return (
            <div className="product-img" style={{maxWidth}}>
                <img src={process.env.REACT_APP_PROD_IMG_URL + img[0].image} alt="" />
            </div>
        )
    }
}