import './index.css'
import energie from "./assets/energie.png"

function Carte() {
    return (
        <div className="carteR">
            <div className="carteheader">
                <img className="icon" src={energie}></img>
                <div className="météo">
                    <div className="exception">2024 - Consommation</div>
                    <div className="premiertitre">D'énergie</div>
                </div>
                <div className="dateR">
                    <div className="case2">2 575</div>
                    <div className="case1">TWh</div>
                </div>
            </div>
            
            <div className="Emplacementtrait"><div className="trait"></div></div>
            
            <div className="détails">
                <h2 className="titredétails">Répartition des ressources</h2>
                
                <div className="idée">
                    <span className="detail-label">Nucléaire - 41%&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Pétrole - 28%</span>
                    <span className="detail-label">Renouvlables - 15,2%&ensp;&ensp;&ensp;&ensp;Gaz - 13%</span>
                    <span className="detail-label">Charbon - 2%</span>
                </div>
            </div>
        </div>
    );
}

export default Carte
