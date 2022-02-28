import _404_error from "../img/banners/404_error.svg"


export default function PageNotFounc() {
    return (
        <div className="full-page">
            <img src={_404_error} alt="" style={{
                width: "100%"
            }} />
        </div>
    )
}