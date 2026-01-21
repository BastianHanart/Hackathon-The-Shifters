import DashBoard from './assets/DashBoard.svg'
import './index.css'

function dashboard() {

    return <img className="DashBoard" style={{display: "block", width: "55vw", objectFit: "cover", maxHeight: "100vh"}} src={DashBoard} alt = "DashBoard"/>
}

export default dashboard