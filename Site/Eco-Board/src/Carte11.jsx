import './index.css'
import nucleaire from "./assets/nucleaire.png"

function Carte() {
    return (
        <div className="carteJ">
            <div className="carteheader">
                <img className="icon" src={nucleaire}></img>
                <div className="météo">
                    <div className="exception">2024 - Production</div>
                    <div className="premiertitre">D'énergie</div>
                </div>
                <div className="dateJ">
                    <div className="case2J">1 564</div>
                    <div className="case1J">TWh</div>
                </div>
            </div>
            
            <div className="Emplacementtrait"><div className="trait"></div></div>
            
            <div className="détails">
                <h2 className="titredétails">Répartition des ressources</h2>
                
                <div className="idée">
                    <span className="detail-label">Nucléaire - 73%&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Renouvelables - 26%</span>
                    <span className="detail-label">Gaz - &lt;1%&ensp;&ensp;&ensp;&ensp;Pétrole - &lt;1%</span>
                    <span className="detail-label">Charbon - &lt;1%</span>
                </div>
            </div>
        </div>
    );
}

export default Carte
