import logo from "./logo.png"

function Logo({image=logo, className="h-4 w-4 rounded-sm" }) {

    return(
        <div className= {`${className}`}>
            <img className= {`${className}`}
            src = {image}
            alt= "logo"
            >
            </img>
        </div>
    )
}
export default Logo