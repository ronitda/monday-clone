
import {useNavigate} from "react-router-dom"

const Nav = () => {

    const navegate = useNavigate()

    return (
    <nav>
        <div className="logo-container">
            <img src="T-Shoes.jpg" alt="logo"/>
        </div>
        <div className="controls-container">
            <div className="icon" onClick={() => navegate("/tickets")}>+</div>
            <div className="icon" onClick={() => navegate("/")}>-</div>
        </div>
    </nav>
    )
} 

export default Nav