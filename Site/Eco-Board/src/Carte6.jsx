import './index.css'
import champ from "./assets/domaine.png"

function Carte() {
    return (
        <div className="carte">
            <div className="carteheader">
                <img className="icon" src={champ}></img>
                <div className="météo">
                    <div className="deuxiemetitre">Espaces</div>
                    <div className="premiertitre">Agricoles</div>
                </div>
                <div className="date">
                    <div className="case2">28M</div>
                    <div className="case1">hectares</div>
                </div>
            </div>
            
             <div className="Emplacementtrait"><div className="trait"></div></div>
            
            <div className="détails">
                <h2 className="titredétails">En France, les espaces agricoles couvraient 28M d’hectares en 2025 !</h2>
            </div>
        </div>
    );
}

export default Carte
