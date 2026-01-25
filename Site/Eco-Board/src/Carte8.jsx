import './index.css'
import recycle from "./assets/recycle.png"

function Carte() {
    return (
        <div className="carteJ">
            <div className="carteheader">
                <img className="icon" src={recycle}></img>
                <div className="météo">
                    <div className="exception">Taux global de</div>
                    <div className="premiertitre">Recyclage</div>
                </div>
                <div className="dateJ">
                    <div className="case2J">52 %</div>
                    <div className="case1J">en 2024</div>
                </div>
            </div>
            
             <div className="Emplacementtrait"><div className="trait"></div></div>
            
            <div className="détails">
                <h2 className="titredétails">Répartition des ressources</h2>
                
                <div className="idée">
                    <span className="detail-label">Verre - 78%&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Acier - 78%</span>
                    <span className="detail-label">Aluminium - 42%&ensp;&ensp;&ensp;&ensp; Plastique - 40%</span>
                    <span className="detail-label">Papier - 61%&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Carton - 68%</span>
                </div>
            </div>
        </div>
    );
}

export default Carte
