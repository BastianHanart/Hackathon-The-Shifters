import './index.css'
import O2 from "./assets/O2.png"

function Carte() {
    return (
        <div className="carteR">
            <div className="carteheader">
                <img className="icon" src={O2}></img>
                <div className="météo">
                    <div className="deuxiemetitre">Qualité de l'air</div>
                    <div className="premiertitre">Moyenne</div>
                </div>
                <div className="dateR">
                    <div className="case2">65</div>
                    <div className="case1">IQA+ US</div>
                </div>
            </div>
            
             <div className="Emplacementtrait"><div className="trait"></div></div>
            
            <div className="détails">
                <h2 className="titredétails">Qualité de l'air par polluant</h2>
                
                <div className="idée">
                    <span className="detail-label">Particules (PM10) : 28 µg/m³</span>
                    <span className="detail-label">Particules fines (PM10) : 19 µg/m³</span>
                    <span className="detail-label">Ozone (O₃) : 36 µg/m³</span>
                    <span className="detail-label">Dioxyde d'Azote (NO₂) : 32 µg/m³</span>
                    <span className="detail-label">Dioxyde de soufre (SO₂) : 12 µg/m³</span>
                </div>
            </div>
        </div>
    );
}

export default Carte
