export default function ProductImages({img, maxWidth}) {
    if (typeof img[0] === "undefined") return <p>Error</p>;
    if (img.length > 1) {
    return (
        <div className="product-img" style={{maxWidth}}>
            <img src={process.env.REACT_APP_PROD_IMG_URL + img[0].image} alt="" />
            <img src={process.env.REACT_APP_PROD_IMG_URL + img[1].image} alt="" />
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