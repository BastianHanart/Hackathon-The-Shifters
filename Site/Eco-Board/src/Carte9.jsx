import './index.css'
import food from "./assets/food.png"

function Carte() {
    return (
        <div className="carteR">
            <div className="carteheader">
                <img className="icon" src={food}></img>
                <div className="météo">
                    <div className="deuxiemetitre">empreinte envir.</div>
                    <div className="premiertitre">Nourriture</div>
                </div>
                <div className="dateR">
                    <div className="case2">22%</div>
                    <div className="case1">individuelle</div>
                </div>
            </div>
            
            <div className="Emplacementtrait"><div className="trait"></div></div>
            
            <div className="détails">
                <h2 className="titredétails">Bilan Carbone :</h2>
                
                <div className="idée">
                    <div className="detail-label">Viande Rouge - 33%</div>  
                    <div className="detail-label">Chocolat & Cacao - 15%</div>
                    <div className="detail-label">Poisson et Crevette - 14%</div>
                    <div className="detail-label">Agneau & Mouton - 13% </div>
                    <div className="detail-label">Porc & Volaille - 7%</div>
                </div>
            </div>
        </div>
    );
}

export default Carte
