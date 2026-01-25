import './index.css'
import parc from "./assets/ecologie.png"

function Carte() {
    return (
        <div className="carte">
            <div className="carteheader">
                <img className="icon" src={parc}></img>
                <div className="météo">
                    <div className="deuxiemetitre">Espaces</div>
                    <div className="premiertitre">Verts</div>
                </div>
                <div className="date">
                    <div className="case2">96 m²</div>
                    <div className="case1">/ habitants</div>
                </div>
            </div>
            
             <div className="Emplacementtrait"><div className="trait"></div></div>
            
            <div className="détails">
                <h2 className="titredétails">96 m² de surface moyenne d’espaces verts par habitant dans les zones urbaines françaises !</h2>
            </div>
        </div>
    );
}

export default Carte
