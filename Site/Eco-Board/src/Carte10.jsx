import './index.css'
import randonnee from "./assets/randonnee.png"

function Carte() {
    return (
        <div className="carte">
            <div className="carteheader">
                <img className="icon" src={randonnee}></img>
                <div className="météo">
                    <div className="deuxiemetitre">Transport le + utilisé</div>
                    <div className="premiertitre">La marche</div>
                </div>
                <div className="date">
                    <div className="case2">53%</div>
                    <div className="case1">à Paris</div>
                </div>
            </div>
            
            <div className="Emplacementtrait"><div className="trait"></div></div>
            
            <div className="détails">
                <h2 className="titredétails">Classement des moyen de déplacement en 2025</h2>
                
                <div className="idée">
                    <div className="detail-label">Marche à pied - 53%</div>  
                    <div className="detail-label">Transport en commun - 30%</div>
                    <div className="detail-label">Vélo - 11%</div>
                    <div className="detail-label">Voiture - 4%</div>
                </div>
            </div>
        </div>
    );
}

export default Carte
