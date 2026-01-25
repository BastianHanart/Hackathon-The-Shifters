import './index.css'
import city from "./assets/city.png"

function Carte() {
    return (
        <div className="carteJ">
            <div className="carteheader">
                <img className="icon" src={city}></img>
                <div className="météo">
                    <div className="deuxiemetitre">Espaces</div>
                    <div className="premiertitre">Urbains</div>
                </div>
                <div className="dateJ">
                    <div className="case2J">13,35M</div>
                    <div className="case1J">hectares</div>
                </div>
            </div>
            
             <div className="Emplacementtrait"><div className="trait"></div></div>
            
            <div className="détails">
                <h2 className="titredétails">En France, les espaces urbains couvraient 13.35M d’hectares en 2021 !</h2>
            </div>
        </div>
    );
}

export default Carte
