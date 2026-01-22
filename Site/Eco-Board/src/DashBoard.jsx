import DashBoard from './assets/DashBoard.svg'
import './index.css'

function Dashboard() {
  return (
    <img                        // J'ai rendu le return un peu plus lisible
      className="DashBoard"
      src={DashBoard}
      alt="DashBoard"
      style={{
        display: "block",
        width: "55vw",
        height: "auto",
        maxWidth: "100%",
        objectFit: "contain"    // et j'ai modifié ça pour que ce soit beau, avant c'était "cover" et du coup ça coupait les éléments limitrophes
      }}
    />
  );
}

export default Dashboard;