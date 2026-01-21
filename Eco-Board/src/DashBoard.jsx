import DashBoard from './assets/DashBoard.svg'
import './index.css'

function Dashboard() {
  return (
    <img
      className="DashBoard"
      src={DashBoard}
      alt="DashBoard"
      style={{
        display: "block",
        width: "55vw",
        height: "auto",
        maxWidth: "100%",
        objectFit: "contain"
      }}
    />
  );
}

export default Dashboard;