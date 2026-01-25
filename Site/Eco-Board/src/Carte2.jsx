import './index.css'
import CO2 from "./assets/CO2.png"

function Carte() {
    return (
        <div className="carteR">
            <div className="carteheader">
                <img className="icon" src={CO2}></img>
                <div className="météo">
                    <div className="premiertitre">363,5 Mt</div>
                    <div className="deuxiemetitre">équivalent CO₂</div>
                </div>
                <div className="dateR">
                    <div className="case1">année.</div>
                    <div className="case2">2025</div>
                </div>
            </div>
            
             <div className="Emplacementtrait"><div className="trait"></div></div>
            
            <div className="détails">
                <h2 className="titredétails">C'est 1,6% de moins qu'en 2024</h2>
            </div>
        </div>
    );
}

export default Carte
