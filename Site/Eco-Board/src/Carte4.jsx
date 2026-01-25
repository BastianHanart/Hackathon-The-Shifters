import './index.css'
import Forets from "./assets/Forest.png"

function Carte() {
    return (
        <div className="carteJ">
            <div className="carteheader">
                <img className="icon" src={Forets}></img>
                <div className="météo">
                    <div className="deuxiemetitre">Espaces</div>
                    <div className="premiertitre">Forestier</div>
                </div>
                <div className="dateJ">
                    <div className="case2J">17,6M</div>
                    <div className="case1J">hectares</div>
                </div>
            </div>
            
             <div className="Emplacementtrait"><div className="trait"></div></div>
            
            <div className="détails">
                <h2 className="titredétails">En France, les espaces forestier couvraient 17,6M d'hectares en 2025 !</h2>
                
                <div className="idée">
                    <span className="detail-label">+0,57% par rapport à 2024</span>
                </div>
            </div>
        </div>
    );
}

export default Carte
